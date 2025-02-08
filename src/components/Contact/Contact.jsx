import React,{useState} from 'react';
import Heart from '../Heart';

function Contact() {

  const [showHeart, setShowHeart] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleSendHeart = () => {
    console.log('Sending heart...');
    setShowHeart(true);

    setTimeout(() => {
      setShowHeart(false);
    }, 3000);
  };

  return (
    <div className="py-16 bg-gradient-to-r from-green-400 to-blue-500">
      <div className="container mx-auto px-6 md:px-12 xl:px-6">
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Contact Us
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={handleSendHeart}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
          {showHeart && (
            <div className="mt-4 flex justify-center">
              <Heart />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;