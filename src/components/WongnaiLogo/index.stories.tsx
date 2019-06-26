import React from "react";
import { storiesOf } from "@storybook/react";
import WongnaiLogo from "./index";

storiesOf("WongnaiLogo", module).add("default", () => (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#026ca5"
    }}
  >
    <WongnaiLogo />
  </div>
));
