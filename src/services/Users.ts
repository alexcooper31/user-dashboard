import axios from 'axios';

import User from '../types/User';

const { REACT_APP_API } = process.env;

const session = axios.create({
  baseURL: REACT_APP_API,
  headers: {
    "Content-type": "application/json"
  }
});

class Users {
  async getUsers() {
    const response = await session.get<Array<User>>('/');
    const users = response.data;

    return users;
  }
}

export default new Users();
