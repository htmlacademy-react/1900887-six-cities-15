import { useAppSelector } from '../../app/hooks';
import { FavoritesList } from '../../components/favorites-list';
import { getFavoriteOffers } from '../../store/selectors';

export const Favorites = () => {
  const offers = useAppSelector(getFavoriteOffers);
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList offers={offers} />
        </section>
      </div>
    </main>
  );
};
