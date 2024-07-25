// components/Header.js
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-2xl font-bold">Logo</a>
          </Link>
        </div>
        <nav className="flex space-x-4">
          <Link href="/">
            <a className="hover:text-gray-400">Home</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-gray-400">Contact</a>
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="hover:text-gray-400"
            >
              Offer
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-gray-700 text-white mt-2 rounded-md shadow-lg z-10">
                <ul>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Offer Item 1</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Offer Item 2</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Offer Item 3</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Offer Item 4</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-600">Offer Item 5</a></li>
                </ul>
              </div>
            )}
          </div>
          <Link href="/about">
            <a className="hover:text-gray-400">About</a>
          </Link>
          <Link href="/developer">
            <a className="hover:text-gray-400">Developer</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
