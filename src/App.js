import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <Router>    
      <Nav />
      <Routes> 
          <Route path="/" element={<Home/>}></Route>
          <Route path="/booking" element={<BookingPage/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
