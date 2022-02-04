import type { AppProps } from "next/app"
import GlobalStyles from "../components/GlobalStyles"
import "../functions/initFirebase"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
