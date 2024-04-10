import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { checkSize } from './source';
import { useAppDispatch } from '../../app/hooks';
import { uploadComment } from '../../api/api-actions';
import { ratings } from '../form-rating/source';
import { FormRating } from '../form-rating';

type TOfferReviewForm = {
  id: string;
}

export const OfferReviewForm: FC<TOfferReviewForm> = ({ id }) => {
  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    rating: 0,
    review: ''
  });

  const handleRatingChange = (evt: ChangeEvent) => {
    const { name, value } = evt.target as HTMLInputElement;
    setFormData({ ...formData, [name]: value });
    checkSize({ rating: formData.rating, message: formData.review, action: setIsDisabled });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    dispatch(uploadComment({
      offerId: id,
      review: {
        comment: formData.review,
        rating: Number(formData.rating)
      }
    }));

    setFormData({ rating: 0, review: '' });
  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings.map((rating) => <FormRating count={rating.count} onChange={handleRatingChange} key={rating.count} />)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleRatingChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
};
