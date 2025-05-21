'use client'

import styled from 'styled-components'
import Card from '@/components/ui/Card'

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

const RatingStats = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`

const AverageRating = styled.div`
  text-align: center;

  h2 {
    font-size: 3rem;
    color: ${props => props.theme.colors.primary};
  }

  p {
    color: ${props => props.theme.colors.gray[600]};
  }
`

const RatingBars = styled.div`
  flex: 1;
`

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Review = styled(Card)`
  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    color: ${props => props.theme.colors.gray[600]};
  }
`

export default function Reviews() {
  return (
    <Container>
      <Title>Restaurant Reviews</Title>
      <Card>
        <RatingStats>
          <AverageRating>
            <h2>4.5</h2>
            <p>Average Rating</p>
          </AverageRating>
          <RatingBars>
            {/* Rating distribution bars will go here */}
            <p>Rating distribution coming soon...</p>
          </RatingBars>
        </RatingStats>

        <ReviewList>
          <Review elevation="sm">
            <h3>Great food and service!</h3>
            <p>The food was delicious and arrived quickly. Will order again!</p>
          </Review>
          <Review elevation="sm">
            <h3>Excellent quality</h3>
            <p>Everything was perfect, from ordering to delivery.</p>
          </Review>
        </ReviewList>
      </Card>
    </Container>
  )
}