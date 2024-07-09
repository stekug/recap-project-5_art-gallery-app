import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <h1>an error occured, plz try again later</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={pieces} />
    </>
  );
}
