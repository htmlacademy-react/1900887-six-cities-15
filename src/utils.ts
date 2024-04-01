const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const isSingular = (length: number) => length > 0 && length < 2;

const getIsLoginPage = (pathname: string): boolean => pathname === '/login';

const getClassNameByLocation = (pathname: string) => {
  switch(pathname){
    case '/login': return 'page--login';
    case '/': return 'page--main';
    default: return '';
  }
};

const roundNumber = (num: number) => parseFloat(num.toFixed(5));

export {capitalize, isSingular, getIsLoginPage, getClassNameByLocation, roundNumber};
