import ArtpiecePreview from "@/components/ArtpiecePreview";
export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <ArtpiecePreview key={piece.slug} piece={piece} />
      ))}
    </ul>
  );
}
