import { FC } from 'react';
import { Offer, AppProps } from '../types/offers';
import { useParams } from 'react-router-dom';
import { NotFound } from '../components/404';
import { Nullable } from 'vitest';

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
  OfferNearPlaces } from '../components/offer/index';


export const OfferComponent: FC<AppProps> = ({offers})=> {
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
      <OfferNearPlaces/>
    </main>
  );
};
