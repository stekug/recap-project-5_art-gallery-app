import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <h1>an error occured, plz try again later</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  if (!pieces) {
    return null;
  }

  return (
    <>
      <GlobalStyle />
      <h1>ART GALLERY</h1>
      <Layout>
        <Component {...pageProps} pieces={pieces} />
      </Layout>
    </>
  );
}
