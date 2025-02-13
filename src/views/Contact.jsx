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
    <section id="contact" className="contact-container max-w-md min-h-screen mx-auto px-4 py-8 text-white">
      <div className='flex flex-col justify-center items-center gap-2'>
              <h1 className='mt-8 text-8xl text-white text-center'>Contact</h1>
              <hr className="w-1/2 border-0 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </div>
      <p className='text-center text-xl my-6'>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit} className="space-y-6 p-6">
        {/* Name Field */}
        <div>
          <label htmlFor="from_name" className="block text-white text-lg mb-2">Name</label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="from_email" className="block text-white text-lg mb-2">Email</label>
          <input
            type="from_email"
            id="from_email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-white text-lg mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full p-3 border border-gray-300 focus:outline-none focus:border-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-gray-700 text-white font-semibold hover:bg-gray-600 focus:outline-none text-lg"
          >
            Submit
          </button>
        </div>

        {/* Status Message */}
        {statusMessage && <p className="text-center text-white mt-4">{statusMessage}</p>}
      </form>
    </section>
  );
};

export default Contact;
