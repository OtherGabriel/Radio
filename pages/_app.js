import { GlobalStyle } from "../styles/globals"

import { Navbar } from "../src/components/Navbar"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
