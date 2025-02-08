import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import Contact from "./components/pages/contact/Contact";
import Home from "./components/pages/home/Home";
import Services from "./components/pages/services/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
