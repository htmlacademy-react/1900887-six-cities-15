import { Fragment, memo } from 'react';
import { Offer as IOffer } from '../../types/offers.ts';
import { OfferGallery } from '../offer-gallery';
import { OfferMark } from '../offer-mark';
import { OfferTitle } from '../offer-title';
import { OfferRating } from '../offer-rating';
import { OfferFeatures } from '../offer-features';
import { OfferPrice } from '../offer-price';
import { OfferInside } from '../offer-inside';
import { OfferHost } from '../offer-host';
import { OfferReviews } from '../reviews-component';
import { OfferNearPlaces } from '../offer-near-places';
import { ReviewsInfo } from '../../types/reviews';
import { Nullable } from 'vitest';
import { Map } from '../map';
import { useAppSelector } from '../../app/hooks';
import { getNearPlaces } from '../../store/selectors';

type TOffer = {
  offer: IOffer;
  comments: Nullable<ReviewsInfo>;
}

const Offer = ({ offer, comments }: TOffer) => {
  const nearPlaces = useAppSelector(getNearPlaces)?.concat(offer);

  const { id, title, type, price, isPremium, isFavorite, rating, goods, bedrooms, maxAdults, city, host: { name, avatarUrl, isPro }, description, images } = offer;

  if (!nearPlaces) {
    return '';
  }

  return (
    <Fragment>
      <section className="offer">
        <OfferGallery images={images} />
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium && <OfferMark />}
            <OfferTitle id={id} title={title} isFavorite={isFavorite} />
            <OfferRating rating={rating} />
            <OfferFeatures bedrooms={bedrooms} type={type} maxAdults={maxAdults} />
            <OfferPrice price={price} />
            <OfferInside goods={goods} />
            <OfferHost name={name} avatarUrl={avatarUrl} isPro={isPro} description={description} />
            <OfferReviews id={id} comments={comments} />
          </div>
        </div>
        <Map city={city} offers={nearPlaces} selectedOffer={offer} className={'offer__map'} />
      </section>
      <OfferNearPlaces offers={nearPlaces} />
    </Fragment>
  );
};

const MemoOffer = memo(Offer);

export { MemoOffer as Offer };
