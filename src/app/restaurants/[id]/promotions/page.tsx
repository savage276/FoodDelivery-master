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
      <Title>Current Promotions</Title>
      <Grid>
        <Promotion>
          <h2>New User Special</h2>
          <p>Get 20% off on your first order!</p>
          <Button fullWidth>Claim Offer</Button>
        </Promotion>

        <Promotion>
          <h2>Lunch Deal</h2>
          <p>¥10 off orders over ¥50 between 11am-2pm</p>
          <Button fullWidth>Get Coupon</Button>
        </Promotion>

        <Promotion>
          <h2>Weekend Special</h2>
          <p>Free delivery on orders over ¥100</p>
          <Button fullWidth>Learn More</Button>
        </Promotion>

        <Promotion>
          <h2>VIP Membership</h2>
          <p>Join our VIP program for exclusive benefits</p>
          <Button variant="outline" fullWidth>Join Now</Button>
        </Promotion>
      </Grid>
    </Container>
  )
}