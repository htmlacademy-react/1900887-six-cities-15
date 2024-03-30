import { FC } from 'react';
import { TOffer, TCityPlacesList } from '../../types/offers';
import { PlaceCardMark } from '../place-card-mark';
import { Link } from 'react-router-dom';
import { capitalize } from '../../utils';
import { AppRoutes } from '../../app/routes/routes';
import { Bookmark } from '../favorites/bookmark';

const CityPlace: FC<TOffer> = ({ offer, onMouseEvent }) => {
  const handleOfferHover = () => onMouseEvent(offer);
  const handleMouseOff = () => onMouseEvent(null);

  const { id, title, type, price, isPremium, rating, previewImage, isFavorite } = offer;

  return (
    <article className="cities__card place-card" onMouseEnter={handleOfferHover} onMouseLeave={handleMouseOff}>
      <Link to={`${AppRoutes.Offer}/${id}`}>
        {isPremium && <PlaceCardMark />}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <Bookmark isFavorite={isFavorite} bookmarkClassName='place-card' height={18} width={19} />
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: `${rating * 20}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">{title}</h2>
          <p className="place-card__type">{capitalize(type)}</p>
        </div>
      </Link>
    </article>
  );
};

export const CityPlacesList: FC<TCityPlacesList> = ({ offers, onMouseEvent }) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer) => <CityPlace offer={offer} key={offer.id} onMouseEvent={onMouseEvent} />)}
  </div>
);
