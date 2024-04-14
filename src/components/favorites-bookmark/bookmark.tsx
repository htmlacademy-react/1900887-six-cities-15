import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getClassName } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../app/routes';
import { fetchAddToFavorites } from '../../api';
import { getCurrentUser } from '../../store/user-process/user-process-selectors';

type TBookmark = {
  id: string;
  isFavorite: boolean;
  bookmarkClassName: string;
  width: number;
  height: number;
}

const Bookmark = ({ id, isFavorite, bookmarkClassName, width, height }: TBookmark) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(getCurrentUser);

  const handleClick = () => {
    if (!user) {
      navigate(AppRoutes.Login);
    } else {
      const status = Number(!isFavorite);
      dispatch(fetchAddToFavorites({ id, status }));
    }
  };

  return (
    <button
      className={getClassName(isFavorite, bookmarkClassName)}
      type="button" onClick={handleClick}
    >
      <svg className={`${bookmarkClassName}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

const MemoBookmark = memo(Bookmark);

export { MemoBookmark as Bookmark };
