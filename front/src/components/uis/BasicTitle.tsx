import styled from '@emotion/styled'
import { PaletteLevel } from '@mui/material'
import theme from '../../../theme/theme'

const CustomTitle = styled.div<TitleStyleProps>`
  width: 100%;
  padding: 30px;
  background: ${({ palette }) => palette.main};
`

const TitleBox = styled.div`
  margin: auto;
  text-align: center;
  max-width: 768px;
`

type TitleStyleProps = {
  palette: PaletteLevel
}

type TitleProps = {
  text: string
  palette?: PaletteLevel
}

export const BasicTitle: React.FC<TitleProps> = ({ text, palette = theme.palette.customGrey }) => {
  return (
    <CustomTitle palette={palette}>
      <TitleBox>
        <h3>{text}</h3>
      </TitleBox>
    </CustomTitle>
  )
}
