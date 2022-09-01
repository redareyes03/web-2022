import { NextUIProvider } from '@nextui-org/react'
import { Provider } from 'react-redux'
import store from '../src/redux/store'
import '../src/styles/main.css'


function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </NextUIProvider>
  )
}

export default MyApp
