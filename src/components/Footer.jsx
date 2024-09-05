
const Footer = () => {
  return (
    <footer className="bg-[#240750] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are dedicated to connecting students and alumni, providing a platform for mentorship, networking, and career development.
            </p>
          </div>

          {/* Section 2: Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-2">
              Email: contact@alumnistudent.com
            </p>
            <p className="text-gray-400 mb-2">
              Phone: +1 234 567 890
            </p>
            <p className="text-gray-400">
              Address: 123 Alumni St., University City
            </p>
          </div>
        </div>

        {/* Bottom Section: Social Media */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M...Z" /></svg>
            </a>
          </div>
          <p className="text-gray-400 mt-4">
            &copy; 2024 AlumniStudent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
