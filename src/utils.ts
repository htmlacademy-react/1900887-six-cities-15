const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const isSingular = (length: number) => length > 0 && length < 2;

const getIsLoginPage = (pathname: string): boolean => pathname === '/login';

const getClassNameByLocation = (pathname: string) => {
  switch(pathname){
    case '/login': return 'page--gray page--login';
    case '/': return 'page--gray page--main';
    case '/favorites': return 'page--favorites';
    default: return '';
  }
};

const roundNumber = (num: number) => parseFloat(num.toFixed(5));

const getHumanizedDate = (date: string) => new Date(date).toLocaleString('default', { month: 'long', year: 'numeric' });

const getDateTimeDate = (date: string) => new Date(date).toLocaleDateString('en-ca');

const getClassName = (isFavorite: boolean, className: string) => isFavorite ?
  `${className}__bookmark-button ${className}__bookmark-button--active button` :
  `${className}__bookmark-button button`;

export {
  capitalize,
  isSingular,
  getIsLoginPage,
  getClassNameByLocation,
  roundNumber,
  getHumanizedDate,
  getDateTimeDate,
  getClassName
};
