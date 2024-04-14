import { Nullable } from 'vitest';
import { ReviewsInfo } from '../../types/reviews';
import { OfferReviewForm } from '../offer-review-form';
import { ReviewsList } from '../reviews-list';
import { useAppSelector } from '../../app/hooks';
import { getCurrentUser } from '../../store/user-process/user-process-selectors';

type TOfferReviews = {
  id: string;
  comments: Nullable<ReviewsInfo>;
}

export const OfferReviews = ({ id, comments }: TOfferReviews) => {
  const length = comments?.length;
  const user = useAppSelector(getCurrentUser);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{length}</span></h2>
      <ul className="reviews__list">
        <ReviewsList reviews={comments} />
      </ul>
      {user && <OfferReviewForm id={id} />}
    </section>
  );
};
