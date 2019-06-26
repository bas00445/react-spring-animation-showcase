import { storiesOf } from "@storybook/react";
import React from "react";
import Badge from ".";

export default function BadgeDemo() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue(preValue => preValue + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
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
      <Badge value={value} />
    </div>
  );
}

storiesOf("Badge", module).add("default", () => <BadgeDemo />);
