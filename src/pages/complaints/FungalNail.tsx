import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const FungalNailPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">What is Fungal Nail?</h2>
      <p className="mb-6">
        Fungal nail infection, also known as onychomycosis, is a common
        condition that affects the toenails or fingernails. It occurs when fungi
        invade one or more nails, causing discoloration, thickening, and often
        brittleness of the affected nails.
      </p>
      <h2 className="text-xl font-semibold mb-4">What causes Fungal Nail?</h2>
      <p className="mb-3">Fungal nail infections can be caused by:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Dermatophyte fungi (the most common cause)</li>
        <li>Yeasts like Candida</li>
        <li>Molds</li>
        <li>
          Walking barefoot in public areas like swimming pools and showers
        </li>
        <li>Sharing nail tools or footwear with infected individuals</li>
        <li>Having athlete's foot, which can spread to the nails</li>
        <li>Damaged nails or skin around the nail</li>
        <li>Weakened immune system</li>
        <li>Poor circulation</li>
        <li>Diabetes</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        Keep your feet clean and dry, and wear clean socks made of
        moisture-wicking materials. Wear breathable footwear and avoid walking
        barefoot in public areas. Use antifungal sprays or powders in your
        shoes. Trim nails straight across and avoid cutting too close to the
        skin.
      </p>
      <p className="mb-6">
        Over-the-counter antifungal nail creams and ointments may help with mild
        infections, though they often cannot penetrate the nail deeply enough to
        completely eliminate the infection. Do not share nail clippers or other
        personal items that could spread the infection.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can diagnose fungal nail infections and recommend
        appropriate treatment options. These may include prescription oral
        antifungal medications, medicated nail polish or creams, or nail
        debridement (removal of infected nail matter). For severe cases, we may
        recommend nail avulsion (temporary removal of the nail) or laser
        therapy. We can also provide advice on preventing reinfection and
        maintaining good foot hygiene.
      </p>
    </>;
  return <FootComplaintDetail title="Fungal Nail" content={content} image="/complaints/fungalnail.webp" />;
};