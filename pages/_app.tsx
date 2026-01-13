// pages/_app.tsx
import '../styles/globals.css'
import "../styles/print.css"

import type { AppProps } from 'next/app'
import Footer from '../src/components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}

export default MyApp
