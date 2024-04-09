import { Nullable } from 'vitest';
import { ReviewsInfo } from '../../types/reviews';
import { ReviewComponent } from './review';

type TReviewsList = {
  reviews: Nullable<ReviewsInfo>;
}

export const ReviewsList = ({ reviews }: TReviewsList) => (reviews?.map((review) => <ReviewComponent review={review} key={review.id} />));
