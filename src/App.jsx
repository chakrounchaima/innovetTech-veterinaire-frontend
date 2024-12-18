import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<p>about</p>} />
        <Route path="/contact" element={<p>contact</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
