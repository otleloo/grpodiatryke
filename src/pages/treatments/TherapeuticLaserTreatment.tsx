import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const TherapeuticLaserTreatmentPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">
        What is Therapeutic Laser Treatment?
      </h2>
      <p className="mb-6">
        GR Podiatry offers therapeutic laser treatment, using a MLS Mphi 75
        medical laser. This is a non-invasive and drug free treatment which
        takes a few minutes per session and is highly effective for inflammation
        and pain conditions.
      </p>
      <h2 className="text-xl font-semibold mb-4">How it Works</h2>
      <p className="mb-6">
        It works by the use of focused light to trigger a process called
        photobiomodulation. This process changes the condition of damaged tissue
        and increases recovery through cellular metabolism. Although a reduction
        of pain is often immediate, treatment needs to be carried out over a
        number of sessions for lasting relief.
      </p>
      <h2 className="text-xl font-semibold mb-4">Book Your Treatment</h2>
      <p className="mb-4">
        Please contact us for further details to make a booking.
      </p>
    </>;
  return <FootComplaintDetail title="Therapeutic Laser Treatment" content={content} image="/treatment/therapeauticlasertreatment.webp" />;
};