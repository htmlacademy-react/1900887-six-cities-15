import { Review } from '../../types/reviews';
import { getDateTimeDate, getHumanizedDate } from '../../utils';

type TReview = {
  review: Review;
}

export const ReviewComponent = ({ review }: TReview) => {
  const { comment, date, rating, user: { avatarUrl, name } } = review;

  const humanizedDate = getHumanizedDate(date);
  const dateTimeDate = getDateTimeDate(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 10}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dateTimeDate}>{humanizedDate}</time>
      </div>
    </li>
  );
};
