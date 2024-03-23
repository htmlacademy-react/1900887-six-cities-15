import { NotFound } from '../components/404';

import {
  OfferGallery,
  OfferFeatures,
  OfferHost,
  OfferInside,
  OfferMap,
  OfferMark,
  OfferTitle,
  OfferRating,
  OfferPrice,
  OfferReviews,
  OfferNearPlaces
} from '../components/offer/index';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useParams } from 'react-router-dom';
import { fetchOfferAction } from '../store/api-actions';
import { useEffect } from 'react';
import { getOffer } from '../store/action';


export const OfferComponent = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => state.selectedOffer);
  useEffect(() => {
    dispatch(fetchOfferAction(id));
    return () => {
      dispatch(getOffer(null));
    };
  }, [id, dispatch]);

  if (!offer) {
    return (<NotFound />);
  }

  const { title, type, price, isPremium, rating, goods, bedrooms, maxAdults, host: { name, avatarUrl, isPro }, description, images } = offer;

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <OfferGallery images={images} />
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium ? <OfferMark /> : ''}
            <OfferTitle title={title} />
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
    </main>
  );
};
