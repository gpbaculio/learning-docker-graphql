import { SET, CLEAR } from './constants';

export interface SessionType {
  id: string;
  user: {
    id: string;
    email: string;
  };
}

export interface SetSessionType {
  type: typeof SET;
  payload: {
    session: SessionType;
  };
}

export interface ClearSessionType {
  type: typeof CLEAR;
}

export type SessionStateType = null | SessionType

export type SessionActionTypes = SetSessionType | ClearSessionType;
