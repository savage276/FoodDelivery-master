'use client'

import styled from 'styled-components'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

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
  return (
    <Container>
      <Title>Welcome to Food Ordering System</Title>
      <Card>
        <h2>Start Ordering</h2>
        <p>Browse restaurants and order your favorite food</p>
        <Button>View Restaurants</Button>
      </Card>
    </Container>
  )
}