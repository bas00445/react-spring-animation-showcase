import React, { Fragment } from "react";

import { animated, useTransition, config } from "react-spring";
import styled from "styled-components";

const ListItem = styled.div`
  color: white;
  background: #0099ff;
  height: 100px;
  border-radius: 4px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnimatedListItem = animated(ListItem);

const length = 5;

const dataItems: any[] = [];
for (let i = 0; i < length; i++) {
  dataItems.push({ label: `Item #${i}` });
}

interface Props {
  items?: any[];
}

export default function List({ items = dataItems }: Props) {
  const [array, setArray] = React.useState(items);

  const transition = useTransition(array, item => item.label, {
    from: {
      height: 0,
      opacity: 0
    },
    enter: {
      height: 120,
      opacity: 1
    },
    leave: {
      height: 0,
      opacity: 0
    },
    config: { friction: 30, tension: 300 }
  });

  const onRemoveItem = React.useCallback(
    (removedIndex: number) => {
      array.splice(removedIndex, 1);
      setArray([...array]);
    },
    [array]
  );

  return (
    <Fragment>
      {transition.map(({ item, key, props }, index) => (
        <AnimatedListItem
          key={key}
          style={props}
          onClick={() => onRemoveItem(index)}
        >
          {item.label}
        </AnimatedListItem>
      ))}
    </Fragment>
  );
}
