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
      <Title>Personal Center</Title>
      <Grid>
        <Section>
          <h2>Basic Information</h2>
          <UserInfo>
            <Avatar />
            <div>
              <h3>User Name</h3>
              <p>Phone: ***********</p>
            </div>
          </UserInfo>
          <Button variant="outline">Edit Profile</Button>
        </Section>

        <Section>
          <h2>Delivery Addresses</h2>
          <p>No addresses added yet</p>
          <Button variant="outline">Add Address</Button>
        </Section>

        <Section>
          <h2>Order History</h2>
          <p>No orders yet</p>
          <Button variant="outline">View All Orders</Button>
        </Section>

        <Section>
          <h2>Favorite Restaurants</h2>
          <p>No favorites yet</p>
          <Button variant="outline">Browse Restaurants</Button>
        </Section>
      </Grid>
    </Container>
  )
}