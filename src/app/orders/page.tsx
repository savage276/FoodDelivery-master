'use client'

import styled from 'styled-components'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

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

const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`

const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`

const StatusButton = styled(Button)<{ active?: boolean }>`
  background-color: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
`

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const OrderCard = styled(Card)`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.gray[200]};
`

const OrderStatus = styled.span<{ status: string }>`
  color: ${props => {
    switch (props.status) {
      case 'pending': return props.theme.colors.primary;
      case 'processing': return '#2196F3';
      case 'delivering': return '#FF9800';
      case 'completed': return '#4CAF50';
      case 'cancelled': return props.theme.colors.gray[600];
      default: return props.theme.colors.text;
    }
  }};
  font-weight: 500;
`

const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

const statusMap = {
  pending: '待支付',
  processing: '商家制作中',
  delivering: '配送中',
  completed: '已完成',
  cancelled: '已取消',
  refunding: '退款中',
  refunded: '已退款'
}

export default function Orders() {
  const router = useRouter()
  const [activeStatus, setActiveStatus] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const mockOrders = [
    {
      id: '1',
      restaurantName: '川味小馆',
      orderTime: '2025-01-20 12:30',
      status: 'pending',
      total: '68.00',
      items: ['麻婆豆腐', '宫保鸡丁']
    },
    {
      id: '2',
      restaurantName: '粤式茶餐厅',
      orderTime: '2025-01-19 18:45',
      status: 'delivering',
      total: '88.00',
      items: ['叉烧饭', '云吞面']
    },
    // 更多订单...
  ]

  const handleOrderClick = (orderId: string) => {
    router.push(`/orders/${orderId}`)
  }

  return (
    <Container>
      <Title>我的订单</Title>
      
      <SearchBar>
        <Input
          placeholder="搜索订单号或商家名称"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
        />
        <Button>搜索</Button>
      </SearchBar>

      <FilterSection>
        <StatusButton
          active={activeStatus === 'all'}
          onClick={() => setActiveStatus('all')}
        >
          全部
        </StatusButton>
        {Object.entries(statusMap).map(([key, value]) => (
          <StatusButton
            key={key}
            active={activeStatus === key}
            onClick={() => setActiveStatus(key)}
          >
            {value}
          </StatusButton>
        ))}
      </FilterSection>

      <OrderList>
        {mockOrders.map(order => (
          <OrderCard key={order.id} onClick={() => handleOrderClick(order.id)}>
            <OrderHeader>
              <h3>{order.restaurantName}</h3>
              <OrderStatus status={order.status}>{statusMap[order.status]}</OrderStatus>
            </OrderHeader>
            <OrderInfo>
              <span>订单号：{order.id}</span>
              <span>下单时间：{order.orderTime}</span>
            </OrderInfo>
            <OrderInfo>
              <span>商品：{order.items.join('、')}</span>
              <span>总价：¥{order.total}</span>
            </OrderInfo>
          </OrderCard>
        ))}
      </OrderList>
    </Container>
  )
}