import React from "react";
import { Route, Switch } from "react-router";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import useReactRouter from "use-react-router";
import "./App.css";
import { randomColor } from "./helpers/RandomColor";
import PageAnimatedText from "./pages/PageAnimatedText";
import PageModal from "./pages/PageModal";

const App: React.FC = () => {
  const { location } = useReactRouter();

  const transition = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });

  return (
    <div className="App">
      {transition.map(({ item, key, props }) => (
        <PageContainer style={props} key={key}>
          <Switch location={item}>
            <Route path="/animated_text" component={PageAnimatedText} />
            <Route path="/modal" component={PageModal} />
          </Switch>
        </PageContainer>
      ))}
    </div>
  );
};

export default App;

export const PageContainer = styled(animated.div)`
  background: ${randomColor(40)};
  color: white;
  width: 100%;
  height: 100%;
`;
