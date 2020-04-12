import bcrpyt from 'bcryptjs';

const passwordCompareSync = (passwordText, passwordHash) =>
  bcrpyt.compareSync(passwordText, passwordHash);

export default passwordCompareSync;
