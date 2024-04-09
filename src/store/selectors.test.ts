import { describe, it } from 'vitest';
import { getCity, getSelectedOffer } from './selectors';
import { mockOffers, mockState } from '../mock-test';
import { DEFAULT_CITY } from '../const';

describe('Selectors', () => {
  it('should return selected sity from state', () => {
    const result = getCity(mockState);
    expect(result).toBe(DEFAULT_CITY);
  });

  it('should return selected offer from state', () => {
    const result = getSelectedOffer(mockState);
    expect(result).toBe(mockOffers[0]);
  });
});


