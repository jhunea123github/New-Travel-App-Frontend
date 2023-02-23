import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './components/Index';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Booking from './components/Booking';
// import SearchBox from './components/SearchBox';
// import ResultsPage from './components/ResultsPage';
// import { useState } from 'react';
import BookingList from './components/BookingList';
import LoginForm from './components/LoginForm'
import Signup1 from './components/Signup1'
import VipInfo from './components/VipInfo';
import VVIP from './components/VVIP';
import Mini from './components/Mini';


function App() {

  return (
    <div>
   <Router>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/bookingList" element={<BookingList />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<Signup1 />} />
      <Route path="/VipInfo" element={<VipInfo />} />
      <Route path="/VVIP" element={<VVIP />} />
      <Route path="/MiniBus" element={<Mini />} />
    </Routes>
   </Router>
   <Footer/>

    
    </div>
  );
}

export default App;
