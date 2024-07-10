import ArtPiecePreview from "@/components/ArtPiecePreview";

export default function SpotlightPages({ pieces }) {
  const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];

  return (
    <>
      <h2>Spotlight</h2>
      <ArtPiecePreview piece={randomPiece} />
    </>
  );
}
