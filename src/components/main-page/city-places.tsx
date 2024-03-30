import { FC } from 'react';
import { TCityPlaces } from '../../types/offers';
import { PlacesSorting } from './places-sorting';
import { CityPlacesList } from './city-places-list';
import { isSingular } from '../../utils';

const CityPlaces: FC<TCityPlaces> = ({ city, offers, onMouseEvent }) => {
  const { name } = city;
  const { length } = offers;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{length} {isSingular(length) ? 'place' : 'places'} to stay in {name}</b>
      <PlacesSorting />
      <CityPlacesList offers={offers} onMouseEvent={onMouseEvent} />
    </section>
  );
};

export { CityPlaces };
