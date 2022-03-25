import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import './App.css';

function App() {
    return (
      <Router>
        <Header />
    <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/products" element={<Products />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
    </div>
    <Footer />
    </Router>
  );
  }

export default App;
