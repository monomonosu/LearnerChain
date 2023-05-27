import styled from '@emotion/styled'
import React from 'react'
import { TextField, InputLabel } from '@mui/material'

const TextFiledContainer = styled('div')<TextFieldStyleProps>`
  width: ${({ width }) => width};
`

type TextFieldStyleProps = {
  width?: string
}

type TextFieldProps = {
  label: string
  name: string
  placeholder?: string
  width?: string
  minRows?: number
  maxRows?: number
  size?: 'small' | 'medium'
  variant?: 'outlined' | 'filled' | 'standard'
  className?: string
}

export const BasicTextField: React.FC<TextFieldProps> = ({
  label,
  name,
  placeholder,
  width,
  minRows = 5,
  maxRows = 10,
  size = 'small',
  variant = 'outlined',
  className,
}) => {
  return (
    <>
      <TextFiledContainer width={width}>
        <InputLabel>{label}</InputLabel>
        <TextField
          name={name}
          placeholder={placeholder}
          multiline
          minRows={minRows}
          maxRows={maxRows}
          fullWidth
          size={size}
          variant={variant}
          className={className}
        />
      </TextFiledContainer>
    </>
  )
}
