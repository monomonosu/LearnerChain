import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    customGrey: {
      main: '#F0F2EE',
      light: '#ECECEC',
    },
    customGreen: {
      main: '#128938',
      light: '#4CAF50',
      dark: '#005F00',
    },
    customBlue: {
      main: '#2A5ED8',
      light: '#4285F4',
      dark: '#0011A3',
    },
    customRed: {
      dark: '#A70000',
      main: '#D12925',
      light: '#E53935',
    },
  },
})

export default theme
