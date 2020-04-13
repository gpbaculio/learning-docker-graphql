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

  static async fetchUser({ userId }) {
    const user = await got.get(`${USERS_SERVICE_URI}/users/${userId}`).json();
    return user;
  }

  static async createUserSession({ email, password }) {
    const newUserSession = await got
      .post(`${USERS_SERVICE_URI}/sessions`, {
        json: { email, password },
      })
      .json();
    return newUserSession;
  }

  static async fetchUserSession({ sessionId }) {
    const body = await got
      .get(`${USERS_SERVICE_URI}/sessions/${sessionId}`)
      .json();
    return body;
  }
}
