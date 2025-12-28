'use client';

import { useState } from 'react';
import { MessageCircle, Send, Linkedin, Github, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-6 pt-20 pb-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light mb-4">Contact</h1>
        <p className="text-xl font-light text-gray-300 mb-12">
          Get in touch with me
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20 hover:shadow-white/30 transition-all duration-300">
            <h2 className="text-2xl font-light mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder='eg : Sandami Upeksha'
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-white/50 transition-all font-light text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder='eg : sandamiupeksha@gmail.com'
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-white/50 transition-all font-light text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-light text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  placeholder='eg : Greeting'
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-white/50 transition-all font-light text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder='eg : Hey, nice job!'
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-white/50 transition-all font-light resize-none text-white placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 font-light"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20 hover:shadow-white/30 transition-all duration-300">
              <h2 className="text-2xl font-light mb-6">Contact Information</h2>
              <div className="space-y-4 font-light">
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Email</h3>
                  <p className="text-white">desilvabkp@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Phone</h3>
                  <p className="text-white">+94 70 2241 222</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Location</h3>
                  <p className="text-white">15/4 B, Sudharmarama Mawatha, Bowala, Kandy.</p>
                </div>
              </div>
            </div>

            <div className="bg-black bg-opacity-40 backdrop-blur-md rounded-lg p-8 shadow-xl shadow-white/20 hover:shadow-white/30 transition-all duration-300">
              <h2 className="text-2xl font-light mb-6">Social Media</h2>
              <div className="flex items-center justify-center gap-6">
                <a 
                  href="https://wa.me/94702241222" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 transform"
                  title="WhatsApp"
                >
                  <MessageCircle size={28} className="text-white" />
                </a>
                <a 
                  href="https://t.me/praveen" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 transform"
                  title="Telegram"
                >
                  <Send size={28} className="text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/praveen-de-silva" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 transform"
                  title="LinkedIn"
                >
                  <Linkedin size={28} className="text-white" />
                </a>
                <a 
                  href="https://github.com/praveen" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 transform"
                  title="GitHub"
                >
                  <Github size={28} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
