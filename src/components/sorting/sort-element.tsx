import { Dispatch, FC, MouseEvent, SetStateAction } from 'react';
import { TSortingElement } from './source';

type TSortElement = {
  sort: TSortingElement;
  onClick: Dispatch<SetStateAction<string>>;
}

export const SortElement: FC<TSortElement> = ({ sort, onClick }) => {
  const handleClick = (e: MouseEvent<HTMLLIElement>) => onClick(e.currentTarget.dataset.value || '');

  return (<li className='places__option' data-value={sort.value} onClick={handleClick} >{sort.title}</li >);
};
