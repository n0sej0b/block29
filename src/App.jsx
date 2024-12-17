import { useState } from "react";
import "./App.css";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import React from "react";

import AllPlayers from "./assets/AllPlayers";
import SinglePlayer from "./assets/SinglePlayer";

function AppContent() {
  const [puppyId, setPuppyId] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<AllPlayers setPuppyId={setPuppyId} />} />

      <Route path="/player" element={<SinglePlayer puppyId={puppyId} />} />
    </Routes>
  );
}
function App() {
  return (
    <BrowserRouter>
      <h2
        style={{
          fontSize: "28px",
          backgroundColor: "crimson",
          textAlign: "center",
        }}
      >
        Select Your Puppy Player
      </h2>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
