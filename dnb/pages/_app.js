import '../styles/globals.css'
import { init } from "@socialgouv/matomo-next";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    init({ url: "https://dnb.beta.no/", siteId: "2" });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
