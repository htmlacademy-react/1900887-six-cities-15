import { NotFound } from '../../components/404';
import { Offer } from '../../components/offer';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useParams } from 'react-router-dom';
import { fetchOfferAction } from '../../api/api-actions';
import { useEffect } from 'react';
import { getOffer } from '../../store/action';
import { Loading } from '../../components/spinner/spinner';
import { getLoadingState, getSelectedOffer } from '../../store/selectors';


export const OfferComponent = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getSelectedOffer);
  const isLoading = useAppSelector(getLoadingState);

  useEffect(() => {
    dispatch(fetchOfferAction(id));
    return () => {
      dispatch(getOffer(null));
    };
  }, [id, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (!offer) {
    return (<NotFound />);
  }

  return (
    <main className="page__main page__main--offer">
      <Offer offer={offer} />
    </main>
  );
};
