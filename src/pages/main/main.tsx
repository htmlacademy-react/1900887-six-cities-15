import { Offer } from '../../types/offers';
import { CitiesTabs } from '../../components/cities-tabs';
import { useAppSelector } from '../../app/hooks';
import { MainEmpty } from '../main-empty';
import { Cities } from '../../components/cities';
import { Nullable } from 'vitest';
import { Loading } from '../../components/spinner/spinner';
import { ErrorModal } from '../../components/error';
import { getCity, getOffersByCity } from '../../store/app-data/app-data-selectors';
import { getError } from '../../store/user-process/user-process-selectors';

export const Main = () => {
  const error = useAppSelector(getError);
  const selectedCity = useAppSelector(getCity);
  const offers: Nullable<Offer[]> = useAppSelector(getOffersByCity);

  if (!offers) {
    return <Loading />;
  }

  if (!offers) {
    return <MainEmpty city={selectedCity} />;
  }

  if (error) {
    return <ErrorModal error={error} />;
  }


  return (
    <main className="page__main page__main--index">
      <CitiesTabs />
      <Cities selectedCity={selectedCity} offers={offers} />
    </main>
  );
};
