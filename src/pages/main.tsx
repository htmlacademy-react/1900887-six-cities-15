import { FC, Fragment } from 'react';
import { Offers, IOffer } from '../types/offers';
import { capitalize } from '../utils';
import { PlaceCardMark } from '../components/place-card-mark';
import { Link } from 'react-router-dom';

const CitiesTabs = () => (
  <Fragment>
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Paris</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Cologne</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Brussels</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item tabs__item--active">
              <span>Amsterdam</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Hamburg</span>
            </a>
          </li>
          <li className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>Dusseldorf</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </Fragment>
);
const CityPlace: FC<IOffer> = ({offer}) => {
  const {id, title, type, price, isPremium, rating, previewImage} = offer;
  return (
    <article className="cities__card place-card">
      {isPremium ? <PlaceCardMark /> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
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
            <span style={{width: `${rating * 20}%`}}></span>
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

const PlacesSorting = () => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>&nbsp;
    <span className="places__sorting-type" tabIndex={0}>
                  Popular
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className="places__options places__options--custom places__options--opened">
      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
      <li className="places__option" tabIndex={0}>Price: low to high</li>
      <li className="places__option" tabIndex={0}>Price: high to low</li>
      <li className="places__option" tabIndex={0}>Top rated first</li>
    </ul>
  </form>
);

const CityPlacesList: FC<Offers> = ({offers}) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((item) => <CityPlace offer={item} key={item.id}/>)}
  </div>
);

const CityPlaces: FC<Offers> = ({offers}) => (
  <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">places to stay in Amsterdam</b>
    <PlacesSorting/>
    <CityPlacesList offers={offers}/>
  </section>
);

const CityMap = () => (
  <div className="cities__right-section">
    <section className="cities__map map"></section>
  </div>
);

export const Main: FC<Offers> = ({offers}) => (
  <main className="page__main page__main--index">
    <CitiesTabs/>
    <div className='cities'>
      <div className="cities__places-container container">
        <CityPlaces offers={offers}/>
        <CityMap/>
      </div>
    </div>
  </main>
);
