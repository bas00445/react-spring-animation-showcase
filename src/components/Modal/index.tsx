import React from "react";
import styled from "styled-components";
import {
  animated,
  useSpring,
  config,
  SpringHandle,
  useChain
} from "react-spring";

const BackgroundOverlay = styled(animated.div)`
  position: fixed;
  top: 0;
  z-index: 1200;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface ModalContentProps {
  width: string;
}

const ModalContent = styled.div<ModalContentProps>`
  position: fixed;
  z-index: 1201;
  top: 50%;
  left: 50%;
  width: ${(props: ModalContentProps) => props.width};
  transform: translate(-50%, -50%);
  text-align: center;
`;

interface Props {
  visible: boolean;
  width: string;
  children: React.ReactNode;
}

export default function Modal({ visible, width, children }: Props) {
  const backgroundRef = React.createRef<SpringHandle>();
  const modalRef = React.createRef<SpringHandle>();

  const fadeBackground = useSpring({
    from: {
      opacity: 0,
      backgroundColor: "white"
    },
    to: {
      opacity: visible ? 1 : 0,
      backgroundColor: "grey"
    },
    config: config.stiff,
    ref: backgroundRef
  });

  const popIn = useSpring({
    from: {
      transform: "scale(0.5)",
      opacity: 0
    },
    to: {
      transform: visible ? "scale(1)" : "scale(0.5)",
      opacity: visible ? 1 : 0
    },
    config: config.stiff,
    ref: modalRef
  });

  useChain([backgroundRef, modalRef]);

  return visible ? (
    <div>
      <BackgroundOverlay style={fadeBackground} />
      <ModalContent width="200px">
        <animated.div style={popIn}>{children}</animated.div>
      </ModalContent>
    </div>
  ) : null;
}
