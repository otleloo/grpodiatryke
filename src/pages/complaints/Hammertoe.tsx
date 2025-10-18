import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const HammertoePage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">What is Hammertoe?</h2>
      <p className="mb-6">
        Hammertoe is a foot deformity that causes one or more of the small toes
        to bend abnormally at the middle joint, creating a hammer-like
        appearance. The condition usually affects the second, third, or fourth
        toes and can be painful, especially when wearing shoes.
      </p>
      <h2 className="text-xl font-semibold mb-4">What causes Hammertoe?</h2>
      <p className="mb-3">Hammertoe can be caused by:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>
          Muscle/tendon imbalance due to structural or neurological changes
        </li>
        <li>Wearing shoes that are too tight, narrow, or short</li>
        <li>High-heeled shoes that force toes into a bent position</li>
        <li>Bunions, which can push the big toe against the second toe</li>
        <li>Traumatic toe injuries</li>
        <li>Genetic predisposition</li>
        <li>Arthritis</li>
        <li>Aging, which can lead to muscle weakness</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        Wear shoes with a wide, deep toe box to accommodate the hammertoe and
        avoid pressure on the affected area. Use cushioned pads, corn pads, or
        custom toe separators to relieve pressure and pain. Perform toe
        exercises, such as picking up marbles with your toes or stretching your
        toes manually, to strengthen toe muscles and maintain flexibility.
      </p>
      <p className="mb-6">
        Over-the-counter pain relievers can help manage discomfort. Ice packs
        applied to the area for 10-15 minutes can reduce inflammation and pain.
        Avoid high heels and shoes with pointed toes, opting instead for
        comfortable, supportive footwear with adequate toe room.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can assess the severity of your hammertoe and recommend
        appropriate treatment options. For flexible hammertoes (those that can
        still be straightened manually), we may suggest custom orthotics,
        splints, or strapping techniques to realign the toe. We can also provide
        padding to protect against corns and calluses that often develop on
        hammertoes. For rigid hammertoes or severe cases that don't respond to
        conservative treatments, we may discuss surgical options to correct the
        deformity and alleviate pain.
      </p>
    </>;
  return <FootComplaintDetail title="Hammertoe" content={content} image="/complaints/hammertoe.webp" />;
};