import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const SweatyFeetPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">What are Sweaty Feet?</h2>
      <p className="mb-6">
        Sweaty feet, medically known as plantar hyperhidrosis, is a condition
        characterized by excessive sweating of the feet. While sweating is a
        natural bodily function to regulate temperature, people with
        hyperhidrosis produce much more sweat than needed for normal cooling.
      </p>
      <h2 className="text-xl font-semibold mb-4">What causes Sweaty Feet?</h2>
      <p className="mb-3">Sweaty feet can be caused by:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Overactive sweat glands</li>
        <li>Genetic predisposition</li>
        <li>Hormonal changes (puberty, pregnancy, menopause)</li>
        <li>Stress and anxiety</li>
        <li>Certain medications</li>
        <li>
          Medical conditions like diabetes, hyperthyroidism, or infections
        </li>
        <li>
          Wearing occlusive footwear (shoes that don't allow air circulation)
        </li>
        <li>Hot weather or physical activity</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        Wash your feet daily with antibacterial soap and dry them thoroughly,
        especially between the toes. Apply antiperspirant specifically designed
        for feet. Change your socks at least once a day, more if they become
        damp. Wear moisture-wicking socks made of natural or technical fibers
        that draw sweat away from the skin.
      </p>
      <p className="mb-6">
        Alternate between different pairs of shoes to allow them to dry
        completely between wears. Choose shoes made of breathable materials like
        leather or canvas. Use foot powders or cornstarch to help absorb
        moisture. Consider using shoe inserts that absorb sweat or replace them
        frequently.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can assess the severity of your condition and recommend
        appropriate treatments. These may include prescription-strength
        antiperspirants, iontophoresis (a treatment that uses a mild electrical
        current to reduce sweating), or botulinum toxin injections to
        temporarily block the nerves that trigger sweating. We can also help
        manage any complications of excessive foot sweating, such as athlete's
        foot or foot odor, and provide advice on proper footwear and hygiene
        practices to keep your feet dry and comfortable.
      </p>
    </>;
  return <FootComplaintDetail title="Sweaty Feet" content={content} image="/complaints/sweatyfeet.webp" />;
};