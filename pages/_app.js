import { NextUIProvider } from '@nextui-org/react'
import '../src/styles/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
