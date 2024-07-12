import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./component";
import { Home, Success } from "./pages";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/success" Component={<Success />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
