// import { describe, it } from 'vitest';
// import { mockState } from '../mock-test';
// import { AuthorizationStatus, DEFAULT_CITY } from '../const';
// import { mockUser } from '../mock-test/mocks';
// import { getCity, getLoadingState } from './app-data/app-data-selectors';
// import { getAuthorizationStatus, getCurrentUser, getErrorMessage } from './user-process/user-process-selectors';

// describe('Selectors', () => {
//   it('should return selected sity from state', () => {
//     const result = getCity(mockState);
//     expect(result).toBe(DEFAULT_CITY);
//   });

//   it('should return loading status from state', () => {
//     const result = getLoadingState(mockState);
//     expect(result).toBe(true);
//   });

//   it('should return authorization status from state', () => {
//     const result = getAuthorizationStatus(mockState);
//     expect(result).toBe(AuthorizationStatus.AUTH);
//   });

//   it('should return error message from state', () => {
//     const result = getErrorMessage(mockState);
//     expect(result).toBe('access deny');
//   });

//   it('should return current user from state', () => {
//     const result = getCurrentUser(mockState);
//     expect(result).toBe(mockUser);
//   });
// });


