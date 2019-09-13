import React from "react";
import { animated, useSpring, config, useTrail } from "react-spring";
import { AppRoute } from "../../global/types";
import styled from "styled-components";

interface Props {
  visible: boolean;
  routes: AppRoute[];
}

const Container = styled(animated.div)`
  background: #4267b2;
  display: flex;
  flex-direction: column;
  padding: 40px 16px;
`;

const Link = styled(animated.a)`
  color: white;
  font-size: 28px;
  font-family: kanit;
  text-decoration: none;

  &: not(:last-child) {
    margin-bottom: 8px;
  }
`;

export default function Sidebar({ visible, routes }: Props) {
  const anim = useSpring({
    from: {
      width: 0
    },
    to: {
      width: visible ? 200 : 0
    },
    config: config.stiff
  });

  const trail = useTrail(routes.length, {
    from: {
      transform: `transltateX(-100px)`,
      opacity: 0
    },
    to: {
      transform: `transltateX(0px)`,
      opacity: 1
    },
    config: config.stiff
  });

  return (
    <Container style={anim}>
      {trail.map((props, index) => (
        <Link href={routes[index].url} style={props}>
          {routes[index].name}
        </Link>
      ))}
    </Container>
  );
}
