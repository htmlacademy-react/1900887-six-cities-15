import { FC, useState, ChangeEvent } from 'react';
import { HostInfo, Offer, OfferFeaturesType, OffersInfo } from '../types/offers';
import { useParams } from 'react-router-dom';
import { capitalize } from '../utils';
import { NotFound } from '../components/404';
import { Nullable } from 'vitest';

const OfferImageWrapper = ({image}: {image: string}) => (
  <div className="offer__image-wrapper">
    <img className="offer__image" src={image} alt="Photo studio"/>
  </div>
);

const OfferGallery = ({images}: {images: string[]}) => (
  <div className="offer__gallery-container container">
    <div className="offer__gallery">
      {images.map((image) => <OfferImageWrapper image={image} key={image}/>)}
    </div>
  </div>
);

const OfferMark = () => (
  <div className="offer__mark">
    <span>Premium</span>
  </div>
);

const OfferTitle = ({title}: {title: string}) => (
  <div className="offer__name-wrapper">
    <h1 className="offer__name">
      {title}
    </h1>
    <button className="offer__bookmark-button button" type="button">
      <svg className="offer__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  </div>
);

const OfferRating = ({rating}: {rating: number}) => (
  <div className="offer__rating rating">
    <div className="offer__stars rating__stars">
      <span style={{width: `${20 * rating}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
    <span className="offer__rating-value rating__value">{rating}</span>
  </div>
);

const OfferFeatures = ({type, bedrooms, maxAdults}: OfferFeaturesType) => (
  <ul className="offer__features">
    <li className="offer__feature offer__feature--entire">
      {capitalize(type)}
    </li>
    <li className="offer__feature offer__feature--bedrooms">
      {bedrooms} Bedrooms
    </li>
    <li className="offer__feature offer__feature--adults">
      Max {maxAdults} adults
    </li>
  </ul>
);

const OfferPrice = ({price}: {price: number}) => (
  <div className="offer__price">
    <b className="offer__price-value">&euro;{price}</b>
    <span className="offer__price-text">&nbsp;night</span>
  </div>
);

const OfferInsideItem = ({item}: {item: string}) => (
  <li className="offer__inside-item">
    {item}
  </li>
);

const OfferInside = ({goods} : {goods?: [string]}) => {
  if (!goods || goods.toString().length === 0) {
    return '';
  }

  const goodsList: Nullable<string[]> = goods.toString().split(',') || null;
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goodsList.map((good) => <OfferInsideItem item={good} key={good}/>)}
      </ul>
    </div>
  );
};

const OfferHost = ({name, avatarUrl, isPro, description}: HostInfo) => (
  <div className="offer__host">
    <h2 className="offer__host-title">Meet the host</h2>
    <div className="offer__host-user user">
      <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
        <img className="offer__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"/>
      </div>
      <span className="offer__user-name">
        {name}
      </span>
      <span className="offer__user-status">
        {isPro ? 'Pro' : ''}
      </span>
    </div>
    <div className="offer__description">
      <p className="offer__text">
        {description}
      </p>
    </div>
  </div>
);

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    rating: '0',
    review: ''
  });

  const handleRatingChange = (evt: ChangeEvent) => {
    const {name, value} = evt.target as HTMLInputElement;
    setFormData({...formData, [name]: value});
  };

  // const handleInputChange = (evt) => {

  // };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange={handleRatingChange}/>
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange={handleRatingChange}/>
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange={handleRatingChange}/>
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange={handleRatingChange}/>
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange={handleRatingChange}/>
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleRatingChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
};

const OfferReviews = () => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
    <ul className="reviews__list">
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
          </div>
          <span className="reviews__user-name">
                        Max
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: '80%'}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
          </p>
          <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
        </div>
      </li>
    </ul>
    <ReviewForm />
  </section>
);

const OfferMap = () => (
  <section className="offer__map map"></section>
);

const OfferOther = () => (
  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <article className="near-places__card place-card">
          <div className="near-places__image-wrapper place-card__image-wrapper">
            <a href="#">
              <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image"/>
            </a>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;80</b>
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
                <span style={{width: '80%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <a href="#">Wood and stone place</a>
            </h2>
            <p className="place-card__type">Room</p>
          </div>
        </article>

        <article className="near-places__card place-card">
          <div className="near-places__image-wrapper place-card__image-wrapper">
            <a href="#">
              <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image"/>
            </a>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;132</b>
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
                <span style={{width: '80%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <a href="#">Canal View Prinsengracht</a>
            </h2>
            <p className="place-card__type">Apartment</p>
          </div>
        </article>

        <article className="near-places__card place-card">
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
          <div className="near-places__image-wrapper place-card__image-wrapper">
            <a href="#">
              <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image"/>
            </a>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;180</b>
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
                <span style={{width: '100%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <a href="#">Nice, cozy, warm big bed apartment</a>
            </h2>
            <p className="place-card__type">Apartment</p>
          </div>
        </article>
      </div>
    </section>
  </div>
);

export const OfferComponent: FC<OffersInfo> = ({offers})=> {
  const params = useParams();
  const offer:Nullable<Offer> = offers.find((item) => item.id === params.id) || null;

  if (!offer) {
    return (<NotFound/>);
  }

  const {title, type, price, isPremium, rating, goods, bedrooms, maxAdults, host: {name, avatarUrl, isPro}, description, images} = offer;

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <OfferGallery images={images}/>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium ? <OfferMark/> : ''}
            <OfferTitle title={title}/>
            <OfferRating rating={rating}/>
            <OfferFeatures bedrooms={bedrooms} type={type} maxAdults={maxAdults}/>
            <OfferPrice price={price} />
            <OfferInside goods={goods}/>
            <OfferHost name={name} avatarUrl={avatarUrl} isPro={isPro} description={description}/>
            <OfferReviews/>
          </div>
        </div>
        <OfferMap/>
      </section>
      <OfferOther/>
    </main>
  );
};
