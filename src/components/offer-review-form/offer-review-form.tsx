import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { checkSize } from './source';
import { useAppDispatch } from '../../app/hooks';
import { uploadComment } from '../../api/api-actions';

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

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(uploadComment({
      offerId: id,
      review: {
        comment: formData.review,
        rating: Number(formData.rating)
      }
    }));
  };

  return (
    <form className="reviews__form form">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value='5' id="5-stars" type="radio" onChange={handleRatingChange} />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value='4' id="4-stars" type="radio" onChange={handleRatingChange} />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value='3' id="3-stars" type="radio" onChange={handleRatingChange} />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value='2' id="2-stars" type="radio" onChange={handleRatingChange} />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value='1' id="1-star" type="radio" onChange={handleRatingChange} />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleRatingChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled} onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  );
};
