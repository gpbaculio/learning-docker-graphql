const userSessionResolver = async (obj, { me }, context) => {
  if (!me) throw new Error("Unsupported argument value");
  return context.res.locals.userSession;
};

export default userSessionResolver;