import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const CrackedHeelsPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">What are Cracked Heels?</h2>
      <p className="mb-6">
        Cracked heels, also known as heel fissures, are a common foot problem
        characterized by the presence of splits or cracks in the skin around the
        heel. These cracks can be shallow or deep, and in severe cases may bleed
        and cause significant pain.
      </p>
      <h2 className="text-xl font-semibold mb-4">What causes Cracked Heels?</h2>
      <p className="mb-3">Cracked heels can be caused by:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Dry skin (xerosis)</li>
        <li>Prolonged standing, especially on hard floors</li>
        <li>Wearing open-backed shoes or sandals</li>
        <li>Obesity, which increases pressure on the heel pad</li>
        <li>Skin conditions like psoriasis, eczema, or athlete's foot</li>
        <li>Aging, which reduces skin elasticity</li>
        <li>Cold, dry weather</li>
        <li>Nutritional deficiencies (particularly vitamins A, E, and zinc)</li>
        <li>Medical conditions like diabetes or thyroid disease</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        Soak your feet in warm, soapy water for about 20 minutes, then gently
        scrub with a pumice stone to remove dead skin. Apply a thick moisturizer
        containing ingredients like urea, salicylic acid, or alpha hydroxy acids
        immediately after bathing while skin is still slightly damp.
      </p>
      <p className="mb-6">
        Wear closed-back shoes with good cushioning and thick socks to reduce
        pressure on heels. Use heel cups or insoles to provide additional
        support. For severe cracking, apply petroleum jelly and wear cotton
        socks overnight to seal in moisture.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can provide professional treatment for cracked heels,
        including safe removal of hard, thickened skin and recommendations for
        appropriate moisturizers or medicated creams. For persistent or severe
        cases, we may use specialized dressings, prescribe stronger medications,
        or address any underlying conditions contributing to the problem. We can
        also provide advice on proper footwear and preventive measures to avoid
        recurrence.
      </p>
    </>;
  return <FootComplaintDetail title="Cracked Heels" content={content} image="/complaints/crackedheels.webp" />;
};