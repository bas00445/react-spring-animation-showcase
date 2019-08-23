import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import RadialMenu from ".";
import Button from "./Button";
import { Center } from "../../globalStyles";
import { randomColor } from "../../helpers/RandomColor";

// const buttons = [
//   <Button label="1" backgroundColor="black" onClick={action("click")} />,
//   <Button label="2" backgroundColor="black" onClick={action("click")} />,
//   <Button label="3" backgroundColor="black" onClick={action("click")} />
// ];

const numberButtons = 5;
const buttons: React.ReactNode[] = [];

for (let i = 0; i < numberButtons; i++) {
  buttons.push(
    <Button
      label={String(i)}
      backgroundColor={randomColor(40)}
      onClick={action("click")}
    />
  );
}

const radials = [
  <RadialMenu buttons={buttons} radius={70} shift={0} />,
  <RadialMenu buttons={buttons} radius={70} shift={0} />,
  <RadialMenu buttons={buttons} radius={70} shift={0} />,
  <RadialMenu buttons={buttons} radius={70} shift={0} />
];

storiesOf("RadialMenu", module).add("default", () => (
  <Center>
    <RadialMenu buttons={radials} radius={180} shift={0} />
  </Center>
));
