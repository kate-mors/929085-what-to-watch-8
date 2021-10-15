import React from 'react';
import { useState, FormEvent } from 'react';

function ReviewForm(): JSX.Element {
  const ratingStars = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState('');

  const handleChange = () => setChecked((state) => !state);

  const handleSubmit = (evt:FormEvent<HTMLFormElement >) => {
    evt.preventDefault();
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
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
                onChange={handleChange}
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
          onChange={(e) => setText(e.target.value)}
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
