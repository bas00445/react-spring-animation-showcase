import React from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";

interface CircleDiv {
  size: number;
}

const CircleDiv = styled(animated.div)<CircleDiv>`
  border-radius: 50%;
  color: white;
  background: red;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 24px;
  text-align: center;
`;

interface Props {
  value: number;
}

export default function Badge({ value }: Props) {
  const [resetAnim, setResetAnim] = React.useState(false);
  const popupAnim = useSpring({
    from: {
      transform: `scale(0) rotate(270deg)`
    },
    to: {
      transform: `scale(1) rotate(0deg)`
    },
    config: config.stiff,
    onRest: () => setResetAnim(false),
    reset: resetAnim
  });

  React.useEffect(() => {
    setResetAnim(true);
  }, [value]);

  return (
    <CircleDiv style={popupAnim} size={50}>
      {value}
    </CircleDiv>
  );
}
