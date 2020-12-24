import React, { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useSpring, animated } from "react-spring";
// import { image } from "./Modal/macbook.jpg";
// import image from "./Modal/macbook.jpg";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 400px;
  box-shadow: 0 50px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

// const ModalImg = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 10px 0 0 10px;
//   background: #000;
// `;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.2;
  color: #141414;

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const ClosedModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

function CheatSheet({ showModal, setShowModal }) {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return;
  });

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              {/* <ModalImg src={require("./macbook.jpg")} alt="keyboard of a macbook laptop" /> */}
              {/* <ModalImg src={image} alt="keyboard of a macbook laptop" /> */}
              <ModalContent>
                <h2>Here's a few to get started</h2>
                <div>
                  <p># H1</p>
                  <p>## H2</p>
                  <p>### H3</p>
                  <p>### Bold</p>
                  <p>**bold text**</p>
                  <p>_Italic</p>
                  <p>[title](https://www.example.com) for links</p>
                  <p>for images ![alt text](image.jpg)</p>
                  <button>click here more</button>
                </div>
                <ClosedModalButton aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)} />
              </ModalContent>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
}

export default CheatSheet;
