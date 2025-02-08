import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Fitness() {
  const [expanded, setExpanded] = useState({
    day1: false,
    day2: false,
    day3: false,
    day4: false,
  });

  const toggleDay = (day) => {
    setExpanded((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  return (
    <div className="py-16 bg-gradient-to-r from-green-400 to-blue-500">
      <div className="container mx-auto px-6 text-gray-800 md:px-12 xl:px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 lg:items-center">
          <div className="md:w-5/12">
            <img
              className="rounded-xl shadow-2xl transform hover:scale-105 transition duration-300"
              src="https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Workout"
            />
          </div>
          <div className="md:w-7/12 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              My Workout Plan
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-200">
              Supercharge your fitness journey with our dynamic workout plan!
              Designed to sculpt your body, boost endurance, and ignite your
              passion for health—this plan is your gateway to transformation.
              Dive in and embrace the challenge!
            </p>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          {/* Day 1: Chest and Triceps */}
          <div className="border-b border-gray-200">
            <h3
              onClick={() => toggleDay('day1')}
              className="flex justify-between items-center text-2xl text-green-600 font-bold cursor-pointer hover:text-green-800 transition"
            >
              Day 1: Chest & Triceps
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  expanded.day1 ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </h3>
            {expanded.day1 && (
              <div className="mt-4 transition-all duration-300">
                <h4 className="text-xl font-semibold text-gray-700">Chest</h4>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Barbell/Dumbbell flat bench press</li>
                  <li>Barbell/Dumbbell incline press</li>
                  <li>Pecdec fly</li>
                  <li>Cable cross over fly</li>
                  <li>Dumbbell pull over</li>
                </ul>
                <h4 className="mt-4 text-xl font-semibold text-gray-700">Triceps</h4>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Barbell skull crusher</li>
                  <li>Barbell/rope pushdown</li>
                  <li>Kickback</li>
                  <li>Dips</li>
                </ul>
              </div>
            )}
          </div>

          {/* Day 2: Lat & Biceps */}
          <div className="border-b border-gray-200 mt-6">
            <h3
              onClick={() => toggleDay('day2')}
              className="flex justify-between items-center text-2xl text-green-600 font-bold cursor-pointer hover:text-green-800 transition"
            >
              Day 2: Lat & Biceps
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  expanded.day2 ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </h3>
            {expanded.day2 && (
              <div className="mt-4 transition-all duration-300">
                <h4 className="text-xl font-semibold text-gray-700">Lat</h4>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Lat pull down</li>
                  <li>Close grip lat pull down</li>
                  <li>One arm dumbbell row</li>
                  <li>T bar / Barbell row</li>
                  <li>Cable pullover</li>
                </ul>
                <h4 className="mt-4 text-xl font-semibold text-gray-700">Biceps</h4>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Barbell biceps curl / Seated Incline bench biceps curl</li>
                  <li>Hammer curl</li>
                  <li>Rope biceps curl</li>
                  <li>Preacher curl</li>
                </ul>
              </div>
            )}
          </div>

          {/* Day 3: Leg and Abs */}
          <div className="border-b border-gray-200 mt-6">
            <h3
              onClick={() => toggleDay('day3')}
              className="flex justify-between items-center text-2xl text-green-600 font-bold cursor-pointer hover:text-green-800 transition"
            >
              Day 3: Leg & Abs
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  expanded.day3 ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </h3>
            {expanded.day3 && (
              <div className="mt-4 transition-all duration-300">
                <h4 className="text-xl font-semibold text-gray-700">Leg</h4>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Smith machine squat / Hack squat</li>
                  <li>Leg press</li>
                  <li>Leg curl</li>
                  <li>Leg extension</li>
                  <li>Calf raise</li>
                </ul>
                <h4 className="mt-4 text-xl font-semibold text-gray-700">Abs</h4>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Plank</li>
                  <li>Crunches</li>
                  <li>Leg raises</li>
                  <li>Oblique crunch</li>
                </ul>
              </div>
            )}
          </div>

          {/* Day 4: Shoulders and Forearms */}
          <div className="mt-6">
            <h3
              onClick={() => toggleDay('day4')}
              className="flex justify-between items-center text-2xl text-green-600 font-bold cursor-pointer hover:text-green-800 transition"
            >
              Day 4: Shoulders & Forearms
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  expanded.day4 ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </h3>
            {expanded.day4 && (
              <div className="mt-4 transition-all duration-300">
                <h4 className="text-xl font-semibold text-gray-700">Shoulders</h4>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Dumbbell/Machine press</li>
                  <li>Lateral raises</li>
                  <li>Front raises</li>
                  <li>Reverse pec dec</li>
                  <li>Rope face pull</li>
                  <li>Dumbbell/Barbell Shrugs</li>
                </ul>
                <h4 className="mt-4 text-xl font-semibold text-gray-700">Forearms</h4>
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Forearms bar machine</li>
                  <li>Dumbbell wrist curl</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}