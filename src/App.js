import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Exam, Home } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/exam" component={Exam} />
    </BrowserRouter>
  );
}

export default App;
