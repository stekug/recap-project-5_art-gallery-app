import ArtPiecePreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  console.log(pieces);

  return (
    <ul>
      {pieces.map((piece) => (
        <ArtPiecePreview key={piece.slug} piece={piece} />
      ))}
    </ul>
  );
}
