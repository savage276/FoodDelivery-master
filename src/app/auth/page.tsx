'use client'

import { useState } from 'react'
import styled from 'styled-components'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'

const Container = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 0 1rem;
`

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SwitchText = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: ${props => props.theme.colors.gray[600]};
`

const SwitchButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  font-weight: 500;
  padding: 0;
  margin-left: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [verificationCode, setVerificationCode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle authentication logic here
    console.log({ phone, password, verificationCode })
  }

  return (
    <Container>
      <Title>{isLogin ? 'Login' : 'Register'}</Title>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          {!isLogin && (
            <Input
              type="text"
              placeholder="Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              fullWidth
            />
          )}
          <Button type="submit" fullWidth>
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </Form>
        <SwitchText>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <SwitchButton type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Register' : 'Login'}
          </SwitchButton>
        </SwitchText>
      </Card>
    </Container>
  )
}