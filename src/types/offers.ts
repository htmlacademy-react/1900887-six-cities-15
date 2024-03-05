import { Dispatch, SetStateAction } from 'react';
import { Review } from './reviews';

export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type OfferInfo = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage?: string;
}

type OfferInfoExcluded = Exclude<OfferInfo, 'previewImage'>

type OfferOptional = {
  description: string;
  bedrooms: number;
  goods: [string];
  host: Host;
  images: [string];
  maxAdults: number;
}

export type AppProps = {offers: Offer[]; reviews: Review[]}

export type Offer = OfferInfoExcluded & OfferOptional;

export type Offers = {offers: OfferInfo[]};

export type FavoriteOffers = {offers: OfferInfo[]};

export type TOffer = {offer: OfferInfo; onOfferHover: Dispatch<SetStateAction<OfferInfo>>}

export type OfferFeaturesProps = {type: string; bedrooms?: number; maxAdults?: number};

export type HostInfo = Host & {description: string};

export type OfferGalleryProps = {images: string[]};

export type OfferImageWrapperProps = {image: string};

export type OfferInsideItemProps = {item: string};

export type OfferInsideProps = {goods?: [string]};

export type OfferPriceProps = {price: number};

export type OfferRatingProps = {rating: number};

export type OfferTitleProps = {title: string};

export type TCityPlaces = Offers & {onOfferHover: Dispatch<SetStateAction<OfferInfo>>}

export type TCityPlacesList = TCityPlaces;
