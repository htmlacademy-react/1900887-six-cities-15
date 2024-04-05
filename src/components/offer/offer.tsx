import { Fragment, memo } from 'react';
import { Offer as IOffer } from '../../types/offers';
import { OfferGallery } from './offer-gallery';
import { OfferMark } from './offer-mark';
import { OfferTitle } from './offer-title';
import { OfferRating } from './offer-rating';
import { OfferFeatures } from './offer-features';
import { OfferPrice } from './offer-price';
import { OfferInside } from './offer-inside';
import { OfferHost } from './offer-host';
import { OfferReviews } from './offer-reviews';
import { OfferMap } from './offer-map';
import { OfferNearPlaces } from './offer-near-places';

type TOffer = {
  offer: IOffer;
}

const Offer = ({ offer }: TOffer) => {
  const { title, type, price, isPremium, isFavorite, rating, goods, bedrooms, maxAdults, host: { name, avatarUrl, isPro }, description, images } = offer;

  return (
    <Fragment>
      <section className="offer">
        <OfferGallery images={images} />
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium && <OfferMark />}
            <OfferTitle title={title} isFavorite={isFavorite} />
            <OfferRating rating={rating} />
            <OfferFeatures bedrooms={bedrooms} type={type} maxAdults={maxAdults} />
            <OfferPrice price={price} />
            <OfferInside goods={goods} />
            <OfferHost name={name} avatarUrl={avatarUrl} isPro={isPro} description={description} />
            <OfferReviews />
          </div>
        </div>
        <OfferMap />
      </section>
      <OfferNearPlaces />
    </Fragment>
  );
};

const MemoOffer = memo(Offer);

export { MemoOffer as Offer };
