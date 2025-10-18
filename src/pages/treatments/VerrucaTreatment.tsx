import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const VerrucaTreatmentPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">
        Verruca Treatment with Verrutop
      </h2>
      <p className="mb-6">
        Our clinic specializes in treating verrucas (plantar warts) using
        Verrutop, an advanced and highly effective solution. Unlike traditional
        methods that freeze or burn the affected tissue, Verrutop works through
        a different mechanism to provide more comfortable treatment with
        excellent results.
      </p>
      <h2 className="text-xl font-semibold mb-4">How Verrutop Works</h2>
      <p className="mb-6">
        Verrutop utilizes a specialized formulation called Nitrizinc Complex,
        which contains nitric acid, organic acids, zinc, and copper salts. This
        innovative treatment:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Denatures the viral proteins that cause verrucas</li>
        <li>Desiccates (dries out) the wart tissue</li>
        <li>Preserves healthy surrounding skin</li>
        <li>Causes the verruca to gradually detach from the skin</li>
        <li>Leaves intact, healthy skin underneath once healed</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">The Treatment Process</h2>
      <p className="mb-3">When you receive Verrutop treatment:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>The solution is carefully applied to the verruca</li>
        <li>
          A chemical reaction occurs, causing the tissue to change color
          (white/grey/yellowish)
        </li>
        <li>This indicates the mummification process has begun</li>
        <li>Over time, the treated tissue will naturally detach</li>
        <li>Most cases require an average of 3 treatment sessions</li>
        <li>Each session takes approximately 15 minutes</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">Treatment Effectiveness</h2>
      <p className="mb-6">
        Clinical data shows that Verrutop treatment is highly effective:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>
          90% effectiveness on plantar verrucas with an average of 3 sessions
        </li>
        <li>Maximum of 6 sessions typically needed for stubborn cases</li>
        <li>
          Some patients experience complete resolution after a single session
        </li>
        <li>Minimal discomfort compared to freezing or burning techniques</li>
        <li>Lower recurrence rates than many traditional treatments</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">Aftercare</h2>
      <p className="mb-4">
        Following treatment, we'll provide specific aftercare instructions to
        ensure optimal results. Most patients can resume normal activities
        immediately after treatment, with minimal restrictions. Your podiatrist
        will schedule any necessary follow-up appointments to monitor your
        progress and provide additional treatments if required.
      </p>
    </>;
  return <FootComplaintDetail title="Verruca Treatment" content={content} image="/treatment/verruca.webp" />;
};