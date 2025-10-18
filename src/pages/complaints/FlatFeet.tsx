import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const FlatFeetPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">What are Flat Feet?</h2>
      <p className="mb-6">
        Flat feet (pes planus) is a condition where the arches on the inside of
        your feet are flattened, causing the entire sole to touch the floor when
        standing. While flat feet are normal in infants and toddlers, arches
        typically develop during childhood. However, some people never develop
        arches.
      </p>
      <h2 className="text-xl font-semibold mb-4">What causes Flat Feet?</h2>
      <p className="mb-3">Flat feet can be caused by:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Genetic factors</li>
        <li>Weak arch muscles</li>
        <li>Injuries to the foot or ankle</li>
        <li>Arthritis or rheumatoid arthritis</li>
        <li>Damage to the posterior tibial tendon</li>
        <li>Obesity or pregnancy (adding stress to the feet)</li>
        <li>Aging and wear and tear</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        Choose supportive shoes with good arch support and avoid high heels or
        shoes with minimal support. Maintain a healthy weight to reduce stress
        on your feet. Perform regular stretching exercises for your Achilles
        tendon and foot muscles to improve flexibility and strength.
      </p>
      <p className="mb-6">
        Over-the-counter arch supports might help some people with mild
        symptoms. Rest your feet and apply ice to painful areas after standing
        for long periods or after activities that aggravate symptoms.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can assess the structure and function of your feet and
        recommend appropriate treatment options. This may include custom
        orthotic devices designed specifically for your feet to provide proper
        support and alignment. We can also suggest specific exercises to
        strengthen the arches and provide guidance on proper footwear. In severe
        cases that don't respond to conservative treatments, we may discuss
        surgical options or refer you to a specialist.
      </p>
    </>;
  return <FootComplaintDetail title="Flat Feet" content={content} image="/complaints/flatfeet.webp" />;
};