import styled from '@emotion/styled'
import React from 'react'
import { TextField, InputLabel } from '@mui/material'

const InputContainer = styled('div')<InputStyleProps>`
  width: ${({ width }) => width};
`

type InputStyleProps = {
  width?: string
}

type InputProps = {
  label: string
  name: string
  placeholder?: string
  width?: string
  size?: 'small' | 'medium'
  variant?: 'outlined' | 'filled' | 'standard'
  className?: string
}

export const BasicInput: React.FC<InputProps> = ({
  label,
  name,
  placeholder,
  width,
  size = 'small',
  variant = 'outlined',
  className,
}) => {
  return (
    <>
      <InputContainer width={width}>
        <InputLabel>{label}</InputLabel>
        <TextField
          name={name}
          placeholder={placeholder}
          fullWidth
          size={size}
          variant={variant}
          className={className}
        />
      </InputContainer>
    </>
  )
}
