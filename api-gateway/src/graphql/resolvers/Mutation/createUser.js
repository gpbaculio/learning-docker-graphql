import UsersService from '#root/adapters/UsersService';

const createUserResolver = async (root, { email, password }) => { 
  const newUser = await UsersService.createUser({ email, password })
  return newUser
}

export default createUserResolver