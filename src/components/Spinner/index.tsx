import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

export default function Spinner() {
  const [looping, setLooping] = React.useState(false);

  const spinAnim = useSpring({
    from: { transform: `rotate(0deg)` },
    to: async next => {
      while (looping) {
        await next({ transform: `rotate(360deg)` });
        await next({ reset: true });
      }
    },
    config: {
      tension: 150,
      friction: 26
    }
  });

  const onToggle = React.useCallback(() => {
    setLooping(!looping);
  }, [looping]);

  return (
    <div>
      <Center style={spinAnim}>Loading</Center>
      <button onClick={onToggle}>Toggle</button>
    </div>
  );
}

const Center = styled(animated.div)`
  width: 100px;
  height: 100px;
  background: red;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 24px;
`;
