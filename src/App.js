import "./App.css";
import styled from "styled-components";
import { MarkedInput } from "./components/markInput";

const Container = styled.div`
  outline: 1px solid red;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
`;

const EditorContainer = styled.div`
  outline: 1px solid blue;
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <Container>
      <Title>
        <h1>ReadME Helper</h1>
      </Title>
      <EditorContainer>
        <MarkedInput />
      </EditorContainer>
    </Container>
  );
}

export default App;
