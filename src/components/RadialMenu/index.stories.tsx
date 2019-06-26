import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import RadialMenu from ".";
import Button from "./Button";

const buttons = [
  <Button label="1" backgroundColor="black" onClick={action("click")} />,
  <Button label="2" backgroundColor="black" onClick={action("click")} />,
  <Button label="3" backgroundColor="black" onClick={action("click")} />,
  <Button label="4" backgroundColor="black" onClick={action("click")} />,
  <Button label="5" backgroundColor="black" onClick={action("click")} />
];

storiesOf("RadialMenu", module).add("default", () => (
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
    <RadialMenu buttons={buttons} radius={80} shift={40} />
  </div>
));
