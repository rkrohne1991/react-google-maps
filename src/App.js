import React from "react";
import MainSection from "./components/MainSection/MainSection";

import classes from "./App.module.scss";

const App = () => {
  return (
    <div className={classes.mainApp}>
      <MainSection />
    </div>
  );
};

export default App;
