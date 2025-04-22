import Home from "./component/Home/Home";
import { Routes, Route } from "react-router-dom";
import Shop from "./component/shop/Shop";
import { Testimonials } from "./component/Testimonials/Testimonials";
import { About } from "./component/About/About";
import { Contact } from "./component/Contact/Contact";

const App = ()=> {
  return (
    <> 
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/testimonals" element = {<Testimonials/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>}/>

    </Routes>
    </>
  );
}

export default App;
