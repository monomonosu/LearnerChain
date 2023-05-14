import type { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'
import theme from '../../theme/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
