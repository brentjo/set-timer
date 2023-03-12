import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

function GymSetCounterApp({ Component, pageProps }) {
  return (
    
    <ChakraProvider>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height"/>
        <link rel="apple-touch-icon" href="icon.png"/>
        <link rel="manifest" href="manifest.json"/>
        <title>Gym set timer</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default GymSetCounterApp
