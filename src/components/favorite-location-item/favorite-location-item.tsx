import { Link } from 'react-router-dom';
import { PlaceCardMark } from '../place-card-mark';
import { FavoriteOffer } from '../../types/offers';
import { FC } from 'react';
import { Bookmark } from '../favorites-bookmark';

export const FavoriteLocationItem: FC<FavoriteOffer> = ({ offer }) => {

  const { id, isPremium, price, isFavorite, rating, title, previewImage } = offer;

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
          {isPremium ? <PlaceCardMark /> : ''}
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to={`/offer/${id}`}>
              <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
            </Link>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <Bookmark id={id} bookmarkClassName='place-card' isFavorite={isFavorite} height={19} width={18} />
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{ width: 20 * rating }}></span>
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
