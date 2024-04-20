import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Create from "./components/Create";
import Update from "./components/Update";
import Read from "./components/Read";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Create/>} />
          <Route exact path="/all" element={<Read/>} />
          <Route exact path="/update" element={<Update/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
