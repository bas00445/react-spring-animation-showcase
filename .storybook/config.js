import { configure, addDecorator, addParameters } from "@storybook/react";

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({ viewport: { defaultViewport: "iphone6" } });

configure(loadStories, module);
