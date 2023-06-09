import styled from '@emotion/styled'
import { Chip, PaletteLevel } from '@mui/material'
import theme from '../../../theme/theme'

const CustomClip = styled(Chip)<ChipStyleProps>`
  background: ${({ palette }) => palette?.main};
  color: white;
  border-radius: 0px;
  &:hover {
    background: ${({ palette }) => palette?.light};
  }
  &.-text-black {
    color: black;
  }
  &.-text-white {
    color: white;
  }
`

type ChipStyleProps = {
  palette?: PaletteLevel
}

type ChipProps = {
  text: string
  size?: 'small' | 'medium'
  palette?: PaletteLevel
  className?: string
}

export const BasicChip: React.FC<ChipProps> = ({
  text,
  size = 'medium',
  palette = theme.palette.customGrey,
  className = '-text-black',
}) => {
  return <CustomClip label={text} size={size} palette={palette} clickable className={className} />
}
