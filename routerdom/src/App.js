import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Empresa from "./components/Empresa";
import Contato from "./components/Contato";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="empresa" element={<Empresa />} />
            <Route path="contato" element={<Contato />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
