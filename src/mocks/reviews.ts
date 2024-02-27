import { Review } from '../types/reviews';

const reviews: Review[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a01',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'James Hatfield',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: true
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4.5
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a02',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 2
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a03',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Arnold Schwarzenegger',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: true
    },
    comment: 'Hasta la vista, baby',
    rating: 5
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a04',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Guthrie Govan',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: true
    },
    comment: 'Speed is a byproduct of good, slow practice.',
    rating: 5
  },
];

export {reviews};
