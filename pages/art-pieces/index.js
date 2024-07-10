import ArtPiecePreview from "@/components/ArtPiecePreview";
export default function ArtPieces({ pieces, onShowDetail }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          piece={piece}
          onShowDetail={() => onShowDetail(piece.slug)}
        />
      ))}
    </ul>
  );
}
