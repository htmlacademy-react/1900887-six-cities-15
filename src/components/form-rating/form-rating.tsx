import { ChangeEvent, FC, Fragment } from 'react';

type TFormRating = {
  count: number;
  onChange: (evt: ChangeEvent) => void;
}

export const FormRating: FC<TFormRating> = ({ count, onChange }) => {
  const handleChange = onChange;

  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={`${count}`} id={`${count}-stars`}
        type="radio" onChange={handleChange}
      />
      <label htmlFor={`${count}-stars`} className="reviews__rating-label form__rating-label" title="good">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
};
