import { describe, it } from 'vitest';
import { getCity, getComments, getLoadingState, getNearPlaces, getOffers, getOffersByCity, getSelectedOffer } from './app-data-selectors';
import { mockOffers, mockState } from '../../mock-test';
import { mockComments, mockNearPlaces, mockOffer, mockOffersByCity } from '../../mock-test/mocks';
import { DEFAULT_CITY } from '../../const';

describe('AppData selectors', () => {
  it('should return offers from state', () => {
    const result = getOffers(mockState);
    expect(result).toBe(mockOffers);
  });

  it('should return offer from state', () => {
    const result = getSelectedOffer(mockState);
    expect(result).toBe(mockOffer);
  });

  it('should return city from state', () => {
    const result = getCity(mockState);
    expect(result).toBe(DEFAULT_CITY);
  });

  it('should return comments from state', () => {
    const result = getComments(mockState);
    expect(result).toBe(mockComments);
  });

  it('should return loading state from state', () => {
    const result = getLoadingState(mockState);
    expect(result).toBe(false);
  });

  it('should return near places from state', () => {
    const result = getNearPlaces(mockState);
    expect(result).toStrictEqual(mockNearPlaces?.slice(0, 3));
  });

  it('should return offers by city from state', () => {
    const result = getOffersByCity(mockState);
    expect(result).toStrictEqual(mockOffersByCity);
  });
});
