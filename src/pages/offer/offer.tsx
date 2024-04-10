import { NotFound } from '../../components/404';
import { Offer } from '../../components/offer';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useParams } from 'react-router-dom';
import { fetchNearPlaces, fetchOfferAction, fetchReviewsAction } from '../../api/api-actions';
import { useEffect } from 'react';
import { getComments, getNearPlacesAction, getOffer } from '../../store/action';
import { Loading } from '../../components/spinner/spinner';
import { getCurrentComments, getLoadingState, getSelectedOffer } from '../../store/selectors';


export const OfferComponent = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getSelectedOffer);
  const comments = useAppSelector(getCurrentComments);
  const isLoading = useAppSelector(getLoadingState);

  useEffect(() => {
    dispatch(fetchOfferAction(id));
    dispatch(fetchReviewsAction(id));
    dispatch(fetchNearPlaces(id));
    return () => {
      dispatch(getOffer(null));
      dispatch(getComments(null));
      dispatch(getNearPlacesAction(null));
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
      <Offer offer={offer} comments={comments} />
    </main>
  );
};
