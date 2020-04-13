import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import TextInput from '../shared/TextInput'

const Label = styled.label`
  display: block;

  :not(:first-child) {
    margin-top: .75rem;
  }
`

const LabelText = styled.strong`
  display: block;
  font-size: 0.9rem;
  margin-bottom: .25rem;
`

const LoginButton = styled.button`
  display: inline-block;
  margin-top: .5rem;
`

const loginMutation = gql`
  mutation($email: String!, $password: String!) { 
    createUserSession(email: $email, password: $password) { 
      id 
      user {
        id 
        email
      }
    }
  }
`

const Login = () => {
  const [createUserSession] = useMutation(loginMutation)
  const {
    formState: { isSubmitting },
    handleSubmit,
    register
  } = useForm()

  const onFormSubmit = handleSubmit(async ({ email, password }) => {
    const result = await createUserSession({
      variables: {
        email, password
      }
    })
    console.log('result ', result)
  })

  return (
    <form onSubmit={onFormSubmit}>
      <Label>
        <LabelText>
          Email
        </LabelText>
        <TextInput name="email" type="email" ref={register} />
      </Label>
      <Label>
        <LabelText>
          Password
        </LabelText>
        <TextInput name="password" type="password" ref={register} />
      </Label>
      <LoginButton disabled={isSubmitting} type="submit">Login</LoginButton>
    </form>
  )
}

export default Login
