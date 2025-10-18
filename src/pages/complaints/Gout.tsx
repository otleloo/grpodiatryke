import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const GoutPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">What is Gout?</h2>
      <p className="mb-6">
        Gout is a form of inflammatory arthritis that causes sudden, severe
        attacks of pain, swelling, redness, and tenderness in joints, most
        commonly at the base of the big toe. It occurs when urate crystals
        accumulate in joints, causing the inflammation and intense pain of a
        gout attack.
      </p>
      <h2 className="text-xl font-semibold mb-4">What causes Gout?</h2>
      <p className="mb-3">Gout is caused by:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>High levels of uric acid in the blood (hyperuricemia)</li>
        <li>Genetic factors that affect uric acid metabolism</li>
        <li>Diet high in purines (found in red meat, seafood, and alcohol)</li>
        <li>Obesity</li>
        <li>
          Certain medical conditions like high blood pressure and diabetes
        </li>
        <li>Medications like diuretics and low-dose aspirin</li>
        <li>Recent surgery or trauma</li>
        <li>Dehydration</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        During a gout attack, rest the affected joint and apply ice to reduce
        pain and inflammation. Take over-the-counter anti-inflammatory
        medications like ibuprofen or naproxen if recommended by your doctor.
        Stay well-hydrated by drinking plenty of water.
      </p>
      <p className="mb-6">
        To prevent future attacks, maintain a healthy weight and follow a diet
        low in purines. Limit consumption of red meat, seafood, and alcohol,
        especially beer. Increase intake of low-fat dairy products, which may
        have a protective effect. Avoid foods and drinks sweetened with
        high-fructose corn syrup.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can diagnose gout and help manage its effects on your
        feet. We can prescribe medications to treat acute attacks and prevent
        future episodes. These may include anti-inflammatory drugs,
        corticosteroids, or medications that block uric acid production or
        improve uric acid removal. We can also provide custom orthotics to
        support affected joints and reduce pain during walking. Additionally, we
        offer guidance on lifestyle changes and dietary modifications to help
        manage gout long-term.
      </p>
    </>;
  return <FootComplaintDetail title="Gout" content={content} image="/complaints/gout.webp" />;
};