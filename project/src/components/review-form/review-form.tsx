import React, {ChangeEvent} from 'react';
import { useState, FormEvent } from 'react';

function ReviewForm(): JSX.Element {
  const ratingStars = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState('');

  const handleImputChange = () => setChecked((state) => !state);

  const handleTextAreaChange = (e:ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);

  const handleFormSubmit = (evt:FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleFormSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {ratingStars.map((star) => (
            <>
              <input
                className="rating__input"
                id={`star-${star}`}
                type="radio"
                name="rating"
                value={star}
                checked={checked}
                onChange={handleImputChange}
              />
              <label className="rating__label" htmlFor={`star-${star}`}>
                Rating {star}
              </label>
            </>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={text}
          onChange={handleTextAreaChange}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
