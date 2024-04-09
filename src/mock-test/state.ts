import { DEFAULT_CITY, NameSpace } from '../const';
import { mockOffers } from './mocks';

export const mockState = {
  [NameSpace.OFFERS]: mockOffers,
  [NameSpace.CITY]: DEFAULT_CITY,
  [NameSpace.SELECTED_OFFER]: mockOffers[0]
};
