import { SORTING } from '../../../const';
import { Offer } from '../../../types/offers';

export type TSortingElement = {
  title: string;
  value: string;
}

export const SORTING_LIST: TSortingElement[] = [
  {
    title: 'Popular',
    value: 'popular'
  },
  {
    title: 'Price: low to high',
    value: 'low-to-high'
  },
  {
    title: 'Price: high to low',
    value: 'high-to-low'
  },
  {
    title: 'Top rated first',
    value: 'top-rated-first'
  }
];

type TSortOffers = {
  sortType: string;
  offers: Offer[];
};

export const sortOffers = ({ sortType, offers }: TSortOffers) => {
  switch (sortType) {
    case SORTING.LOW_TO_HIGH: return [...offers].sort((prev: Offer, next: Offer) => prev.price - next.price);
    case SORTING.HIGH_TO_LOW: return [...offers].sort((prev: Offer, next: Offer) => next.price - prev.price);
    case SORTING.TOP_RATED_FIRST: return [...offers].sort((prev: Offer, next: Offer) => next.rating - prev.rating);
    case SORTING.POPULAR: return [...offers];
    default: return offers;
  }
};


