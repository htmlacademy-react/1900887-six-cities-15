import { FC } from 'react';
import { OfferInsideItemProps, OfferInsideProps } from '../../types/offers';

type TGoods = {
  goods: string[];
}

const OfferInsideItem: FC<OfferInsideItemProps> = ({ item }) => (
  <li className="offer__inside-item">
    {item}
  </li>
);

const Goods = ({ goods }: TGoods) => goods.map((good) => <OfferInsideItem item={good} key={good} />);

export const OfferInside: FC<OfferInsideProps> = ({ goods }) => {
  if (!goods || goods.toString().length === 0) {
    return '';
  }

  const goodsList: string[] = goods.toString().split(',') || null;

  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        <Goods goods={goodsList} />
      </ul>
    </div>
  );
};
