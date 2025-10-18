import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const HeelPainPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">What is Heel Pain?</h2>
      <p className="mb-6">
        Heel pain is a common foot complaint that can affect anyone regardless
        of age or activity level. It can occur in the front, back, or bottom of
        the heel and can range from mild discomfort to debilitating pain that
        affects daily activities.
      </p>
      <h2 className="text-xl font-semibold mb-4">What causes Heel Pain?</h2>
      <p className="mb-3">
        Heel pain can be caused by various conditions including:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>
          Plantar fasciitis (inflammation of the band of tissue connecting the
          heel to the toes)
        </li>
        <li>Achilles tendonitis</li>
        <li>Heel spurs (calcium deposits on the underside of the heel bone)</li>
        <li>Excessive pronation (flat feet)</li>
        <li>Stress fractures</li>
        <li>
          Bursitis (inflammation of the bursa, a fluid-filled sac that cushions
          the heel)
        </li>
        <li>Wearing unsupportive footwear</li>
        <li>Sudden increase in activity or weight gain</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        Rest your feet when possible and avoid activities that worsen the pain.
        Apply ice to the painful area for 15-20 minutes, 3-4 times daily to
        reduce inflammation. Wear supportive shoes with good arch support and
        cushioning, and avoid walking barefoot on hard surfaces.
      </p>
      <p className="mb-6">
        Over-the-counter pain relievers like ibuprofen can help manage pain and
        inflammation. Gentle stretching exercises for the calf muscles and
        plantar fascia can also provide relief, especially when done first thing
        in the morning.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can diagnose the specific cause of your heel pain and
        develop a tailored treatment plan. This may include custom orthotics to
        correct biomechanical issues, physical therapy exercises, strapping or
        taping techniques, and advice on proper footwear. For persistent cases,
        we may recommend more advanced treatments such as shockwave therapy,
        cortisone injections, or night splints. In rare cases where conservative
        treatments fail, surgical options might be discussed.
      </p>
    </>;
  return <FootComplaintDetail title="Heel Pain" content={content} image="/complaints/heelpain.webp" />;
};