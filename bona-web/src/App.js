// App.js
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/header-eu';
import Footer from './components/Footer/footer-eu';
import Home from './components/Home/home';
import Contact from './components/Contact/contact-eu';
import Reserva from './components/Reservations/reservation-eu';
import Register from './components/Register/register-eu';
import Schedule from './components/Schedule/schedule-eu';
import Menu from './components/Menu/menu-eu';
import Pd from './components/PendingDelivery/pendingdelivery-eu';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/kontaktua" element={<Contact />} />
          <Route path="/erreserbak" element={<Reserva />} />
          <Route path="/erregistroa" element={<Register />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/pendiente" element={<Pd />}/>
          <Route path="/ordutegia" element={<Schedule />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
