import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const RoutineTreatmentPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">
        What is Routine Podiatry Treatment?
      </h2>
      <p className="mb-6">
        Routine podiatry treatment focuses on general foot and nail care to
        maintain optimal foot health. These standard appointments are essential
        for addressing common foot issues before they develop into more serious
        problems.
      </p>
      <h2 className="text-xl font-semibold mb-4">What to Expect</h2>
      <p className="mb-3">
        During your 35-minute routine treatment appointment, our podiatrist
        will:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Conduct a thorough examination of your feet</li>
        <li>Provide professional nail trimming and care</li>
        <li>Address calluses, corns, or other skin conditions</li>
        <li>Diagnose any emerging foot problems</li>
        <li>Discuss treatment options tailored to your needs</li>
        <li>Offer preventative advice for ongoing foot health</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">
        Who Benefits from Routine Treatment?
      </h2>
      <p className="mb-6">
        Regular podiatry treatments are particularly beneficial for:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Seniors who have difficulty caring for their own feet</li>
        <li>Individuals with diabetes or circulatory issues</li>
        <li>People with thickened or problematic nails</li>
        <li>Those with recurring calluses or corns</li>
        <li>Anyone seeking to maintain optimal foot health</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">Frequency of Appointments</h2>
      <p className="mb-4">
        The recommended frequency of routine treatments varies depending on
        individual needs. Many patients benefit from appointments every 6-8
        weeks, while those with specific conditions may require more frequent
        care. Your podiatrist will recommend an appropriate schedule based on
        your personal foot health requirements.
      </p>
    </>;
  return <FootComplaintDetail title="Routine Podiatry Treatment" content={content} image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />;
};