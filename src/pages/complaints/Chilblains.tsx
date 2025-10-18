import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const ChilblainsPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">What are Chilblains?</h2>
      <p className="mb-6">
        Chilblains (also known as pernio) are small, itchy, painful swellings on
        the skin that occur as an abnormal reaction to cold temperatures. They
        typically affect the extremities such as toes, fingers, ears, and nose.
      </p>
      <h2 className="text-xl font-semibold mb-4">What causes Chilblains?</h2>
      <p className="mb-3">Chilblains are caused by:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Poor circulation</li>
        <li>Exposure to cold, non-freezing temperatures</li>
        <li>Rapid warming of cold skin</li>
        <li>Damp or humid conditions</li>
        <li>Genetic predisposition</li>
        <li>Underlying conditions like Raynaud's phenomenon</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        Keep your feet warm at all times, especially during cold weather. Wear
        warm, waterproof footwear and thermal socks. Avoid direct heat on
        affected areas when warming cold feet – warm them gradually instead.
        Keep your whole body warm, as this helps with circulation.
      </p>
      <p className="mb-6">
        Apply calamine lotion to soothe the affected area. Over-the-counter
        hydrocortisone cream can help reduce itching and inflammation. Avoid
        scratching the affected areas to prevent infection.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can assess your chilblains and recommend appropriate
        treatment options. We can prescribe stronger medications if necessary
        and advise on preventive measures. For severe or recurring cases, we may
        recommend further investigation to identify any underlying conditions
        and develop a comprehensive management plan.
      </p>
    </>;
  return <FootComplaintDetail title="Chilblains" content={content} image="/complaints/chilblains.webp" />;
};