import { Dispatch, FC, SetStateAction } from 'react';
import { TCityPlaces } from '../../types/offers';
import { PlacesSorting } from '../sorting/places-sorting-list';
import { CityPlacesList } from '../city-places-list';
import { isSingular } from '../../utils';

export type TSortEvent = {
  onClickEvent: Dispatch<SetStateAction<string>>;
}

const CityPlaces: FC<TCityPlaces & TSortEvent> = ({ city, offers, onMouseEvent, onClickEvent }) => {
  const { name } = city;
  const { length } = offers;


  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{length} {isSingular(length) ? 'place' : 'places'} to stay in {name}</b>
      <PlacesSorting onClickEvent={onClickEvent} />
      <CityPlacesList offers={offers} onMouseEvent={onMouseEvent} />
    </section>
  );
};

export { CityPlaces };
