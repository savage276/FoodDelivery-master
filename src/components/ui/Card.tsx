'use client'

import styled from 'styled-components'

interface CardProps {
  padding?: string
  elevation?: 'none' | 'sm' | 'md' | 'lg'
}

const Card = styled.div<CardProps>`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.padding || props.theme.spacing.lg};
  
  ${props => {
    switch (props.elevation) {
      case 'sm':
        return `box-shadow: ${props.theme.shadows.sm};`
      case 'md':
        return `box-shadow: ${props.theme.shadows.md};`
      case 'lg':
        return `box-shadow: ${props.theme.shadows.lg};`
      default:
        return 'box-shadow: none;'
    }
  }}
`

Card.defaultProps = {
  elevation: 'md',
}

export default Card