import { Icon } from 'leaflet';

export const LEAFLET_MAP_LAYERS = {
  voyager: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
};

export const MAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const DEFAULT_CITY = {
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
};

export const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
];

export enum AuthorizationStatus {
  AUTH = 'AUTH',
  NO_AUTH = 'NO_AUTH',
  UNKNOWN = 'UNKNOWN'
}

export enum ERRORS {
  INVALID_PASSWORD = 'Password is invalid. It must contain at least one digit and one character.',
  INVALID_EMAIL = 'Email is invalid. It must be at least 1 character long.'
}

export enum APIRoutes {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite'
}

export const URL_MARKER_DEFAULT =
'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';


export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT'
};

export const BASE_URL = 'https://15.design.htmlacademy.pro/six-cities';

export const SERVER_TIMEOUT = 5000;
export const ERROR_TIMEOUT = 2000;

export enum SORTING {
  POPULAR = 'popular',
  LOW_TO_HIGH = 'low-to-high',
  HIGH_TO_LOW = 'high-to-low',
  TOP_RATED_FIRST = 'top-rated-first',
  DEFAULT = 'null'
}

export enum NameSpace {
  AppData = 'APP_DATA',
  CITY = 'city',
  LOADING = 'isLoading',
  AUTH = 'authorizationStatus',
  ERROR = 'error',
  USER = 'currentUser',
  COMMENTS = 'comments',
  NEAR_PLACES = 'nearPlaces'
}
