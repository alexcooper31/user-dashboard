type AllActionTypes = 'SET_USERS' | 'CREATE_USER' | 'EDIT_USER' | 'DELETE_USER' | 'SET_LOADING';

interface DashboardAction {
  type: AllActionTypes;
  payload: unknown;
}

export {
  AllActionTypes,
  DashboardAction,
}