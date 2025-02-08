import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BMICalculator from '../BMICalculator/BMICalculator';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 relative">
      {/* Hero Section */}
      <header className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Welcome to <span className="text-yellow-300">Shape</span>
            <span className="text-red-300">UP</span>
          </h2>
          <p className="mt-4 text-xl text-gray-100">
            Your Ultimate Fitness Partner <span className="text-green-400">😊</span>
          </p>
          <div className="mt-8">
            <Link
              to="/login"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-blue-700 bg-white hover:bg-gray-200 transition"
            >
              Login Now
            </Link>
          </div>
        </div>
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.pexels.com/photos/4753987/pexels-photo-4753987.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Background"
          />
        </div>
      </header>

      {/* Featured Section */}
      <main className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image Section (Left) */}
            <div className="flex justify-center">
              <img
                className="w-full max-w-sm h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                src="https://mail.google.com/mail/u/0?ui=2&ik=55c6d384ec&attid=0.1&permmsgid=msg-f:1823482305529500436&th=194e4f7ee34bd314&view=fimg&fur=ip&permmsgid=msg-f:1823482305529500436&sz=s0-l75-ft&attbid=ANGjdJ-5olILp1m5uz7vWwjxYHrc4JEnTmUcj4XjK-1HkkUfC1OcT9AfJFiyNw8-t2fpm7BiJZXwgP5XPFoYEtnHp5qAQAHo1ohekB22V31ZJ8b_Gf-9ElbxJgtL_k0&disp=emb&realattid=9D06580B-9598-4872-9B8B-251B0ED43336&zw"
                alt="Workout"
              />
            </div>
            {/* Text Section (Right) */}
            <div className="text-white flex flex-col text-center items-center place-content-center space-y-6">
              <h3 className="text-2xl sm:text-4xl font-bold">
                Step into the Fitness Revolution!
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-orange-700 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-5.707a1 1 0 011.414 0l3.586-3.586a1 1 0 10-1.414-1.414L10 10.586 8.707 9.293a1 1 0 10-1.414 1.414l2 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">
                    Join a community of fearless trailblazers.
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-orange-700 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-5.707a1 1 0 011.414 0l3.586-3.586a1 1 0 10-1.414-1.414L10 10.586 8.707 9.293a1 1 0 10-1.414 1.414l2 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">
                    Shatter limits with our cutting-edge workouts.
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-orange-700 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-5.707a1 1 0 011.414 0l3.586-3.586a1 1 0 10-1.414-1.414L10 10.586 8.707 9.293a1 1 0 10-1.414 1.414l2 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">
                    Ignite your inner power and break boundaries.
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-orange-700 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-5.707a1 1 0 011.414 0l3.586-3.586a1 1 0 10-1.414-1.414L10 10.586 8.707 9.293a1 1 0 10-1.414 1.414l2 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">
                    Embark on your journey to an unstoppable, transformed you.
                  </span>
                </li>
              </ul>

              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md w-60"
              >
                Open BMI Calculator
              </button>

              {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-3 rounded-md">
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-red-600 mb-1"
                    >
                      Close
                    </button>
                    <BMICalculator />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Testimonials Section */}
      <section className="relative z-10 py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            What Our Members Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg italic">
                "ShapeUP transformed my life! The workouts are challenging and the community is incredibly supportive."
              </p>
              <p className="mt-4 font-semibold text-gray-700">- User from Moon.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg italic">
                "I've never felt more motivated. The training programs at ShapeUP have redefined my fitness journey."
              </p>
              <p className="mt-4 font-semibold text-gray-700">- User from Mars.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 py-16 bg-gradient-to-r from-slate-400 to-emerald-400">
        <div className="container mx-auto px-4 text-center text-white">
          <h3 className="text-3xl sm:text-5xl font-bold mb-4">
            Ready to Transform Your Life?
          </h3>
          <p className="text-lg mb-8">
            Join ShapeUP today and embark on a journey to a healthier, happier, and stronger you.
          </p>
          <Link
            to="#"
            className="inline-flex items-center px-8 py-3 font-medium bg-orange-700 rounded-md hover:bg-orange-600 transition transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
