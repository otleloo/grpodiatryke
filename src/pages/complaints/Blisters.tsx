import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const BlistersPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">What are Blisters?</h2>
      <p className="mb-6">
        These are painful fluid-filled lesions which are produced by friction
        and pressure.
      </p>
      <h2 className="text-xl font-semibold mb-4">What causes Blisters?</h2>
      <p className="mb-3">Blisters can be caused by the following:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Ill-fitting shoes</li>
        <li>Stiff shoes</li>
        <li>Wrinkled socks against the skin</li>
        <li>Excessive moisture</li>
        <li>Foot deformities e.g. hammered toes, bunions</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        If a blister occurs, do not pop it as this could open it up to an
        infection. Protect it with an antiseptic plaster or felt ring. If it is
        already open, wash with warm, soapy water and cover with an antiseptic
        dressing. Gel plasters are available at pharmacies to protect from
        further friction.
      </p>
      <p className="mb-6">
        Prevention of blisters is best by removing the causes of the friction.
        Always wear socks or hosiery to act as a barrier between the foot and
        the shoe. Make sure that your footwear is the correct size, fits well
        and keeps your feet dry.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can give foot care advice on all aspects of footwear and
        has many products to treat the skin and protective devices to prevent
        blisters on hammered toes, bunions etc. achieve optimal foot health and
        function.
      </p>
    </>;
  return <FootComplaintDetail title="Blisters" content={content} image="/complaints/blisters.webp"/>;
};