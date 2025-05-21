'use client'

import styled from 'styled-components'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'small' ? '0.5rem 1rem' : props.size === 'large' ? '1rem 2rem' : '0.75rem 1.5rem'};
  font-size: ${props => props.size === 'small' ? '0.875rem' : props.size === 'large' ? '1.125rem' : '1rem'};
  font-weight: 500;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background-color: ${props.theme.colors.secondary};
          color: white;
          border: none;
          &:hover {
            background-color: ${props.theme.colors.secondary}ee;
          }
        `
      case 'outline':
        return `
          background-color: transparent;
          color: ${props.theme.colors.primary};
          border: 1px solid ${props.theme.colors.primary};
          &:hover {
            background-color: ${props.theme.colors.primary}11;
          }
        `
      default:
        return `
          background-color: ${props.theme.colors.primary};
          color: white;
          border: none;
          &:hover {
            background-color: ${props.theme.colors.primary}ee;
          }
        `
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  fullWidth: false,
}

export default Button