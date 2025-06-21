import React from 'react';

function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl w-full max-w-lg sm:max-w-xl md:max-w-2xl p-6 sm:p-8 md:p-12 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-orange-600 text-2xl font-bold"
          aria-label="Close Modal"
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-600">
            🍕 Bite Rush 🍔
          </h1>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Fast and easy online food ordering platform that brings your favorite meals straight to your door.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;


