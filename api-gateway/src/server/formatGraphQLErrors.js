import _ from 'lodash';

const formatGraphQLErrors = (error) => {
  const errorDetails = _.get(error, 'originalError.response.body');
  if (errorDetails) return JSON.parse(errorDetails);
  return error;
};

export default formatGraphQLErrors
