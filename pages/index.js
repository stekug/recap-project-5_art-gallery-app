import ArtpiecePreview from "@/components/ArtpiecePreview";

export default function SpotlightPages({ pieces }) {
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <h2>Spotlight</h2>
      <ArtpiecePreview piece={randomPiece} />
    </>
  );
}
