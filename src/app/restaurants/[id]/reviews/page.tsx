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
      <Title>商家评价</Title>
      <Card>
        <RatingStats>
          <AverageRating>
            <h2>4.5</h2>
            <p>平均评分</p>
          </AverageRating>
          <RatingBars>
            <p>评分分布即将上线...</p>
          </RatingBars>
        </RatingStats>

        <ReviewList>
          <Review elevation="sm">
            <h3>菜品美味，服务周到！</h3>
            <p>出餐速度快，包装很好，菜品保温效果好。</p>
          </Review>
          <Review elevation="sm">
            <h3>非常满意</h3>
            <p>从下单到送达全程体验都很好，会继续光顾。</p>
          </Review>
        </ReviewList>
      </Card>
    </Container>
  )
}