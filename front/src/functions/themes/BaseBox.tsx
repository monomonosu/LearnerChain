import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const BaseBox = styled(Box)`
  max-width: 768px;
  margin: auto;
  min-height: calc(100vh - 70px);
  &.-flex {
    display: flex;
  }
`
