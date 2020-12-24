import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CheatSheet from "./CheatSheet";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  padding-bottom: 4rem;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
`;

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Container>
      <Button onClick={openModal}>CheatSheet</Button>
      <CheatSheet showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
}

export default Modal;
