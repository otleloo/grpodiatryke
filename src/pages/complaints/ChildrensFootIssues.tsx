import React, { Children } from 'react';
import { FootComplaintDetail } from '../../components/complaints/FootComplaintDetail';
export const ChildrensFootIssuesPage = () => {
  const content = <>
      <h2 className="text-xl font-semibold mb-4">
        What are Children's Foot Issues?
      </h2>
      <p className="mb-6">
        Children's feet are still developing, and they can experience a range of
        foot problems that may affect their growth, mobility, and comfort. Many
        pediatric foot issues resolve naturally as the child grows, but some may
        require intervention to prevent long-term problems.
      </p>
      <h2 className="text-xl font-semibold mb-4">
        Common Children's Foot Issues
      </h2>
      <p className="mb-3">
        Children can experience various foot issues including:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>Flat feet (pediatric flatfoot)</li>
        <li>In-toeing (pigeon toes) or out-toeing</li>
        <li>Toe walking</li>
        <li>Growing pains</li>
        <li>Sever's disease (heel pain in growing children)</li>
        <li>Warts</li>
        <li>Ingrown toenails</li>
        <li>Clubfoot</li>
        <li>Pediatric bunions</li>
      </ul>
      <h2 className="text-xl font-semibold mb-4">What can you do?</h2>
      <p className="mb-6">
        Ensure your child wears properly fitted shoes that allow room for growth
        but still provide good support. Regularly check your child's feet for
        any abnormalities or signs of pain. Encourage barefoot play in safe
        environments to help with natural foot development and strength.
      </p>
      <p className="mb-6">
        Monitor your child's walking patterns and report any concerns to a
        healthcare professional. Be aware that children may not always complain
        about foot pain, so look for signs like avoiding physical activities
        they usually enjoy.
      </p>
      <h2 className="text-xl font-semibold mb-4">What can we do?</h2>
      <p className="mb-4">
        Our podiatrists specialize in pediatric foot care and can assess your
        child's foot development. We can identify whether issues are part of
        normal development or require intervention. Treatment options may
        include stretching exercises, custom orthotics, physical therapy, or in
        rare cases, referral for surgical intervention. Early assessment is key
        to ensuring proper foot development and preventing long-term problems.
      </p>
    </>;
  return <FootComplaintDetail title="Children's Foot Issues" content={content} image="/complaints/childrenfootissue.webp" />;
};