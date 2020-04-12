import got from 'got';

const USERS_SERVICE_URI = 'http://users-service:7101';

export default class UsersService {
  static async createUser({ email, password }) {
    const newUser = await got
      .post(`${USERS_SERVICE_URI}/users`, {
        json: { email, password },
      })
      .json();
    return newUser;
  }
  static async createUserSession({ email, password }) {
    const newUserSession = await got
      .post(`${USERS_SERVICE_URI}/sessions`, {
        json: { email, password },
      })
      .json();
    return newUserSession;
  }
}
