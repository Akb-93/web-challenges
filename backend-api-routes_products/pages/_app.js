import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());


const options = {
  fetcher: fetcher,
};

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={options}>
      <GlobalStyle />
      <Navigation />
      <Component {...pageProps} />
    </SWRConfig>
  );
}


function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}