import { ChangeEvent, FC, Fragment } from 'react';

type TFormRating = {
  count: number;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  defaultValue: number;
}

export const FormRating: FC<TFormRating> = ({ count, onChange, checked, defaultValue }) => {
  const handleChange = onChange;

  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" id={`${count}-stars`}
        type="radio" onChange={handleChange} checked={checked} defaultValue={defaultValue}
      />
      <label htmlFor={`${count}-stars`} className="reviews__rating-label form__rating-label" title="good">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
};
