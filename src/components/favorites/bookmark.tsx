type TBookmark = {
  isFavorite: boolean;
  bookmarkClassName: string;
  width: number;
  height: number;
}

export const Bookmark = ({ isFavorite, bookmarkClassName, width, height }: TBookmark) => (
  <button className={isFavorite ? `${bookmarkClassName}__bookmark-button--active` : `${bookmarkClassName}__bookmark-button button`} type="button">
    <svg className={`${bookmarkClassName}__bookmark-icon`} width={width} height={height}>
      <use xlinkHref="#icon-bookmark"></use>
    </svg>
    <span className="visually-hidden">To bookmarks</span>
  </button>
);
