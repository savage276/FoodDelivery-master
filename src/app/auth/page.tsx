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

const ErrorMessage = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [verificationCode, setVerificationCode] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ phone, password, verificationCode })
  }

  return (
    <Container>
      <Title>{isLogin ? '登录' : '注册'}</Title>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Input
            type="tel"
            placeholder="请输入手机号"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
          />
          <Input
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          {!isLogin && (
            <Input
              type="text"
              placeholder="请输入验证码"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              fullWidth
            />
          )}
          <Button type="submit" fullWidth>
            {isLogin ? '登录' : '注册'}
          </Button>
        </Form>
        <SwitchText>
          {isLogin ? "还没有账号？" : "已有账号？"}
          <SwitchButton type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? '立即注册' : '立即登录'}
          </SwitchButton>
        </SwitchText>
      </Card>
    </Container>
  )
}