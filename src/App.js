import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Discord from "./pages/Discord";
import Extensions from "./pages/Extensions";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import GrandTheft from "./pages/games/gtav/Gtav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discord" element={<Discord />} />
        <Route path="/extensions" element={<Extensions />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gtav" element={<GrandTheft />} />
      </Routes>
    </div>
  );
}

export default App;
