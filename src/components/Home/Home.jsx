import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BMICalculator from '../BMICalculator/BMICalculator';
import Modal from '../Modal/Modal';
import Heart from '../Heart';

export default function Home() {
  const [showHeart, setShowHeart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [aiPhoto, setAiPhoto] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Default image URL to show immediately after file upload
  const defaultImageUrl =
    "https://github.com/Santhoshkg14/ShapeUP/blob/main/public/Stop%20Dreaming%20Just%20Do%20it.jpg?raw=true";

  // Show heart on "Book A Free Session" button click
  const handleSendHeart = () => {
    console.log('Sending heart...');
    setShowHeart(true);
    setTimeout(() => {
      setShowHeart(false);
    }, 3000);
  };

  // API call to generate AI photo using Replicate's Stable Diffusion
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Immediately show the default image when a file is selected
    setAiPhoto(defaultImageUrl);
    setUploading(true);

    try {
      const response = await fetch("https://api.replicate.com/v1/predictions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token YOUR_REPLICATE_API_TOKEN"
        },
        body: JSON.stringify({
          version: "a9758cb2d2f04077a064eef3a986c874fe17f86c24d19d16b198935c60c1e2ce",
          input: {
            prompt: "A hyper-realistic fitness portrait of a person with dynamic lighting and a futuristic vibe"
          }
        })
      });

      const data = await response.json();

      if (data.output && data.output.length > 0) {
        setAiPhoto(data.output[0]);
      } else {
        console.error("No image URL returned from API, using default.", data);
      }
    } catch (error) {
      console.error("Error generating AI photo:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 relative">
      <header className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Welcome to <span className="text-yellow-300">Shape</span>
            <span className="text-red-300">UP</span>
          </h2>
          <p className="mt-4 text-xl italic text-gray-100">
            Your Ultimate Fitness Partner <span className="text-green-400">😊</span>
          </p>
          <div className="mt-8">
            <button
              onClick={handleSendHeart}
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-orange-500 hover:bg-slate-400 transition"
            >
              {showHeart && <span className="mr-2"><Heart /></span>}
              Book A Free Session
              {showHeart && <span className="ml-2"><Heart /></span>}
            </button>
          </div>
        </div>
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-40"
            src="https://github.com/Santhoshkg14/ShapeUP/blob/main/public/Bar.jpeg?raw=true"
            alt="Background"
          />
        </div>
      </header>

      <main className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="flex justify-center">
              <img
                className="w-full max-w-sm h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                src="https://github.com/Santhoshkg14/ShapeUP/blob/main/public/Santhosh.jpg?raw=true"
                alt="Workout"
              />
            </div>
            <div className="text-white flex flex-col text-center items-center space-y-6">
              <h3 className="text-2xl sm:text-4xl font-bold">
                Step into the Fitness Revolution!
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-orange-700 flex-shrink-0 mt-1"
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
                    className="w-6 h-6 text-orange-700 flex-shrink-0 mt-1"
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
                    className="w-6 h-6 text-orange-700 flex-shrink-0 mt-1"
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
                    className="w-6 h-6 text-orange-700 flex-shrink-0 mt-1"
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
                    Fuel your dreams with relentless determination.
                  </span>
                </li>
              </ul>

              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md w-60"
              >
                Open BMI Calculator
              </button>
              <div className="mt-6 text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-400 to-amber-500 drop-shadow-2xl tracking-wider animate-pulse">
                  Your Journey Starts Here !
                </h3>
              </div>

              {/* AI Photo Upload Section */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-400 p-1 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold  mb-4 rounded-lg text-white">
                  Get Your AI Generated Fitness Photo
                </h3>
                <div className="flex flex-col items-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="mb-4"
                  />
                  {uploading ? (
                    <p className="text-gray-600">Generating your photo...</p>
                  ) : (
                    aiPhoto && (
                      <img
                        src={aiPhoto}
                        alt="AI Generated Fitness"
                        className="w-60 max-w-md rounded-lg shadow-lg hover:scale-105"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>



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

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BMICalculator />
        </Modal>
      )}
    </div>
  );
}
