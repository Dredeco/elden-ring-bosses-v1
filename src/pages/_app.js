import Header from '@/components/Header'
import { AppContextProvider } from '@/context/AppContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
  <AppContextProvider>
    <Header />
    <Component {...pageProps} />
  </AppContextProvider>
  </>
  )
}