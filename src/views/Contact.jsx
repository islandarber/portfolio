import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

      emailjs.sendForm(
        process.env.VITE_EMAILJS_SERVICE_ID,
        process.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text , formData);
          setStatusMessage('Your message has been sent!');
        },
        (error) => {
          console.log(error.text);
          setStatusMessage('Sorry, something went wrong. Please try again.');
          setTimeout(() => {
            setStatusMessage('');
          }, 3000);
        }
      );
  };

  return (
    <div className="contact-container max-w-md min-h-screen mx-auto px-4 py-8 text-white">
      <h2 className="text-3xl font-bold text-center mb-8 ">Contact</h2>
      <p className='text-center mb-6'>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit} className="space-y-6 p-6">
        {/* Name Field */}
        <div>
          <label htmlFor="from_name" className="block text-white mb-2">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="from_email" className="block text-white mb-2">Email</label>
          <input
            type="from_email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-1 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-white mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            rows="2"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-2 py-1 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Submit
          </button>
        </div>

        {/* Status Message */}
        {statusMessage && <p className="text-center text-white mt-4">{statusMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;
