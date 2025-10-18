import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const AthletesFootPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">What is Athlete's Foot?</h2>
      <p className="mb-6">
        Athlete's foot (tinea pedis) is a common fungal infection that affects
        the skin on the feet, especially between the toes. Despite its name, you
        don't have to be an athlete to get this infection.
      </p>
      <h2 className="text-xl font-semibold mb-4">
        What causes Athlete's Foot?
      </h2>
      <p className="mb-3">Athlete's foot is caused by:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>
          Fungal organisms (dermatophytes) that thrive in warm, moist
          environments
        </li>
        <li>
          Walking barefoot in public areas like swimming pools, locker rooms,
          and showers
        </li>
        <li>Sharing towels, socks, or shoes with an infected person</li>
        <li>Wearing tight, closed-toe shoes that cause feet to sweat</li>
        <li>Keeping feet wet for extended periods</li>
        <li>Having a weakened immune system</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        Keep your feet clean and dry, especially between the toes. Change socks
        daily and wear breathable footwear. Use antifungal powders or sprays in
        your shoes. Over-the-counter antifungal creams, ointments, or sprays can
        effectively treat most cases of athlete's foot when used as directed.
      </p>
      <p className="mb-6">
        Avoid walking barefoot in public places. Don't share personal items like
        towels, socks, or shoes. If possible, alternate between different pairs
        of shoes to allow them to dry completely between uses.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can confirm the diagnosis and recommend appropriate
        treatment options. For persistent or severe infections, we may prescribe
        stronger antifungal medications or treatments. We can also provide
        advice on proper foot hygiene and preventive measures to avoid
        recurrence, as well as address any underlying conditions that might make
        you more susceptible to fungal infections.
      </p>
    </>;
  return <FootComplaintDetail title="Athlete's Foot" content={content} image="/complaints/athletefoot.webp" />;
};