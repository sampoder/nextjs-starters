import { GeistProvider, CssBaseline } from '@geist-ui/react'
import 'react-virtualized/styles.css'; // only needs to be imported once

function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider themeType={'themeType'}>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}
export default MyApp
