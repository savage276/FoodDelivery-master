'use client'

import styled from 'styled-components'
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

export default function Restaurants() {
  return (
    <Container>
      <Title>Restaurants</Title>
      <Card>
        <h2>Available Restaurants</h2>
        <p>Coming soon...</p>
      </Card>
    </Container>
  )
}