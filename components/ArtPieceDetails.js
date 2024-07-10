import Image from "next/image";
import { useRouter } from "next/router";
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

const StyledLink = styled(Link)`
  color: white;
  font-size: 1.25rem;
  text-decoration: none;
  padding: 0.5rem 2rem;
  background-color: var(--primary-color);
  border-radius: 0.5rem;
  &:hover {
    background-color: var(--secondary-color);
  }
`;

export default function ArtPieceDetails({ pieces }) {
  const router = useRouter();
  const slug = router.query.slug;

  const detailPiece = pieces.find((piece) => piece.slug === slug);

  const { imageSource: image, artist, name: title, year, genre } = detailPiece;

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
        <StyledSpan>{artist}</StyledSpan> - "{title}"
      </StyledTitle>
      <p>
        <strong>Year: </strong>
        {year}
      </p>
      <p>
        <strong>Genre: </strong>
        {genre}
      </p>
      <StyledLink href="/art-pieces">BACK</StyledLink>
    </StyledContainer>
  );
}
