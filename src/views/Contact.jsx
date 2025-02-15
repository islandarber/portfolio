import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  // Initialize emailjs with the public key (only once)
  useEffect(() => {
    emailjs.init(process.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      process.env.VITE_EMAILJS_SERVICE_ID,
      process.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target
    )
    .then(() => setStatusMessage('Your message has been sent!'))
    .catch(() => setStatusMessage('Sorry, something went wrong. Please try again.'));
  };

  return (
    <section id="contact" className="flex flex-col items-center gap-6 px-4 sm:px-6 md:px-8 py-10 text-white font-source">
      <h1 className="text-3xl sm:text-4xl md:text-7xl">Contact</h1>
      <hr className="w-3/4 md:w-1/2 border-0 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      <p className="text-center text-sm sm:text-base md:text-lg mb-4">Have a question or want to work together? Leave your details below.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
        <input type="text" name="from_name" value={formData.from_name} onChange={handleChange} placeholder="Your Name" className="p-2 border text-black" required />
        <input type="email" name="from_email" value={formData.from_email} onChange={handleChange} placeholder="Your Email" className="p-2 border text-black" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" className="p-2 border text-black" required />
        <div className="flex justify-end">
          <button type="submit" className="py-2 px-4 bg-gray-500 hover:bg-gray-400 text-white font-semibold">Send Message</button>
        </div>
      </form>

      {statusMessage && <p className="text-center text-green-400 text-sm mt-2">{statusMessage}</p>}
    </section>
  );
};

export default Contact;
