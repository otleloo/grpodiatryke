import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const OrthoticsFittingPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">
        What is an Orthotics Fitting?
      </h2>
      <p className="mb-6">
        An orthotics fitting is a specialized appointment where your custom-made
        orthotic insoles are properly fitted to your feet and footwear. This
        appointment follows a biomechanical assessment where your podiatrist has
        prescribed custom orthotics to address your specific foot mechanics and
        concerns.
      </p>
      <h2 className="text-xl font-semibold mb-4">The Fitting Process</h2>
      <p className="mb-6">
        During your orthotics fitting appointment, our podiatrist will:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Ensure your custom orthotics fit properly in your shoes</li>
        <li>Make any necessary minor adjustments for optimal comfort</li>
        <li>Observe you walking with the new orthotics</li>
        <li>Provide guidance on breaking in your orthotics</li>
        <li>Demonstrate proper insertion and removal techniques</li>
        <li>Answer any questions about care and maintenance</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What to Bring</h2>
      <p className="mb-3">
        To make the most of your fitting appointment, please bring:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>The shoes you most commonly wear</li>
        <li>Athletic shoes if you use them regularly</li>
        <li>Any previous orthotics you may have used</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">Follow-Up Care</h2>
      <p className="mb-4">
        After your fitting, we recommend a follow-up appointment 4-6 weeks later
        to assess how your feet are adapting to the orthotics and to make any
        necessary adjustments. This ensures your orthotics are providing the
        maximum benefit and addressing your specific foot concerns effectively.
      </p>
      <p className="mb-4">
        This complimentary fitting appointment is included as part of our
        comprehensive orthotic therapy following your biomechanical assessment.
      </p>
    </>;
  return <FootComplaintDetail title="Orthotics Fitting" content={content} image="/treatment/orthotics.jpg" />;
};