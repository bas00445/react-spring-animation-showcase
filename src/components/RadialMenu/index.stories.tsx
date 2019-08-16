import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import RadialMenu from ".";
import Button from "./Button";
import { Center } from "../../globalStyles";

const buttons = [
  <Button label="1" backgroundColor="black" onClick={action("click")} />,
  <Button label="2" backgroundColor="black" onClick={action("click")} />,
  <Button label="3" backgroundColor="black" onClick={action("click")} />,
  <Button label="4" backgroundColor="black" onClick={action("click")} />,
  <Button label="5" backgroundColor="black" onClick={action("click")} />
];

storiesOf("RadialMenu", module).add("default", () => (
  <Center>
    <RadialMenu buttons={buttons} radius={80} shift={40} />
  </Center>
));
