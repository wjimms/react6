// import { Routes } from 'react-router-dom';

import { Routes, Route} from "react-router-dom";
import Menu from "./components/menu/menu/Menu";
import Header from "./components/menu/header/Header";
import Footer from "./components/menu/footer/Footer";
import Portfolio from "./pages/portfolio/Portfolio";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <div className="App">
      
      <Menu/>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
