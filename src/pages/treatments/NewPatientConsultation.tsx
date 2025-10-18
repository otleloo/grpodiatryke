import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const NewPatientConsultationPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">
        What is a New Patient Consultation?
      </h2>
      <p className="mb-6">
        A new patient consultation is your first appointment with our podiatry
        clinic. This comprehensive assessment allows us to understand your foot
        health concerns, medical history, and develop a personalized treatment
        plan.
      </p>
      <h2 className="text-xl font-semibold mb-4">What to Expect</h2>
      <p className="mb-3">During your initial consultation, we will:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Discuss your current foot concerns and symptoms</li>
        <li>Review your medical history and any relevant conditions</li>
        <li>Examine your feet, including skin, nails, joints, and structure</li>
        <li>Assess your gait and biomechanics</li>
        <li>Perform any necessary diagnostic tests</li>
        <li>Discuss treatment options and develop a care plan</li>
        <li>Address any questions or concerns you may have</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">How to Prepare</h2>
      <p className="mb-6">
        To make the most of your first appointment, please bring the following
        items:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>A list of your current medications and supplements</li>
        <li>Medical records related to your foot condition (if available)</li>
        <li>Previous imaging results (X-rays, MRIs) if applicable</li>
        <li>Your health insurance information</li>
        <li>A pair of shoes you commonly wear</li>
        <li>A list of questions or concerns you'd like to discuss</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">Duration and Follow-up</h2>
      <p className="mb-4">
        Your initial consultation typically lasts 30-45 minutes. At the end of
        the appointment, we'll discuss whether follow-up visits are needed and
        create a treatment schedule tailored to your specific needs. We'll also
        provide you with any necessary home care instructions and answer any
        remaining questions.
      </p>
    </>;
  return <FootComplaintDetail title="New Patient Consultation" content={content} image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />;
};