import styled from "styled-components";
import Navigation from "./Navigation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
  max-width: 50rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <Container>{children}</Container>
      <Navigation />
    </>
  );
}
