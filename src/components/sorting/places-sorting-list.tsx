import { FC, useState } from 'react';
import { SORTING_LIST } from './source';
import { SortElement } from '../sort-element/sort-element';
import { TSortEvent } from '../city-places/city-places';

export const PlacesSorting: FC<TSortEvent> = ({ onClickEvent }) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleClick = () => setIsOpened(!isOpened);

  return (
    <form className="places__sorting">
      <span className="places__sorting-caption">Sort by</span>&nbsp;
      <span className="places__sorting-type" tabIndex={0} onClick={handleClick}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options${isOpened ? '--opened' : ''}`}>
        {SORTING_LIST.map((sorting) => <SortElement sort={sorting} key={sorting.title} onClick={onClickEvent} />)}
      </ul>
    </form >
  );
};
