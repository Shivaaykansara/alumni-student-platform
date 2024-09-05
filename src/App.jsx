import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileCard from './components/ProfileCard';
import FeaturesPage from './components/FeaturesPage';
import ContactUsForm from './components/ContactUs';
import Footer from './components/Footer';
import { HomePage } from './components/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfileCard />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/contact" element={<ContactUsForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
