import React from 'react';

export default function Transform() {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="container mx-auto px-6 md:px-12 xl:px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Transform Your Life
          </h2>
          <p className="text-gray-700 text-center mb-6">
            Embark on a journey of transformation with our holistic programs designed to empower your body and mind. Discover the secrets to lasting fitness and unlock the best version of yourself.
          </p>
          <div className="mt-4">
            <img
              className="w-full rounded-lg shadow-md"
              src="https://images.pexels.com/photos/2646531/pexels-photo-2646531.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Transformation"
            />
          </div>
          <div className="mt-6 text-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}