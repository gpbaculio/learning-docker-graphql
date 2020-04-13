import { SetSessionType, ClearSessionType, SessionType } from './types';
import { SET, CLEAR } from './constants';

export const setSession: (session: SessionType) => SetSessionType = (
  session
) => ({
  type: SET,
  payload: {
    session,
  },
});

export const clearSession: () => ClearSessionType = () => ({
  type: CLEAR
})