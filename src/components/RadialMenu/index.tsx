import React, { useState, useRef } from "react";
import {
  useChain,
  animated,
  config,
  useSprings,
} from "react-spring";

import Button from "./Button";

interface Props {
  buttons: React.ReactNode[];
  radius: number;
  shift: number;
}

export default function({ buttons, radius, shift }: Props) {
  const [toggle, setToggle] = useState(true);
  const moveToCoordinateRef = useRef<any>();

  let gapInDegree = 360 / buttons.length;
  let degree = shift || 0;
  const sections = buttons.map((item, index) => {
    const radian = (degree * Math.PI) / 180;
    const coordX = radius * Math.cos(radian);
    const coordY = radius * Math.sin(radian);
    degree += gapInDegree;
    return { element: item, x: coordX, y: coordY };
  });

  const springs = useSprings(
    sections.length,
    sections.map((item, index) => ({
      config: config.stiff,
      from: {
        opacity: 0,
        transform: `scale(0) translateY(50px) rotate(0deg)`,
        right: 0,
        bottom: 0
      },
      to: {
        opacity: toggle ? 1 : 0,
        transform: toggle
          ? `scale(1) translateY(0) rotate(360deg)`
          : `scale(0) translateY(50px) rotate(0deg)`,
        right: toggle ? item.x : 0,
        bottom: toggle ? item.y : 0
      },
      ref: moveToCoordinateRef,
      delay: index * 100
    }))
  );

  useChain([moveToCoordinateRef]);

  return (
    <div style={{ position: "relative" }}>
      <Button
        label="Click"
        backgroundColor="#EB463F"
        onClick={() => {
          setToggle(!toggle);
        }}
      />
      {springs.map((props, index) => {
        const item = sections[index];

        return (
          <animated.div
            key={index}
            style={{
              position: "absolute",
              ...props
            }}
          >
            {item.element}
          </animated.div>
        );
      })}
    </div>
  );
}
