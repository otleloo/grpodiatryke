import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
export const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend or email service
    console.log('Form submitted:', formData);
    // Show success message
    setFormSubmitted(true);
    // Reset form (optional)
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };
  return <div>
      {/* Hero Section */}
      <section className="bg-sky-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to answer your questions and address your concerns
          </p>
        </div>
      </section>
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about our services or need to schedule an
              appointment? Contact us using the information below or fill out
              the form and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-sky-100 p-3 rounded-full flex-shrink-0 mr-4">
                  <MapPin className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    5th Avenue Medical and Day Centre
                  </p>
                  <p className="text-gray-600">5th Ngong Avenue, Nairobi</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-sky-100 p-3 rounded-full flex-shrink-0 mr-4">
                  <Phone className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">(+254) 700-186-731</p>
                  <p className="text-gray-600">(+254) 722-153-771</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-sky-100 p-3 rounded-full flex-shrink-0 mr-4">
                  <Mail className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">pod.almurray.2020@gmail.com</p>
                  <p className="text-gray-600">appointments@grpodiatry.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-sky-100 p-3 rounded-full flex-shrink-0 mr-4">
                  <Clock className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                  <p className="text-gray-600">
                    Monday-Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {!formSubmitted ? <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name*
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email*
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject*
                    </label>
                    <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500">
                      <option value="">Select a subject</option>
                      <option value="Appointment Request">
                        Appointment Request
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Insurance Question">
                        Insurance Question
                      </option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message*
                    </label>
                    <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500"></textarea>
                  </div>
                  <Button type="submit" fullWidth>
                    Send Message
                  </Button>
                </form>
              </div> : <motion.div className="bg-white rounded-lg shadow-lg p-12 text-center h-full flex flex-col items-center justify-center" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5
          }}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Message Sent!
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Thank you for contacting GR Podiatry. We'll get back to you as
                  soon as possible.
                </p>
                <Button onClick={() => setFormSubmitted(false)}>
                  Send Another Message
                </Button>
              </motion.div>}
          </div>
        </div>
      </Section>
      {/* Map Section */}
      <Section background="light">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Find Our Clinic
        </h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-96 w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8127296114835!2d36.7974287!3d-1.2957183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f109996536c39%3A0x4eb6d6e1e16b4153!2s5th%20Avenue%20Medical%20and%20Day%20Centre!5e0!3m2!1sen!2ske!4v1716097317135!5m2!1sen!2ske" width="100%" height="100%" frameBorder="0" style={{
            border: 0
          }} allowFullScreen aria-hidden="false" title="Clinic Location"></iframe>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Directions</h3>
            <p className="text-gray-600 mb-4">
              Our clinic is conveniently located in the 5th Avenue Medical and
              Day Centre, with ample parking available.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-1">By Car</h4>
                <p className="text-gray-600">
                  From the city center, head towards Ngong Avenue. Our clinic is
                  located in the 5th Avenue Medical and Day Centre on 5th Ngong
                  Avenue, with clear signage.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">
                  Public Transportation
                </h4>
                <p className="text-gray-600">
                  Multiple bus and matatu routes serve the area. Our clinic is
                  easily accessible from major transport hubs in Nairobi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Emergency Section */}
      <Section background="accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Emergency Care
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            If you're experiencing a foot or ankle emergency, please call our
            office immediately. For after-hours emergencies, please go to your
            nearest emergency room or urgent care center.
          </p>
          <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-md">
            <span className="font-bold text-xl text-sky-700">
              (+254) 700-186-731
            </span>
          </div>
        </div>
      </Section>
    </div>;
};