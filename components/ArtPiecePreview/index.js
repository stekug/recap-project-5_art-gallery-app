import Image from "next/image";
import styled from "styled-components";

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
  const { imageSource: image, artist: artist, name: title } = piece;
  return (
    <StyledContainer>
      <Image
        src={image}
        width={360}
        height={0}
        style={{ width: "auto", height: "auto" }}
        alt={title}
      />
      <StyledTitle>
        "{title}" - <StyledSpan>{artist}</StyledSpan>
      </StyledTitle>
    </StyledContainer>
  );
}
