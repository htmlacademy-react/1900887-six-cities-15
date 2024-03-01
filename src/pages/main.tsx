import { FC } from 'react';
import { Offers } from '../types/offers';
import { CitiesTabs, CityPlaces } from '../components/main-page';

const CityMap = () => (
  <div className="cities__right-section">
    <section className="cities__map map"></section>
  </div>
);

export const Main: FC<Offers> = ({offers}) => (
  <main className="page__main page__main--index">
    <CitiesTabs/>
    <div className='cities'>
      <div className="cities__places-container container">
        <CityPlaces offers={offers}/>
        <CityMap/>
      </div>
    </div>
  </main>
);
