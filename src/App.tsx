import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "./index.css";
import "../src/css/font.css";
import "../src/css/animation.css";
import { Home } from "./pages/Home";
import { ArkforgePage } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ArkforgePage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
