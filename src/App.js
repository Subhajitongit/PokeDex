import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./pages/all/all";
import Search from "./pages/search/search";
import Select from "./pages/select/select";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Select />} />
        <Route path="/all" element={<All />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
