import { Dispatch } from "redux";
import Users from "../services/Users";
import User from "../types/User";
import { DashboardAction } from "./actions-types";

// Sync Actions

const setLoading = (payload: boolean): DashboardAction => {
  return { type: 'SET_LOADING', payload };
}

const setUsers = (payload: User[]): DashboardAction => {
  return { type: 'SET_USERS', payload }
};

const deleteUser = (payload: number): DashboardAction => {
  return { type: 'DELETE_USER', payload }
};

// Async Actions

const getUsers = () => async (dispatch: Dispatch<DashboardAction>) => {
  dispatch(setLoading(true))
  const users = await Users.getUsers();
  dispatch(setUsers(users))
  dispatch(setLoading(false))
}

export {
  setUsers,
  getUsers,
  deleteUser,
}
