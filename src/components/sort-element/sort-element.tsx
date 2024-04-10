import { Dispatch, FC, MouseEvent, SetStateAction } from 'react';
import { TSortingElement } from '../sorting/source';

type TSortElement = {
  sort: TSortingElement;
  onClick: {
    setSorting: Dispatch<SetStateAction<string>>;
    setSortingOpen: Dispatch<SetStateAction<boolean>>;
  };
}

export const SortElement: FC<TSortElement> = ({ sort, onClick }) => {
  const { setSorting, setSortingOpen } = onClick;
  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    setSorting(e.currentTarget.dataset.value || '');
    setSortingOpen(false);
  };

  return (<li className='places__option' data-value={sort.value} onClick={handleClick} >{sort.title}</li >);
};
