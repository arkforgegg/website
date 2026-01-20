import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "./index.css";
import "../src/css/font.css";
import "../src/css/animation.css";
import { ArkforgePage } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ArkforgePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
