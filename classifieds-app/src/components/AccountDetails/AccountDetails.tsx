import React from 'react'
import { useSelector } from 'react-redux'

import { AppReduxState } from '../../store'
import Account from '../Account'
import Login from '../Login'

const AccountDetails = () => {
  const session = useSelector((state: AppReduxState) => state.session)
  if (session) return <Account session={session} />
  return <Login />
}

export default AccountDetails
