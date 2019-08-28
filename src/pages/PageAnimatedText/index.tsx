import React from "react";
import AnimatedText from "../../components/AnimatedText";
import { FillParent } from "../../globalStyles";

export default function PageAnimatedText() {
  return (
    <FillParent>
      <AnimatedText text="Animated text" fontSize={40} />
    </FillParent>
  );
}
