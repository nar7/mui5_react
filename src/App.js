import "./App.css";

import SearchAppBar from "./components/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tour from "./components/Tour";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Tour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
