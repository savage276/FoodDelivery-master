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

const Promotion = styled(Card)`
  h2 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.gray[600]};
  }
`

export default function Promotions() {
  return (
    <Container>
      <Title>优惠活动</Title>
      <Grid>
        <Promotion>
          <h2>新用户专享</h2>
          <p>首单立减20元！</p>
          <Button fullWidth>立即领取</Button>
        </Promotion>

        <Promotion>
          <h2>午市特惠</h2>
          <p>11:00-14:00 下单满50减10</p>
          <Button fullWidth>获取优惠券</Button>
        </Promotion>

        <Promotion>
          <h2>周末福利</h2>
          <p>满100元免配送费</p>
          <Button fullWidth>查看详情</Button>
        </Promotion>

        <Promotion>
          <h2>会员特权</h2>
          <p>加入会员享专属优惠</p>
          <Button variant="outline" fullWidth>立即开通</Button>
        </Promotion>
      </Grid>
    </Container>
  )
}