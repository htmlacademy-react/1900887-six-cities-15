import { FC } from 'react';
import { OfferFeaturesProps } from '../../types/offers';
import { capitalize } from '../../utils';

export const OfferFeatures: FC<OfferFeaturesProps> = ({type, bedrooms, maxAdults}) => (
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
