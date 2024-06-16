import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./routes/home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
  