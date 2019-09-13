import React from "react";
import { Route, Switch } from "react-router";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import useReactRouter from "use-react-router";
import "./App.css";
import { randomColor } from "./helpers/RandomColor";
import PageAnimatedText from "./pages/PageAnimatedText";
import PageModal from "./pages/PageModal";
import Sidebar from "./components/Sidebar";
import { AppRoute } from "./global/types";
import { Row } from "./global/globalStyles";

const routes: AppRoute[] = [
  { name: "animated_text", url: "/animated_text", component: PageAnimatedText },
  { name: "modal", url: "/modal", component: PageModal }
];

const App: React.FC = () => {
  const { location } = useReactRouter();

  const [sidebarVisible, setSidebarVisible] = React.useState(true);

  return (
    <div className="App">
      <Row>
        <Sidebar visible={sidebarVisible} routes={routes} />
        <PageContainer>
          <Switch>
            {/* <Route path="/animated_text" component={PageAnimatedText} />
          <Route path="/modal" component={PageModal} /> */}
            {routes.map(route => (
              <Route path={route.url} component={route.component} />
            ))}
          </Switch>
        </PageContainer>
      </Row>
    </div>
  );
};

export default App;

export const PageContainer = styled.div`
  background: white;
  color: white;
  width: 100%;
  height: 100%;
`;
