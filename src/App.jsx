import PracticeDetail from "pages/PracticeDetail";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  Description,
  Home,
  Practice,
  PracticeReport,
  Report,
  Test,
} from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/description" component={Description} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/practice/detail" component={PracticeDetail} />
      <Route exact path="/practice/report" component={PracticeReport} />
      <Route exact path="/practice" component={Practice} />
      <Route exact path="/report" component={Report} />
    </BrowserRouter>
  );
}

export default App;
