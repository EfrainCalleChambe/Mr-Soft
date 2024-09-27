import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Left: Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
            <a href="#" className="hover:text-white transition">About Us</a>
            <a href="#" className="hover:text-white transition">Contacts</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>

          {/* Right: Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Copyright */}
          <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} HabitHUB. All rights reserved.
          </p>

          {/* Call to Action */}
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-indigo-700 transition duration-300">
            Subscribe for updates
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
