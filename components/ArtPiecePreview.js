import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const StyledContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-size: 1rem;
  color: hotpink;
`;

const StyledTitle = styled.h2`
  font-size: 1.2rem;
`;

export default function ArtPiecePreview({ piece }) {
  const { imageSource: image, artist, name: title, slug } = piece;

  return (
    <StyledContainer>
      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={image}
          width={360}
          height={0}
          style={{ width: "auto", height: "auto" }}
          alt={title}
        />
      </Link>
      <StyledTitle>
        "{title}" - <StyledSpan>{artist}</StyledSpan>
      </StyledTitle>
    </StyledContainer>
  );
}
