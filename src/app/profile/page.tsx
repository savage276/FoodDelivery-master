'use client'

import styled from 'styled-components'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const Section = styled(Card)`
  h2 {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text};
  }
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.gray[200]};
`

export default function Profile() {
  return (
    <Container>
      <Title>个人中心</Title>
      <Grid>
        <Section>
          <h2>基本信息</h2>
          <UserInfo>
            <Avatar />
            <div>
              <h3>用户名</h3>
              <p>手机号：***********</p>
            </div>
          </UserInfo>
          <Button variant="outline">编辑资料</Button>
        </Section>

        <Section>
          <h2>收货地址</h2>
          <p>暂无收货地址</p>
          <Button variant="outline">添加地址</Button>
        </Section>

        <Section>
          <h2>历史订单</h2>
          <p>暂无订单记录</p>
          <Button variant="outline">查看全部订单</Button>
        </Section>

        <Section>
          <h2>收藏商家</h2>
          <p>暂无收藏商家</p>
          <Button variant="outline">浏览商家</Button>
        </Section>
      </Grid>
    </Container>
  )
}