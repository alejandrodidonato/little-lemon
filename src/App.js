import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Booking from './components/Booking';

function App() {
  return (
    <Router>    
      <Nav />
      <Routes> 
          <Route path="/" element={<Home/>}></Route>
          <Route path="/booking" element={<Booking/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
