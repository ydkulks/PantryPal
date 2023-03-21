// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Routes
import {BrowserRouter as BR, Routes, Route} from 'react-router-dom';
// CSS
import './style/Root/App.css';
import './style/Root/Nav.css';
import './style/Root/Footer.css';
//import '../style/Signup.css;'
// Pages
import NotFound from './NotFound';
import NavBar from './Nav';
import Home from './Home/Home';
import FooterSection from './Footer';
import Signup from './Signup/Signup';

function App() {
  return (
    <BR>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterSection />
    </BR>
  );
}

export default App;
