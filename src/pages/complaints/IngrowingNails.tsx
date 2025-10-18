import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const IngrowingNailsPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">
        What are Ingrowing/Involuted Nails?
      </h2>
      <p className="mb-6">
        Ingrowing (or ingrown) toenails occur when the edge of the nail grows
        into the surrounding skin, causing pain, inflammation, and sometimes
        infection. Involuted nails are excessively curved nails that may or may
        not pierce the skin but can cause discomfort and pressure.
      </p>
      <h2 className="text-xl font-semibold mb-4">
        What causes Ingrowing/Involuted Nails?
      </h2>
      <p className="mb-3">Ingrowing and involuted nails can be caused by:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>
          Improper nail trimming (cutting too short or rounding the corners)
        </li>
        <li>Tight-fitting shoes that compress the toes</li>
        <li>Trauma to the nail</li>
        <li>Genetic predisposition to curved nails</li>
        <li>Excessive sweating that softens the nail fold</li>
        <li>Fungal nail infections</li>
        <li>Poor foot hygiene</li>
        <li>Certain sports activities that put pressure on the toes</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        Trim your toenails straight across and not too short, avoiding rounding
        the corners. Wear properly fitted shoes with adequate toe room. Soak
        your feet in warm salt water to reduce inflammation and pain. Keep your
        feet clean and dry.
      </p>
      <p className="mb-6">
        For mild cases, gently lift the ingrown edge of the nail and place a
        small piece of cotton or dental floss under it to help it grow above the
        skin edge. Over-the-counter pain relievers can help manage discomfort.
        If there are signs of infection (increased pain, swelling, warmth, or
        discharge), seek professional help promptly.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can provide immediate relief by carefully removing the
        ingrown portion of the nail. For recurrent cases, we may recommend
        partial or complete nail avulsion (removal) with or without a chemical
        matrixectomy to prevent regrowth of the problematic nail section. We can
        treat any associated infection with appropriate antibiotics. We also
        provide education on proper nail care techniques to prevent future
        problems and can address any underlying biomechanical issues
        contributing to the condition.
      </p>
    </>;
  return <FootComplaintDetail title="Ingrowing/Involuted Nails" content={content} image="/complaints/ingrownnail.webp"/>;
};