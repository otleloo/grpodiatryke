import React, { useEffect, useState } from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { Calendar, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
export const BookingPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: '',
    isNewPatient: 'yes',
    message: ''
  });
  // Calculate minimum date (today)
  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    // Set the minimum date to today
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);
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
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      reason: '',
      isNewPatient: 'yes',
      message: ''
    });
  };
  // Available time slots
  const morningSlots = ['09:00', '10:00', '11:00'];
  const afternoonSlots = ['12:00', '13:00', '14:00', '15:00'];
  const eveningSlots = ['16:00', '17:00'];
  return <div>
      {/* Hero Section */}
      <section className="bg-sky-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book an Appointment
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Schedule your visit with our experienced podiatrists
          </p>
        </div>
      </section>
      <Section background="white">
        {!formSubmitted ? <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Request Your Appointment
              </h2>
              <p className="text-lg text-gray-600">
                Please fill out the form below and we'll contact you to confirm
                your appointment. For urgent matters, please call our office
                directly.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+254 7XX XXX XXX" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date*
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} min={minDate} required className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500" />
                </div>
              </div>
              {formData.date && <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-10">
                      <div>
                        <h4 className="font-medium text-sm mb-2">Morning</h4>
                        <div className="space-y-2">
                          {morningSlots.map(time => <label key={time} className="block">
                              <input type="radio" name="time" value={time} checked={formData.time === time} onChange={handleChange} className="mr-2" />
                              {time}
                            </label>)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Afternoon</h4>
                        <div className="space-y-2">
                          {afternoonSlots.map(time => <label key={time} className="block">
                              <input type="radio" name="time" value={time} checked={formData.time === time} onChange={handleChange} className="mr-2" />
                              {time}
                            </label>)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Evening</h4>
                        <div className="space-y-2">
                          {eveningSlots.map(time => <label key={time} className="block">
                              <input type="radio" name="time" value={time} checked={formData.time === time} onChange={handleChange} className="mr-2" />
                              {time}
                            </label>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>}
              <div className="mb-6">
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                  Reason for Visit*
                </label>
                <select id="reason" name="reason" value={formData.reason} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500">
                  <option value="">Select a reason</option>
                  <option value="General Checkup">General Checkup</option>
                  <option value="Foot Pain">Foot Pain</option>
                  <option value="Nail Problem">Nail Problem</option>
                  <option value="Sports Injury">Sports Injury</option>
                  <option value="Diabetic Foot Care">Diabetic Foot Care</option>
                  <option value="Custom Orthotics">Custom Orthotics</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are you a new patient?*
                </label>
                <div className="flex space-x-6">
                  <div className="flex items-center">
                    <input type="radio" id="new-yes" name="isNewPatient" value="yes" checked={formData.isNewPatient === 'yes'} onChange={handleRadioChange} className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300" />
                    <label htmlFor="new-yes" className="ml-2 text-gray-700">
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="new-no" name="isNewPatient" value="no" checked={formData.isNewPatient === 'no'} onChange={handleRadioChange} className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300" />
                    <label htmlFor="new-no" className="ml-2 text-gray-700">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sky-500 focus:border-sky-500" placeholder="Please share any specific concerns or questions you have."></textarea>
              </div>
              <div className="text-center">
                <Button type="submit" size="lg">
                  Request Appointment
                </Button>
              </div>
            </form>
          </div> : <motion.div className="max-w-2xl mx-auto text-center bg-white rounded-lg shadow-lg p-12" initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.5
      }}>
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Appointment Request Received
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for requesting an appointment with GR Podiatry. Our team
              will contact you within 24 hours to confirm your appointment
              details.
            </p>
            <Button onClick={() => setFormSubmitted(false)}>
              Request Another Appointment
            </Button>
          </motion.div>}
      </Section>
      {/* What to Expect Section */}
      <Section background="accent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Before Your Visit
              </h3>
              <p className="text-gray-600">
                Complete any necessary forms, gather your medical history,
                insurance information, and a list of current medications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                During Your Visit
              </h3>
              <p className="text-gray-600">
                Your podiatrist will conduct a thorough examination, discuss
                your symptoms, and develop a personalized treatment plan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                After Your Visit
              </h3>
              <p className="text-gray-600">
                Follow your treatment plan, schedule any follow-up appointments,
                and contact us if you have any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </Section>
      {/* FAQ Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                How long will my appointment take?
              </h3>
              <p className="text-gray-600">
                Initial consultations typically take 30-45 minutes, while
                follow-up appointments are usually 15-30 minutes. Some
                procedures may require additional time.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                What should I bring to my appointment?
              </h3>
              <p className="text-gray-600">
                Please bring your ID, a list of current medications, relevant
                medical records, and the shoes you commonly wear.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Do I need a referral to see a podiatrist?
              </h3>
              <p className="text-gray-600">
                No, you do not need a referral to see our podiatrists. You can
                book an appointment directly with us.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                What if I need to reschedule my appointment?
              </h3>
              <p className="text-gray-600">
                We understand that schedules change. Please contact our office
                at least 24 hours in advance if you need to reschedule your
                appointment.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>;
};