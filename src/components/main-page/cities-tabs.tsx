import { FC, Fragment } from 'react';
import { CITIES } from '../../const';
import { TLocationItem } from '../../types/offers';
import { useAppDispatch } from '../../app/hooks';
import { selectCity } from '../../store/action';

const LocationItem: FC<TLocationItem> = ({ city }) => {
  const { name } = city;
  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(selectCity({ city }));

  return (
    <li className="locations__item" onClick={handleClick}>
      <a className="locations__item-link tabs__item">
        <span>{name}</span>
      </a>
    </li>
  );
};


export const CitiesTabs = () => (
  <Fragment>
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => <LocationItem key={city.name} city={city} />)}
        </ul>
      </section>
    </div>
  </Fragment>
);

