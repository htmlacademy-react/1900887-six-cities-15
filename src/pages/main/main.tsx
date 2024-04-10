import { Offer } from '../../types/offers';
import { CitiesTabs } from '../../components/cities-tabs';
import { useAppSelector } from '../../app/hooks';
import { MainEmpty } from '../main-empty';
import { Cities } from '../../components/cities';
import { Nullable } from 'vitest';
import { getCity, getErrorMessage, getOffersByCity } from '../../store/selectors';
import { Loading } from '../../components/spinner/spinner';
import { ErrorModal } from '../../components/error';

export const Main = () => {
  const error = useAppSelector(getErrorMessage);
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
