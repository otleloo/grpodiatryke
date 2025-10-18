import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const CornsAndCallusesPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">
        What are Corns and Calluses?
      </h2>
      <p className="mb-6">
        Corns and calluses are thickened areas of skin caused by repeated
        pressure or friction. Calluses are usually larger, flatter areas of
        thick skin, while corns are smaller, concentrated areas that often have
        a hard center surrounded by inflamed skin.
      </p>
      <h2 className="text-xl font-semibold mb-4">
        What causes Corns and Calluses?
      </h2>
      <p className="mb-3">Corns and calluses are caused by:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Ill-fitting shoes that are too tight or too loose</li>
        <li>High-heeled shoes that put pressure on the forefoot</li>
        <li>Walking barefoot regularly</li>
        <li>Foot deformities like hammertoes or bunions</li>
        <li>Abnormal gait or walking pattern</li>
        <li>Activities that put repeated pressure on the foot</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        Wear properly fitting shoes with adequate room for your toes. Use
        padding such as felt pads or moleskin around corns and calluses to
        relieve pressure. Soak your feet in warm water to soften corns and
        calluses, then use a pumice stone to gently remove the thickened skin.
      </p>
      <p className="mb-6">
        Apply moisturizing cream to keep the skin soft. Avoid trying to cut or
        shave corns and calluses yourself, especially if you have diabetes or
        poor circulation, as this can lead to infections.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists can safely and painlessly remove corns and calluses
        using specialized tools. We can also identify and address the underlying
        causes, such as foot structure or gait issues. Custom orthotics may be
        recommended to redistribute pressure on your feet, and we can advise on
        appropriate footwear to prevent recurrence.
      </p>
    </>;
  return <FootComplaintDetail title="Corns & Calluses" content={content} image="/complaints/cornsandcalluses.webp" />;
};