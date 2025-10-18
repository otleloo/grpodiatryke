import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const FenestrationPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">
        What is Fenestration/Lacuna Treatment?
      </h2>
      <p className="mb-6">
        Fenestration, also known as the Lacuna method, is an innovative
        technique for treating fungal nail infections. This minimally invasive
        procedure creates micro-perforations in the infected nail, allowing
        antifungal medication to penetrate directly to the nail bed where the
        infection resides.
      </p>
      <h2 className="text-xl font-semibold mb-4">How Does It Work?</h2>
      <p className="mb-6">
        The procedure works through several key mechanisms:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Micro-holes are carefully drilled into the affected nail</li>
        <li>
          The number of perforations depends on the severity and extent of the
          infection
        </li>
        <li>
          These openings create direct pathways for medication to reach the nail
          bed
        </li>
        <li>
          Antifungal solution (Terbinafine 0.1% spray) is applied to penetrate
          these channels
        </li>
        <li>
          The treatment bypasses the nail's natural barrier that typically
          prevents topical medications from being effective
        </li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">Treatment Protocol</h2>
      <p className="mb-3">Following your in-clinic fenestration procedure:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>You'll receive antifungal spray to apply at home</li>
        <li>Daily application is required until the infection resolves</li>
        <li>Follow-up appointments are scheduled every 6-8 weeks</li>
        <li>Additional micro-perforations may be created if necessary</li>
        <li>Treatment continues until healthy nail growth is established</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">
        Advantages Over Traditional Treatments
      </h2>
      <p className="mb-6">
        Compared to conventional fungal nail treatments, fenestration offers
        several benefits:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>
          Higher success rates due to direct medication delivery to the
          infection site
        </li>
        <li>Non-invasive compared to nail removal procedures</li>
        <li>Minimal discomfort during and after treatment</li>
        <li>No downtime following the procedure</li>
        <li>Compatible with various antifungal medications</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">Is It Right For You?</h2>
      <p className="mb-4">
        Fenestration is particularly effective for moderate to severe fungal
        nail infections that haven't responded to topical treatments alone.
        During your consultation, our podiatrist will assess your condition and
        determine if this approach is suitable for your specific case.
      </p>
    </>;
  return <FootComplaintDetail title="Fenestration / Lacuna Treatment" content={content} image="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />;
};