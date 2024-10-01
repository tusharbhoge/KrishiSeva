
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Logo and Description */}
        <div className="flex items-center mb-6 md:mb-0">
          <img 
            src=""
            alt="Krishi Seva Logo" 
            className="w-12 h-12 mr-3"
          />
          <div>
            <h2 className="text-xl font-bold">KRISHI SEVA</h2>
            <p>किसान और निर्यातकों को जोड़ने वाला प्लेटफ़ॉर्म</p>
          </div>
        </div>

        <div className="mb-6 md:mb-0 text-center">
          <p>Contact Us</p>
          <p>+91 12345 67890</p>
          <p>Email: info@krishiseva.com</p>

        </div>

        <div className="flex flex-col items-center">
        <h3 className="text-lg">Give Us a Follow </h3>
        <h3 className="text-lg">on Social Media</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-2xl hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" className="text-2xl hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" className="text-2xl hover:text-gray-200">
              <FaTwitter />
            </a>
          </div>
        </div>
        
        
        <div className="mt-6 md:mt-0 flex items-center  ">
          <div className='flex flex-col '>
          <p>Ministry of Skill</p>
          <p>Development and</p>
          <p>Entrepreneurship</p>
          </div>
          <img 
            src="https://pngimg.com/uploads/coat_arms_india/coat_arms_india_PNG14.png" 
            alt="Government Logo"
            className="w-12 h-12"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
