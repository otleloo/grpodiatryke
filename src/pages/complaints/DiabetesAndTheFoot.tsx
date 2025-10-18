import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const DiabetesAndTheFootPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">Diabetes and the Foot</h2>
      <p className="mb-6">
        Diabetes can have significant effects on foot health due to its impact
        on circulation and nerve function. People with diabetes are at higher
        risk for foot complications, which if left untreated, can lead to
        serious issues including ulceration and, in severe cases, amputation.
      </p>
      <h2 className="text-xl font-semibold mb-4">
        How Diabetes Affects the Feet
      </h2>
      <p className="mb-3">Diabetes can impact foot health through:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>
          Peripheral neuropathy (nerve damage causing numbness or tingling)
        </li>
        <li>Poor circulation (reducing healing ability)</li>
        <li>Increased risk of infection</li>
        <li>Dry skin prone to cracking</li>
        <li>Changes in foot shape due to muscle weakness</li>
        <li>Decreased ability to feel injuries or pressure</li>
        <li>Slower healing of wounds and cuts</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        Inspect your feet daily for cuts, blisters, redness, swelling, or nail
        problems. Wash feet in warm (not hot) water daily, dry them thoroughly,
        and apply moisturizer except between toes. Always wear shoes and socks;
        never walk barefoot, even indoors.
      </p>
      <p className="mb-6">
        Keep blood sugar levels under control as recommended by your doctor.
        Quit smoking, as it further restricts blood flow. Exercise regularly to
        improve circulation. Cut toenails straight across and file edges with an
        emery board. Always shake out shoes before wearing to ensure there are
        no foreign objects inside.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists provide specialized diabetic foot care including
        comprehensive foot assessments, nail care, callus management, and wound
        care. We can prescribe appropriate footwear and custom orthotics to
        prevent pressure points. Regular podiatric check-ups are essential for
        early detection of potential problems. We also offer education on proper
        foot care techniques and work as part of your healthcare team to help
        manage diabetes-related foot issues and prevent serious complications.
      </p>
    </>;
  return <FootComplaintDetail title="Diabetes and the Foot" content={content} image="/complaints/diabetesandthefeet.webp" />;
};