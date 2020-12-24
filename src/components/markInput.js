import styled from "styled-components";

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
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 1.063rem;
`;

export function MarkedInput(props) {
  return (
    <Container>
      <Title>Markdown Text</Title>
      <TextArea/>
    </Container>
  );
}
