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
      <Center style={spinAnim}>
        <svg
          width="20"
          height="23"
          viewBox="0 0 20 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.25689 22.1882C4.79344 21.6882 1.2163 18.1202 0.707233 13.6567C0.0390797 7.82062 4.57526 2.85264 10.2614 2.789V0.170926C10.2614 0.0254771 10.4432 -0.0517925 10.5659 0.0391129L15.9566 3.99804C16.0475 4.06622 16.0475 4.19804 15.9566 4.26622L10.5659 8.22515C10.4432 8.31605 10.2614 8.23424 10.2614 8.09334V5.4798C6.2661 5.54344 3.06623 8.9433 3.33895 13.0068C3.57076 16.5021 6.42064 19.3383 9.91596 19.5611C13.6204 19.7974 16.7702 17.1521 17.3338 13.6522C17.4384 13.0022 18.0065 12.5295 18.6611 12.5295C19.4747 12.5295 20.111 13.2522 19.9837 14.0567C19.1929 19.0429 14.5885 22.7837 9.25689 22.1882Z"
            fill="white"
          />
        </svg>
      </Center>
      <button onClick={onToggle}>Toggle</button>
    </div>
  );
}

const Center = styled(animated.div)`
  width: 40px;
  height: 40px;
  background: red;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 24px;
`;
