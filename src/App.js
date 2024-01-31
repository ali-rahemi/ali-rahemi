
import './App.css';
import Toolbar from './components/toolbar';
import Footer from './components/footer';
import Home from './pages/Home';
import Works from './pages/Works';
import Abaut from './pages/Abaut';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Publications from './pages/Publications';
import Portfolios from './pages/Portfolios';
import CollectionImages from './pages/CollectionImages';
import CollectionImages2 from './pages/CollectionImages2';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/abaut" element={<Abaut />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/publications" element={<Publications />} /> */}
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/collection-images" element={<CollectionImages />} />
          <Route path="/collection-images2" element={<CollectionImages2 />} />
          <Route path="*" element={<div>there is no page here</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
