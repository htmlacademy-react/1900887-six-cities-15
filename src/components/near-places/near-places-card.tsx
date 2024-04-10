import { FC } from 'react';
import { Offer } from '../../types/offers';
import { OfferCard } from '../offer-card';

type TNearPlacesCard = { offer: Offer };

const NearPlacesCard: FC<TNearPlacesCard> = ({ offer }) => (<OfferCard offer={offer} />);
export { NearPlacesCard };
