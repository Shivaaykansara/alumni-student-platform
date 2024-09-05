import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#240750] p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Alumni-Student Platform</div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none flex flex-col items-center justify-center w-10 h-10"
          >
            <div
              className={`w-8 h-1 bg-white rounded transform transition-all duration-300 ease-in-out ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <div
              className={`w-8 h-1 bg-white rounded mt-1.5 transform transition-all duration-300 ease-in-out ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <div
              className={`w-8 h-1 bg-white rounded mt-1.5 transform transition-all duration-300 ease-in-out ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        <ul className="hidden md:flex space-x-4">
          <li><Link to="/" className="text-white block py-2">Home</Link></li>
          <li><Link to="/profile" className="text-white block py-2">Profiles</Link></li>
          <li><Link to="/features" className="text-white block py-2">Features</Link></li>
          <li><Link to="/contact" className="text-white block py-2">ContactUs</Link></li>
        </ul>
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-screen bg-[#344C64] transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden z-10`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="text-white text-lg flex flex-col space-y-4 p-4">
          <li><Link to="/" className="block">Home</Link></li>
          <li><Link to="/profile" className="block">Profiles</Link></li>
          <li><Link to="/features" className="block">Features</Link></li>
          <li><Link to="/contact" className="block">ContactUs</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
