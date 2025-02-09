import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, onClose }) {
  useEffect(() => {
    // Disable background scrolling when the modal is open
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      style={{ zIndex: 9999 }}
    >
      <div className="bg-white p-6 rounded-md relative">
        <button
          onClick={onClose} 
           className="absolute top-1 right-4 text-red-600"
        >
          Close
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
