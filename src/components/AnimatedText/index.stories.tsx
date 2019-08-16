import React from "react";
import { storiesOf } from "@storybook/react";
import AnimatedText from ".";
import { Center } from "../../globalStyles";

storiesOf("AnimatedText", module).add("default", () => (
  <Center>
    <AnimatedText text="We are Wongnai" fontSize={40} />
  </Center>
));
