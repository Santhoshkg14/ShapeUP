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
      <div className="bg-white p-3 rounded-md righ">
        <button
          onClick={onClose} 
          className="text-red-600 mb-1"
        >
          Close
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
