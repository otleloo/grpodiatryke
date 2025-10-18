import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const PlanterFasciitisPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">What is Plantar Fasciitis?</h2>
      <p className="mb-6">
        Plantar fasciitis is one of the most common causes of heel pain. It
        involves inflammation of the plantar fascia — the thick band of tissue
        that runs across the bottom of your foot, connecting your heel bone to
        your toes.
      </p>
      <h2 className="text-xl font-semibold mb-4">
        What causes Plantar Fasciitis?
      </h2>
      <p className="mb-3">Plantar fasciitis can be caused by:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Excessive pronation (flat feet) or high arches</li>
        <li>Wearing worn-out shoes with poor arch support</li>
        <li>Being overweight or obese</li>
        <li>Sudden increase in physical activity or intensity</li>
        <li>Occupations that require long periods of standing or walking</li>
        <li>Tight Achilles tendons or calf muscles</li>
        <li>Aging (most common between ages 40-60)</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        Rest your feet and reduce activities that cause pain. Apply ice to the
        painful area for 15-20 minutes, 3-4 times daily. Perform gentle
        stretching exercises for your plantar fascia and calf muscles,
        especially before getting out of bed in the morning.
      </p>
      <p className="mb-6">
        Wear supportive shoes with good arch support and cushioning.
        Over-the-counter arch supports or heel cups may provide relief.
        Non-steroidal anti-inflammatory drugs (NSAIDs) like ibuprofen can help
        manage pain and inflammation.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can provide a comprehensive treatment plan for plantar
        fasciitis. This may include custom orthotics to correct biomechanical
        issues, physical therapy exercises, night splints to stretch the plantar
        fascia while you sleep, and advice on proper footwear. For persistent
        cases, we may recommend more advanced treatments such as extracorporeal
        shockwave therapy, cortisone injections, or platelet-rich plasma
        therapy. In rare cases where conservative treatments fail, minimally
        invasive surgical options might be considered.
      </p>
    </>;
  return <FootComplaintDetail title="Plantar Fasciitis" content={content} image="/complaints/plantarfasciitis.webp" />;
};