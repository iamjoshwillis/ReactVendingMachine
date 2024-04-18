import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';

import Oreo from "./Oreo";
import Chips from "./Chips";
import CherryJuice from "./CherryJuice";

const VendingMachine = () => {
  return (
    <div>
        <h1>Snack Selection</h1>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/oreo" element={<Oreo />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/cherryjuice" element={<CherryJuice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default VendingMachine;
