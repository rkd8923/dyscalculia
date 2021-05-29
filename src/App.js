import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
