import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const VerrucaePage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">What are Verrucae (Warts)?</h2>
      <p className="mb-6">
        Verrucae (singular: verruca), also known as plantar warts, are small
        growths that occur on the soles of the feet or around the toe area. They
        are caused by the human papillomavirus (HPV) and can be painful,
        especially when weight is placed on them during standing or walking.
      </p>
      <h2 className="text-xl font-semibold mb-4">What causes Verrucae?</h2>
      <p className="mb-3">Verrucae are caused by:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>
          Infection with certain strains of the human papillomavirus (HPV)
        </li>
        <li>
          Walking barefoot in public areas like swimming pools, changing rooms,
          and communal showers
        </li>
        <li>Direct contact with someone else's verruca</li>
        <li>
          Small breaks or weak spots in the skin that allow the virus to enter
        </li>
        <li>A weakened immune system</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        Keep your feet clean and dry. Avoid walking barefoot in public places.
        Do not touch or scratch your verrucae, as this can spread the virus to
        other parts of your body or to other people. Cover verrucae with
        waterproof plasters when swimming.
      </p>
      <p className="mb-6">
        Over-the-counter treatments containing salicylic acid can be effective
        for some verrucae. These work by gradually removing the layers of the
        wart. Always follow the product instructions carefully. Change your
        socks daily and avoid sharing towels, socks, or shoes with others.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can offer several treatment options for verrucae,
        including stronger prescription-strength medications, cryotherapy
        (freezing the wart with liquid nitrogen), electrosurgery, laser
        treatment, or chemical treatments. For persistent or widespread
        verrucae, we may recommend more advanced therapies. We can also provide
        advice on preventing reinfection and assess whether there are any
        underlying factors making you more susceptible to developing verrucae.
      </p>
    </>;
  return <FootComplaintDetail title="Verrucae (Warts)" content={content} image="/complaints/wartverrucae.webp" />;
};