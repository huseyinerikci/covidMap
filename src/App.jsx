import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Detail from "./pages/detail/index";
import Header from "./components/header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex  flex-col h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:country" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
