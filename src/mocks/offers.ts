import { Offer } from '../types/offers';

const offers: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
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

export {offers};
