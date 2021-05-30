import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Exam, Home, Report } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/exam" component={Exam} />
      <Route exact path="/report" component={Report} />
    </BrowserRouter>
  );
}

export default App;
