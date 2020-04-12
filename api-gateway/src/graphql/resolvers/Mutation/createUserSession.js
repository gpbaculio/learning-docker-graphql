import UsersService from '#root/adapters/UsersService';

const createUserSessionResolver = async (root, { email, password }, context) => { 
  console.log('createUserSession!', { email, password })
  const userSession = await UsersService.createUserSession({ email, password })
  context.res.cookie('userSessionId', userSession.id, { httpOnly: true })
  return userSession
}

export default createUserSessionResolver