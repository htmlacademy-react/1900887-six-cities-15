import { FC } from 'react';
import {FavoriteOffers, IOffer} from '../types/offers';
import { PlaceCardMark } from '../components/place-card-mark';
import { Link } from 'react-router-dom';

const FavoriteLocationItems: FC<IOffer> = ({offer}) => {
  const {id, isPremium, price, rating, title, previewImage} = offer;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        {/* <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div> */}
      </div>
      <div className="favorites__places">
        <article className="favorites__card place-card">
          {isPremium ? <PlaceCardMark/> : ''}
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to={`/offer/${id}`}>
              <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
            </Link>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: 20 * rating}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to={`/offer/${id}`}>{title}</Link>
            </h2>
            <p className="place-card__type">Apartment</p>
          </div>
        </article>
      </div>
    </li>
  );
};


const FavoritesList: FC<FavoriteOffers> = ({offers}) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <ul className="favorites__list">
      {favoriteOffers.map((item) => <FavoriteLocationItems key={item.id} offer={item}/>)}
    </ul>
  );
};


export const Favorites: FC<FavoriteOffers> = ({offers}) => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <FavoritesList offers={offers}/>
      </section>
    </div>
  </main>
);
