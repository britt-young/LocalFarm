import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Pages/Router";
import NavBar from "./Components/NavBar";

function App() {
   return (
    <>
      <BrowserRouter>
      <NavBar />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
