import { Offer } from '../../types/offers';
import { NearPlacesCard } from '../near-places';

type TOfferNearPlaces = { offers: Offer[] };

export const OfferNearPlaces = ({ offers }: TOfferNearPlaces) => (
  <div className="container">
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.slice(0, 3).map((offer) => <NearPlacesCard offer={offer} key={offer.id} />)}
      </div>
    </section>
  </div>
);
