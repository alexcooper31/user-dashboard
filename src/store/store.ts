import {
  DashboardAction,
} from './actions-types'
import User from '../types/User'

export interface LocalState {
  users: User[];
  loading: boolean;
}

const initialState = {
  users: [{}],
  loading: false,
}

const rootReducer = (state = initialState, action: DashboardAction) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload as boolean,
      };

    case 'SET_USERS':
      return {
        ...state,
        users: action.payload as User[],
      };

    case 'DELETE_USER':
      const updatedArr = state.users.pop();
      return {
        ...state,
        users: updatedArr as User[],
      };

    default:
      return state
  }
}

export default rootReducer;