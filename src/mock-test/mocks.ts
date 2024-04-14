import { Nullable } from 'vitest';
import { Review } from '../types/reviews';
import { Offer } from '../types/offers';
import { DEFAULT_CITY } from '../const';

export const mockOffers: Nullable<Offer[]> = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    description: 'Cool place',
    bedrooms: 4,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false
    },
    images: [
      'img/room.jpg, img/apartment-01.jpg, img/apartment-02.jpg, img/apartment-03.jpg, img/studio-01.jpg, img/studio-01.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Beautiful studio at great location',
    type: 'apartment',
    price: 10,
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 2,
    description: 'Another cool place',
    bedrooms: 3,
    goods: ['Heating, WI-FI'],
    host: {
      name: 'Brian May',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/room.jpg, img/apartment-01.jpg, img/apartment-02.jpg, img/apartment-03.jpg, img/studio-01.jpg, img/studio-01.jpg'
    ],
    maxAdults: 3
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'great location',
    type: 'apartment',
    price: 100,
    city: {
      name: 'Brussels',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 1,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    goods: [''],
    host: {
      name: 'James Hatfield',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/room.jpg, img/apartment-01.jpg, img/apartment-02.jpg, img/apartment-03.jpg, img/studio-01.jpg, img/studio-01.jpg'
    ],
    maxAdults: 1
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 110,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    description: 'A quiet cozy and picturesque',
    bedrooms: 4,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false
    },
    images: [
      'img/room.jpg, img/apartment-01.jpg, img/apartment-02.jpg, img/apartment-03.jpg, img/studio-01.jpg, img/studio-01.jpg'
    ],
    maxAdults: 4
  }
];

export const mockOffer: Nullable<Offer> = mockOffers[0];

export const mockUser = {
  name: 'Oliver Conner',
  avatarUrl: 'https://url-to-image/image.png',
  isPro: false,
  email: 'Oliver.conner@gmail.com',
  token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20='
};

export const mockComments: Nullable<Review[]> = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b622',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Connerr',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: true
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 5
  }
];

export const mockNearPlaces: Nullable<Offer[]> = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    description: 'Cool place',
    bedrooms: 4,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false
    },
    images: [
      'img/room.jpg, img/apartment-01.jpg, img/apartment-02.jpg, img/apartment-03.jpg, img/studio-01.jpg, img/studio-01.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Beautiful studio at great location',
    type: 'apartment',
    price: 10,
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 2,
    description: 'Another cool place',
    bedrooms: 3,
    goods: ['Heating, WI-FI'],
    host: {
      name: 'Brian May',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/room.jpg, img/apartment-01.jpg, img/apartment-02.jpg, img/apartment-03.jpg, img/studio-01.jpg, img/studio-01.jpg'
    ],
    maxAdults: 3
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'great location',
    type: 'apartment',
    price: 100,
    city: {
      name: 'Brussels',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 1,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    goods: [''],
    host: {
      name: 'James Hatfield',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: true
    },
    images: [
      'img/room.jpg, img/apartment-01.jpg, img/apartment-02.jpg, img/apartment-03.jpg, img/studio-01.jpg, img/studio-01.jpg'
    ],
    maxAdults: 1
  },
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 110,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 4,
    description: 'A quiet cozy and picturesque',
    bedrooms: 4,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'img/avatar-angelina.jpg',
      isPro: false
    },
    images: [
      'img/room.jpg, img/apartment-01.jpg, img/apartment-02.jpg, img/apartment-03.jpg, img/studio-01.jpg, img/studio-01.jpg'
    ],
    maxAdults: 4
  }
];

export const mockError = 'error message';

export const mockFavorites: Nullable<Offer[]> = mockOffers.slice(0, 2);

export const mockOffersByCity = mockOffers.filter((offer) => offer.city.name === DEFAULT_CITY.name);
