import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const ReviewPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">
        What is a Dressing/Review Appointment?
      </h2>
      <p className="mb-6">
        A review appointment is a shorter follow-up session recommended by your
        podiatrist to monitor the progress of ongoing treatments or to change
        dressings. These appointments ensure your foot condition is healing
        properly and allow for timely adjustments to your treatment plan.
      </p>
      <h2 className="text-xl font-semibold mb-4">
        When Are Review Appointments Needed?
      </h2>
      <p className="mb-3">Review appointments are typically recommended for:</p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Changing wound dressings</li>
        <li>Monitoring healing progress after procedures</li>
        <li>Assessing the effectiveness of prescribed treatments</li>
        <li>Following up on infections or inflammations</li>
        <li>Adjusting treatment plans as needed</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What to Expect</h2>
      <p className="mb-6">
        During your 15-minute review appointment, our podiatrist will:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Examine the affected area</li>
        <li>Change dressings if necessary</li>
        <li>Assess your healing progress</li>
        <li>Address any concerns that have arisen since your last visit</li>
        <li>Make any necessary adjustments to your treatment plan</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">
        Importance of Follow-Up Care
      </h2>
      <p className="mb-4">
        Attending scheduled review appointments is crucial for ensuring optimal
        healing and preventing complications. These brief but important sessions
        allow your podiatrist to catch any issues early and make timely
        interventions, ultimately leading to better outcomes and faster recovery
        times.
      </p>
    </>;
  return <FootComplaintDetail title="Dressing & Review Appointments" content={content} image="https://images.unsplash.com/photo-1584362917165-526a968579e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />;
};