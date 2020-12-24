import React, { useState } from "react";
import styled from "styled-components";
import { MarkedInput } from "./components/markInput";
import { Result } from "./components/result";
import EditorContext from "./components/context/editorContext";
import Modal from "./components/Modal/Modal";

const Container = styled.div`
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
  height: 100%;
  width: 100%;
  display: flex;
`;

function App() {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <EditorContext.Provider value={contextValue}>
      <Container>
        <Title>
          <h1>ReadME Helper</h1>
        </Title>
        <Modal />
        <EditorContainer>
          <MarkedInput />
          <Result />
        </EditorContainer>
      </Container>
    </EditorContext.Provider>
  );
}

export default App;
