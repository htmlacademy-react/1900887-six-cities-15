import { memo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getClassName } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../services';
import { AppRoutes } from '../../app/routes';
import { fetchAddToFavorites } from '../../api/api-actions';
import { getLoadingState } from '../../store/selectors';
import { setIsLoading } from '../../store/action';

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
  const isLoading = useAppSelector(getLoadingState);
  const user = getUser();

  useEffect(() => {
    let mounted = true;
    if (!isLoading && mounted) {
      setIsLoading(true);
    }

    return (
      () => {
        mounted = false;
      }
    );
  }, [isFavorite, isLoading]);

  const handleClick = () => {
    if (!user) {
      navigate(AppRoutes.Login);
    }

    const status = Number(!isFavorite);
    dispatch(fetchAddToFavorites({ id, status }));
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
