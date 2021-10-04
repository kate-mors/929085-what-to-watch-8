import React from "react";

type FilmProps = {
  titleItem: string;
}

function FilmCard({titleItem}:FilmProps): JSX.Element {
  return (
    <React.Fragment>
      <article className="small-film-card catalog__films-card">
        <div className="small-film-card__image">
          <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={titleItem} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">{titleItem}</a>
        </h3>
      </article>
    </React.Fragment>
  )
}

export default FilmCard;
