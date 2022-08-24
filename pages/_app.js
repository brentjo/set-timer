import { ChakraProvider } from '@chakra-ui/react'

function GymSetCounterApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default GymSetCounterApp
