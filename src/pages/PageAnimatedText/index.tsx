import React from "react";
import AnimatedText from "../../components/AnimatedText";
import { FillParent, Center } from "../../global/globalStyles";

export default function PageAnimatedText() {
  return (
    <FillParent>
      <Center>
        <AnimatedText text="Animated text" fontSize={40} />
      </Center>
    </FillParent>
  );
}
