import React from "react";
import { storiesOf } from "@storybook/react";
import WongnaiLogo from "./index";
import { Center } from "../../global/globalStyles";

storiesOf("WongnaiLogo", module).add("default", () => (
  <Center style={{ backgroundColor: "#026ca5" }}>
    <WongnaiLogo />
  </Center>
));
