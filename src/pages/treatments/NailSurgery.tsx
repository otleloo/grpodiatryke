import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const NailSurgeryPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">What is Nail Surgery?</h2>
      <p className="mb-6">
        Nail surgery is a minor surgical procedure performed to permanently or
        partially remove a problematic toenail. It is most commonly performed to
        treat ingrown toenails that cause recurring pain, infection, or
        discomfort that hasn't responded to conservative treatments.
      </p>
      <h2 className="text-xl font-semibold mb-4">
        When is Nail Surgery Recommended?
      </h2>
      <p className="mb-3">Nail surgery may be recommended for:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Recurring ingrown toenails that cause pain and infection</li>
        <li>Severely deformed or thickened nails that cause discomfort</li>
        <li>
          Fungal nail infections that haven't responded to other treatments
        </li>
        <li>Trauma-damaged nails that are causing ongoing problems</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">The Procedure</h2>
      <p className="mb-6">
        Nail surgery is performed under local anesthetic, meaning the toe is
        numbed but you remain awake. The procedure typically involves:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Cleaning and preparing the toe</li>
        <li>Administering local anesthetic</li>
        <li>Applying a tourniquet to minimize bleeding</li>
        <li>Removing part or all of the problematic nail</li>
        <li>
          Applying a chemical to prevent regrowth (if permanent removal is
          desired)
        </li>
        <li>Cleaning and dressing the wound</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">Recovery and Aftercare</h2>
      <p className="mb-6">
        Recovery from nail surgery is typically straightforward. You'll be able
        to walk immediately after the procedure, though you should rest for the
        remainder of the day. Our podiatrist will provide detailed aftercare
        instructions, which may include:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Keeping the dressing dry and intact for 1-2 days</li>
        <li>Elevating the foot when possible to reduce swelling</li>
        <li>Taking prescribed pain medication if needed</li>
        <li>Soaking the toe in salt water as directed</li>
        <li>Applying antibiotic ointment</li>
        <li>Wearing open-toed shoes or sandals until healed</li>
        <li>Attending follow-up appointments</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">Results and Success Rate</h2>
      <p className="mb-4">
        Nail surgery has a high success rate, with most patients experiencing
        permanent relief from their symptoms. The treated nail typically heals
        within 2-6 weeks, depending on the extent of the procedure and
        individual healing factors. In cases where a portion of the nail has
        been permanently removed, the remaining nail will grow normally but will
        be narrower than before.
      </p>
    </>;
  return <FootComplaintDetail title="Nail Surgery" content={content} image="/treatment/nailsurgery.webp" />;
};