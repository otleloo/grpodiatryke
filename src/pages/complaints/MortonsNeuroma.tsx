import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const MortonsNeuromaPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">
        What is Morton's Neuroma/Toe?
      </h2>
      <p className="mb-6">
        Morton's neuroma is a painful condition that affects the ball of the
        foot, most commonly the area between the third and fourth toes. It
        involves a thickening of tissue around one of the nerves leading to the
        toes, causing sharp, burning pain, tingling, or numbness in the affected
        area.
      </p>
      <h2 className="text-xl font-semibold mb-4">
        What causes Morton's Neuroma?
      </h2>
      <p className="mb-3">Morton's neuroma can be caused by:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Wearing high-heeled, tight, or ill-fitting shoes</li>
        <li>Foot deformities such as bunions, hammertoes, or flat feet</li>
        <li>High-impact activities like running or court sports</li>
        <li>Abnormal foot mechanics that put pressure on the nerve</li>
        <li>Previous foot injuries</li>
        <li>Inflammatory conditions like arthritis</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        Rest your foot and avoid activities that put pressure on the affected
        area. Wear wide, low-heeled shoes with soft soles and adequate room for
        the toes. Use over-the-counter arch supports or cushioned foot pads to
        relieve pressure on the nerve. Apply ice to the affected area to reduce
        pain and inflammation.
      </p>
      <p className="mb-6">
        Over-the-counter pain relievers such as ibuprofen or naproxen can help
        manage pain and reduce inflammation. Massaging the affected area may
        help relieve pain and improve nerve function. Try to avoid wearing high
        heels or shoes with a narrow toe box until symptoms improve.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can diagnose Morton's neuroma through physical
        examination and possibly imaging studies. We can provide custom
        orthotics to correct any foot mechanics issues and reduce pressure on
        the nerve. Specialized padding techniques can help separate the affected
        metatarsal bones, relieving pressure on the nerve. For persistent cases,
        we may recommend corticosteroid injections to reduce inflammation and
        pain. In cases that don't respond to conservative treatments, we may
        discuss decompression surgery or removal of the affected nerve.
      </p>
    </>;
  return <FootComplaintDetail title="Morton's Neuroma/Toe" content={content} image="/complaints/mortonneuroma.webp" />;
};