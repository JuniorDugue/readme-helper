import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 13px;
  border-right: 1.5px solid rgba(15, 15, 0.4);
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
  /* text-decoration-line: underline; */
  border-bottom: 1px solid black;
  padding: 8px 0;
`;

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.063rem;
`;

export function Result(props) {
  return (
    <Container>
      <Title>Display Area</Title>
      <ResultArea>
        <ReactMarkdown source="yessir" />
      </ResultArea>
    </Container>
  );
}
