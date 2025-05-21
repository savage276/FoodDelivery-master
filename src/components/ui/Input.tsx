'use client'

import styled from 'styled-components'

interface InputProps {
  error?: boolean
  fullWidth?: boolean
}

const Input = styled.input<InputProps>`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid ${props => props.error ? props.theme.colors.primary : props.theme.colors.gray[300]};
  border-radius: ${props => props.theme.borderRadius.md};
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${props => props.error ? props.theme.colors.primary : props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.error ? props.theme.colors.primary + '33' : props.theme.colors.primary + '33'};
  }

  &::placeholder {
    color: ${props => props.theme.colors.gray[400]};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.gray[100]};
    cursor: not-allowed;
  }
`

Input.defaultProps = {
  error: false,
  fullWidth: false,
}

export default Input