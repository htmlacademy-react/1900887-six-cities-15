import { AuthorizationStatus, DEFAULT_CITY, SliceName } from '../const';
import { AppData, UserProcess } from '../types/state';
import { mockComments, mockError, mockFavorites, mockNearPlaces, mockOffer, mockOffers, mockUser } from './mocks';

type TMockState = {[SliceName.AppData]: AppData; [SliceName.UserProcess]: UserProcess}

export const mockState: TMockState = {
  [SliceName.AppData]: {
    city: DEFAULT_CITY,
    offers: mockOffers,
    selectedOffer: mockOffer,
    comments: mockComments,
    nearPlaces: mockNearPlaces,
    isLoading: false,
    favorites: mockFavorites
  },
  [SliceName.UserProcess]: {
    user: mockUser,
    authorizationStatus: AuthorizationStatus.AUTH,
    error: mockError
  }
};
