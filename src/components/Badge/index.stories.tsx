import { storiesOf } from "@storybook/react";
import React from "react";
import Badge from ".";
import { Center } from "../../global/globalStyles";

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
    <Center>
      <Badge value={value} size={40} />
    </Center>
  );
}

storiesOf("Badge", module).add("default", () => <BadgeDemo />);
