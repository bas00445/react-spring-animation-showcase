import React from "react";
import { useTrail, animated, config } from "react-spring";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

interface Props {
  text: string;
  fontSize: number;
}

export default function AnimatedText({ text, fontSize }: Props) {
  const trailAnim = useTrail(text.length, {
    from: {
      transform: `translateY(100px)`,
      fontSize: `${fontSize}px`,
      opacity: 0,
      color: "white"
    },
    to: {
      transform: `translateY(0px)`,
      fontSize: `${fontSize + 24}px`,
      opacity: 1,
      color: "black"
    },
    config: config.stiff
  });

  return (
    <Row>
      {trailAnim.map((anim, index) => (
        <animated.div style={{ ...anim, padding: 4 }}>
          {text[index]}
        </animated.div>
      ))}
    </Row>
  );
}
