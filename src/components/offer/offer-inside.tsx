import { FC } from 'react';
import { Nullable } from 'vitest';
import { OfferInsideItemProps, OfferInsideProps } from '../../types/offers';

const OfferInsideItem: FC<OfferInsideItemProps> = ({item}) => (
  <li className="offer__inside-item">
    {item}
  </li>
);

export const OfferInside: FC<OfferInsideProps> = ({goods}) => {
  if (!goods || goods.toString().length === 0) {
    return '';
  }

  const goodsList: Nullable<string[]> = goods.toString().split(',') || null;

  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goodsList.map((good) => <OfferInsideItem item={good} key={good}/>)}
      </ul>
    </div>
  );
};
