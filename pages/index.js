import useSWR from "swr";
import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const { data: pieces, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <h1>an error occured, plz try again later</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <h1>Art Gallery</h1>
      <h2>Spotlight</h2>
      <Spotlight piece={randomPiece} />
      <h2>Gallery</h2>
      <ArtPieces pieces={pieces} />
    </>
  );
}
