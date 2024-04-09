import { Nullable } from 'vitest';
import { ReviewsInfo } from '../../types/reviews';
import { OfferReviewForm } from './offer-review-form';
import { ReviewsList } from './reviews-list';

type TOfferReviews = {
  comments: Nullable<ReviewsInfo>;
}

export const OfferReviews = ({ comments }: TOfferReviews) => {
  const length = comments?.length;
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{length}</span></h2>
      <ul className="reviews__list">
        <ReviewsList reviews={comments} />
      </ul>
      <OfferReviewForm />
    </section>
  );
};
