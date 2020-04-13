import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag'
import styled from 'styled-components';

import graphqlClient from './api/graphQLClient'

import Login from './components/Login';
import { useDispatch } from 'react-redux';
import { setSession } from './store/ducks/actions';
import AccountDetails from './components/AccountDetails/indext';

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 80rem;
`

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  width: 100%;
`

const Content = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const Sidebar = styled.div`
  flex: 0 auto;
  width: 10rem;
`

const sessionQuery = gql`
  query SessionQuery {
    userSession(me: true) { 
      id
      user { 
        id
        email 
      }
    }
  }
`

const Root = () => {
  const [initialized, setInitialized] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    graphqlClient.query({ query: sessionQuery }).then(({ data }) => {
      console.log('data ', data)
      if (data.userSession)
        dispatch(setSession(data.userSession))
      setInitialized(true)
    })
  }, [dispatch])

  if (!initialized) return <p>Loading...</p>

  return (
    <Wrapper>
      <Container>
        <Content>ContentContent</Content>
        <Sidebar>
          <AccountDetails />
        </Sidebar>
      </Container>
    </Wrapper>
  )
}

export default Root