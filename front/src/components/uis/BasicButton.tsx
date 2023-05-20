import styled from '@emotion/styled'
import { Button, PaletteLevel } from '@mui/material'
import React from 'react'
import theme from '../../../theme/theme'

const CustomButton = styled(Button)<ButtonStyleProps>`
  color: white;
  text-transform: none;
  border-radius: 0;
  background: ${({ palette }) => palette?.main};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  /* flex-grow: 1; */
  &:hover {
    background: ${({ palette }) => palette?.light};
  }
  &.-shadow {
    box-shadow: 4px 4px 4px rgb(0, 0, 0, 0.25);
  }
`

type ButtonStyleProps = {
  width?: string
  height?: string
  palette?: PaletteLevel
}

type ButtonProps = {
  text: string
  width?: string
  height?: string
  palette?: PaletteLevel
  className?: string
}

export const BasicButton: React.FC<ButtonProps> = ({
  text,
  width,
  height,
  palette = theme.palette.customGreen,
  className,
}) => {
  return (
    <CustomButton width={width} height={height} palette={palette} className={className}>
      {text}
    </CustomButton>
  )
}
