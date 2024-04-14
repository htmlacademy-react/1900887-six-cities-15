import { describe, it } from 'vitest';
import { mockState } from '../../mock-test';
import { getAuthorizationStatus, getCurrentUser, getError, getIsAuth } from './user-process-selectors';
import { mockError, mockUser } from '../../mock-test/mocks';
import { AuthorizationStatus } from '../../const';

describe('UserProcess selectors', () => {
  it('should return error message from state', () => {
    const result = getError(mockState);
    expect(result).toBe(mockError);
  });

  it('should return user from state', () => {
    const result = getCurrentUser(mockState);
    expect(result).toBe(mockUser);
  });

  it('should return authorization status from state', () => {
    const result = getAuthorizationStatus(mockState);
    expect(result).toBe(AuthorizationStatus.AUTH);
  });

  it('should return authorization status from state', () => {
    const result = getIsAuth(mockState);
    expect(result).toBe(true);
  });
});
