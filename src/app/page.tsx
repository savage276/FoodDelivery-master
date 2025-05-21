'use client'

import styled from 'styled-components'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { useRouter } from 'next/navigation'

const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
`

export default function Home() {
  const router = useRouter()

  const handleViewRestaurants = () => {
    router.push('/restaurants')
  }

  return (
    <Container>
      <Title>欢迎使用外卖点餐系统</Title>
      <Card>
        <h2>开始点餐</h2>
        <p>浏览商家，选择你喜欢的美食</p>
        <Button onClick={handleViewRestaurants}>查看商家</Button>
      </Card>
    </Container>
  )
}