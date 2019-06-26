import React from "react";
import "./App.css";
import Badge from "./components/Badge";

const App: React.FC = () => {
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
    <div className="App">
      <Badge value={value} />
    </div>
  );
};

export default App;
