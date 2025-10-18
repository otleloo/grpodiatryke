import React from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const BiomechanicalAssessmentsPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">
        What is a Biomechanical Assessment?
      </h2>
      <p className="mb-6">
        A biomechanical assessment is a detailed examination of how your body
        moves, with particular focus on the feet, legs, and lower back. This
        specialized evaluation helps identify structural or functional
        abnormalities that may be causing pain or affecting your mobility.
      </p>
      <h2 className="text-xl font-semibold mb-4">
        When is a Biomechanical Assessment Needed?
      </h2>
      <p className="mb-3">
        A biomechanical assessment is typically recommended for patients
        experiencing:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Recurring foot, ankle, knee, hip, or lower back pain</li>
        <li>Sports injuries or recurring injuries</li>
        <li>Abnormal walking patterns or gait</li>
        <li>Foot deformities (bunions, hammertoes, etc.)</li>
        <li>Balance issues or frequent falls</li>
        <li>Flat feet or high arches</li>
        <li>Pain during specific activities</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">
        What to Expect During the Assessment
      </h2>
      <p className="mb-6">
        During a biomechanical assessment, our podiatrist will:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Take a detailed history of your symptoms and activities</li>
        <li>Examine your feet while sitting and standing</li>
        <li>Assess the range of motion in your joints</li>
        <li>Analyze your walking and/or running gait</li>
        <li>Evaluate muscle strength and flexibility</li>
        <li>Measure leg length and alignment</li>
        <li>Assess footwear for wear patterns</li>
        <li>Use pressure mapping technology (if necessary)</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">Treatment Options</h2>
      <p className="mb-4">
        Based on the findings of your biomechanical assessment, our podiatrist
        will develop a personalized treatment plan. This may include custom
        orthotics to correct alignment issues, specific exercises to strengthen
        weak muscles, footwear recommendations, gait retraining, or other
        interventions tailored to your specific needs. The goal is to address
        the root cause of your symptoms and improve your overall function and
        comfort.
      </p>
    </>;
  return <FootComplaintDetail title="Biomechanical Assessments" content={content} image="https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" />;
};