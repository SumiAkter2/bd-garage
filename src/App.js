import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Home/Navbar";
import IndianECommerce from "./Components/Indian-E-commerce/IndianECommerce";
import Services from "./Components/Services/Services";



function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/eCommerce" element={<IndianECommerce />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
