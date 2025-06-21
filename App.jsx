
import React, { useEffect, useState } from 'react';
import logo from './assets/logo-1.png';
import Card from './components/Card';
import Process from './components/Process';
import Special from './components/Special';
import Menubutton from './components/Menubutton';
import Footer from './components/Footer';
import SignupModal from './components/Signup';
import Modal from './components/Modal'; 

function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(false);


  useEffect(() => {
    setIsWelcomeModalOpen(true);  
  }, []);

  return (
    <div className="min-h-screen bg-white text-orange-600 font-roboto">
      <header className="p-3 shadow-md bg-orange-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain rounded-full" />
            <h1 className="text-4xl font-bold tracking-wide">BiteRush</h1>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className="w-6 h-6 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6 text-md font-medium">
                <li className="hover:text-orange-500 cursor-pointer">Home</li>
                <li className="hover:text-orange-500 cursor-pointer">Shop</li>
                <li className="hover:text-orange-500 cursor-pointer">About</li>
                <li className="hover:text-orange-500 cursor-pointer">Contact</li>
              </ul>
            </nav>

            <div className="flex space-x-4">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200"
                onClick={() => setIsSignupOpen(true)}
              >
                Login
              </button>
              <button
                className="border border-orange-500 text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition duration-200"
                onClick={() => setIsSignupOpen(true)}
              >
                Signup
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <nav>
              <ul className="flex flex-col space-y-2 text-md font-medium">
                <li className="hover:text-orange-500 cursor-pointer">Home</li>
                <li className="hover:text-orange-500 cursor-pointer">Shop</li>
                <li className="hover:text-orange-500 cursor-pointer">About</li>
                <li className="hover:text-orange-500 cursor-pointer">Contact</li>
              </ul>
            </nav>
            <div className="flex flex-col space-y-2 mt-4">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200"
                onClick={() => setIsSignupOpen(true)}
              >
                Login
              </button>
              <button
                className="border border-orange-500 text-orange-600 px-4 py-2 rounded-lg hover:bg-orange-50 transition duration-200"
                onClick={() => setIsSignupOpen(true)}
              >
                Signup
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <Card />
      <Process />
      <Special />
      <Menubutton />
      <Footer />

      {/* Modals */}
      {isSignupOpen && <SignupModal onClose={() => setIsSignupOpen(false)} />}
      {isWelcomeModalOpen && <Modal onClose={() => setIsWelcomeModalOpen(false)} />}
    </div>
  );
}

export default App;



