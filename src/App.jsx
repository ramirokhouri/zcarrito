import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Menu from "./Menu.jsx";
import Carrito from "./Carrito.jsx";
import Home from "./Home.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
