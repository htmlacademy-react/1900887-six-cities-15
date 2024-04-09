import { Dispatch, FC, MouseEvent, SetStateAction } from 'react';
import { TSortingElement } from './source';
import { Nullable } from 'vitest';

type TSortElement = {
  sort: TSortingElement;
  onClick: Dispatch<SetStateAction<Nullable<string>>>;
}

export const SortElement: FC<TSortElement> = ({ sort, onClick }) => {
  const handleClick = (e: MouseEvent<HTMLLIElement>) => onClick(e.currentTarget.dataset.value);

  return (<li className='places__option' data-value={sort.value} onClick={handleClick} >{sort.title}</li >);
};
