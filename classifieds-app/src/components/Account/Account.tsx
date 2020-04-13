import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { AppReduxState } from '../../store'
import { SessionType } from '../../store/ducks/types'

const Wrapper = styled.div`
  color: ${props => props.theme.mortar}
  font-size: 0.9rem;
`

const Email = styled.div`
  color: ${props => props.theme.nero};
  font-size: 1rem;
  margin-top: .25rem;
`

const Account: React.FC<{ session: SessionType }> = ({ session }) => {
  return (
    <Wrapper>
      Logged in as <Email>{session.user.email}</Email>
    </Wrapper>
  )
}

export default Account
