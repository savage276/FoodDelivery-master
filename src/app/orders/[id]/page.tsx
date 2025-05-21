'use client'

import styled from 'styled-components'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useState } from 'react'

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

const Section = styled(Card)`
  margin-bottom: 2rem;

  h2 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 1rem;
  }
`

const StatusTimeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
`

const TimelineItem = styled.div<{ active?: boolean }>`
  display: flex;
  gap: 1rem;
  opacity: ${props => props.active ? 1 : 0.5};

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.gray[400]};
    margin-top: 6px;
  }
`

const DeliveryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0;
  padding: 1rem;
  background-color: ${props => props.theme.colors.gray[100]};
  border-radius: ${props => props.theme.borderRadius.md};
`

const OrderItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${props => props.theme.colors.gray[200]};

  &:last-child {
    border-bottom: none;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`

const RatingSection = styled.div`
  margin-top: 1rem;
`

export default function OrderDetail({ params }: { params: { id: string } }) {
  const [showRating, setShowRating] = useState(false)

  const mockOrder = {
    id: params.id,
    status: 'delivering',
    restaurant: '川味小馆',
    items: [
      { name: '麻婆豆腐', price: '28.00', quantity: 1 },
      { name: '宫保鸡丁', price: '32.00', quantity: 1 }
    ],
    total: '68.00',
    timeline: [
      { time: '12:30', status: '订单已提交', active: true },
      { time: '12:35', status: '商家已接单', active: true },
      { time: '12:50', status: '骑手已取餐', active: true },
      { time: '13:15', status: '订单已送达', active: false }
    ],
    delivery: {
      rider: '张师傅',
      phone: '138****1234',
      estimated: '13:15'
    }
  }

  return (
    <Container>
      <Title>订单详情</Title>

      <Section>
        <h2>订单状态</h2>
        <StatusTimeline>
          {mockOrder.timeline.map((item, index) => (
            <TimelineItem key={index} active={item.active}>
              <div>
                <div>{item.time}</div>
                <div>{item.status}</div>
              </div>
            </TimelineItem>
          ))}
        </StatusTimeline>
      </Section>

      {mockOrder.status === 'delivering' && (
        <Section>
          <h2>配送信息</h2>
          <DeliveryInfo>
            <div>
              <p>配送员：{mockOrder.delivery.rider}</p>
              <p>联系电话：{mockOrder.delivery.phone}</p>
            </div>
            <div>
              <p>预计送达</p>
              <p>{mockOrder.delivery.estimated}</p>
            </div>
          </DeliveryInfo>
        </Section>
      )}

      <Section>
        <h2>订单信息</h2>
        <p>订单号：{mockOrder.id}</p>
        <p>商家：{mockOrder.restaurant}</p>
        
        <OrderItems>
          {mockOrder.items.map((item, index) => (
            <ItemRow key={index}>
              <span>{item.name} x{item.quantity}</span>
              <span>¥{item.price}</span>
            </ItemRow>
          ))}
          <ItemRow>
            <strong>总计</strong>
            <strong>¥{mockOrder.total}</strong>
          </ItemRow>
        </OrderItems>

        <ButtonGroup>
          <Button variant="outline">联系商家</Button>
          <Button variant="outline">申请退款</Button>
          {mockOrder.status === 'completed' && !showRating && (
            <Button onClick={() => setShowRating(true)}>评价订单</Button>
          )}
        </ButtonGroup>

        {showRating && (
          <RatingSection>
            <h3>订单评价</h3>
            {/* 评价表单将在这里实现 */}
            <p>评价功能即将上线...</p>
          </RatingSection>
        )}
      </Section>
    </Container>
  )
}