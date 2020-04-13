import { CLEAR, SET } from "./constants";
import { SessionActionTypes, SessionStateType } from "./types";

const DEFAULT_STATE: SessionStateType = null

const sessionReducer = (state: SessionStateType = DEFAULT_STATE, action: SessionActionTypes) => {
  switch (action.type) {
    case SET:
      return action.payload.session;
    case CLEAR:
      return null;
    default:
      return state;
  }
};

export default sessionReducer;
