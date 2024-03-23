import { FC } from 'react';
import { TOffer, TCityPlacesList } from '../../types/offers';
import { PlaceCardMark } from '../place-card-mark';
import { Link } from 'react-router-dom';
import { capitalize } from '../../utils';
import { AppRoutes } from '../../app/routes/routes';

const CityPlace: FC<TOffer> = ({ offer, onOfferHover, onMouseOff }) => {
  const handleOfferHover = () => onOfferHover(offer);
  const handleMouseOff = () => onMouseOff(null);

  const { id, title, type, price, isPremium, rating } = offer;

  return (
    <article className="cities__card place-card" onMouseEnter={handleOfferHover} onMouseLeave={handleMouseOff}>
      {isPremium ? <PlaceCardMark /> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoutes.Offer}/${id}`}>
          <img className="place-card__image" src='img/apartment-01.jpg' width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
};

export const CityPlacesList: FC<TCityPlacesList> = ({ offers, onOfferHover, onMouseOff }) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => <CityPlace offer={offer} key={offer.id} onOfferHover={onOfferHover} onMouseOff={onMouseOff} />)}
  </div>
);
