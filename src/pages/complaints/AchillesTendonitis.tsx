import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const AchillesTendonitisPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">
        What is Achilles Tendonitis?
      </h2>
      <p className="mb-6">
        Achilles tendonitis is inflammation of the Achilles tendon, the large
        tendon that runs down the back of the ankle. This condition is common
        among athletes and active individuals but can affect anyone.
      </p>
      <h2 className="text-xl font-semibold mb-4">
        What causes Achilles Tendonitis?
      </h2>
      <p className="mb-3">Achilles tendonitis can be caused by:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Sudden increase in exercise intensity or duration</li>
        <li>Tight calf muscles</li>
        <li>
          Bone spurs (extra bone growth where the Achilles tendon attaches to
          the heel)
        </li>
        <li>Wearing improper footwear during exercise</li>
        <li>Training on uneven surfaces</li>
        <li>Biomechanical issues such as flat feet or high arches</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        The RICE protocol (Rest, Ice, Compression, Elevation) can help manage
        the initial symptoms. Rest the affected leg and avoid activities that
        cause pain. Apply ice for 20 minutes several times a day to reduce
        inflammation. Compression bandages can help reduce swelling, and keeping
        the foot elevated will help minimize fluid accumulation.
      </p>
      <p className="mb-6">
        Over-the-counter pain relievers like ibuprofen can help manage pain and
        reduce inflammation. Gentle stretching of the calf muscles can also be
        beneficial once acute pain has subsided.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can assess the severity of your condition and develop a
        comprehensive treatment plan. This may include custom orthotics to
        correct biomechanical issues, physical therapy exercises to strengthen
        the tendon, and advice on proper footwear. In severe cases, we may
        recommend more advanced treatments such as extracorporeal shockwave
        therapy or referral for surgical consultation.
      </p>
    </>;
  return <FootComplaintDetail title="Achilles Tendonitis" content={content} image="/complaints/achilles.webp"/>;
};