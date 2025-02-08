import React, { useState } from 'react';

export default function BMICalculator() {
  const [gender, setGender] = useState('Male');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      // Convert height from centimeters to meters
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));

      // Determine the BMI category
      if (bmiValue < 18.5) {
        setMessage('Underweight');
      } else if (bmiValue < 24.9) {
        setMessage('Normal weight');
      } else if (bmiValue < 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obesity');
      }
    } else {
      setBmi(null);
      setMessage('Please enter valid height and weight values.');
    }
  };

  return (
    <div className="bg-emerald-400 p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Calculate Your BMI</h2>
      <form onSubmit={calculateBMI} className="space-y-4">
        {/* Gender Selection */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Gender</label>
          <div className="flex space-x-6">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
                className="form-radio text-blue-600"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
                className="form-radio text-pink-600"
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>
        {/* Height Input */}
        <div>
          <label htmlFor="height" className="block text-gray-700 font-medium">
            Height (cms)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height in cms"
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>
        {/* Weight Input */}
        <div>
          <label htmlFor="weight" className="block text-gray-700 font-medium">
            Weight (kgs)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight in kgs"
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Calculate BMI
        </button>
      </form>
      {bmi && (
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold">Your BMI is: {bmi}</p>
          <p className="mt-2 text-lg">{message}</p>
        </div>
      )}
    </div>
  );
}
