import { Offer } from '../types/offers';
import { CitiesTabs } from '../components/main-page';
import { useAppSelector } from '../app/hooks';
import { MainEmpty } from './main-empty';
import { Cities } from '../components/main-page/cities';
import { Nullable } from 'vitest';
import { getCity, getErrorMessage, getOffersByCity } from '../store/selectors';
import { Loading } from '../components/spinner/spinner';
import { ErrorModal } from '../components/error/error';

export const Main = () => {
  const error = useAppSelector(getErrorMessage);
  const selectedCity = useAppSelector(getCity);
  const offers: Nullable<Offer[]> = useAppSelector(getOffersByCity);

  if (!offers) {
    return <Loading />;
  }

  if (error) {
    return <ErrorModal error={error} />;
  }

  if (!offers) {
    return <MainEmpty city={selectedCity} />;
  }

  return (
    <main className="page__main page__main--index">
      <CitiesTabs />
      <Cities selectedCity={selectedCity} offers={offers} />
    </main>
  );
};
