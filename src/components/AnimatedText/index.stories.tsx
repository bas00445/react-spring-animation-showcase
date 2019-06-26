import React from "react";
import { storiesOf } from "@storybook/react";
import AnimatedText from ".";

storiesOf("AnimatedText", module).add("default", () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <AnimatedText text="We are Wongnai" fontSize={40} />
  </div>
));
