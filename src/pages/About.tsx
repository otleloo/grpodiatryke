import React from 'react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Award, Heart, Shield, Users } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-sky-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Clinic
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Dedicated to providing exceptional podiatric care with a patient-centered approach
          </p>
        </div>
      </section>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
              Game Rock Podiatry
            </h2>
            <div className="prose max-w-none text-lg text-gray-600 space-y-6">
              <p>
                Game Rock Podiatry was founded and is operated by Alice – BSc (Hons) Podiatry, HCPC Registered Podiatrist and Prescriber.
              </p>
              <p>
                Alice has a long-standing passion for foot and lower limb health, with a deep understanding of how these conditions can significantly impact an individual’s overall quality of life.
              </p>
              <p>
                She completed her BSc (Hons) in Podiatry at the University of Salford and graduated in 2020. Following her studies, Alice gained valuable experience working within the NHS in North West England as well as in private practice, where she honed her expertise across a wide range of podiatric treatments.
              </p>
              <p>
                Driven by her commitment to improving access to specialist foot care, Alice returned to Kenya and established Game Rock Podiatry, a clinic dedicated to providing expert podiatric services with a strong focus on diabetic foot care and prevention.
              </p>
              <p>
                Alice is registered with the Health and Care Professions Council (HCPC), UK, as a Podiatrist and qualified prescriber of prescription medication. She is also registered with the Kenya Health Professions Oversight Authority and is an active member of The Royal College of Podiatrists (UK).
              </p>
              <p>
                Alice continues to engage in professional development and advanced training to ensure that her patients receive evidence-based, modern podiatric care of the highest standard.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src="/Alice.webp" alt="Alice [Surname]" className="w-full h-auto" />
          </div>
        </div>
      </Section>

      {/* Mission & Values */}
      <Section background="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Our Mission & Values
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            At GR Podiatry, we are guided by a set of core principles that inform everything we do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-sky-50 p-8 rounded-lg border border-sky-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 mb-4">
                To improve our patients' quality of life through exceptional podiatric care, empowering them to maintain healthy, pain-free feet for a lifetime of mobility and independence.
              </p>
              <p className="text-gray-700">
                We strive to be the trusted partner in foot health for our community, combining clinical excellence with compassionate care to address each patient's unique needs.
              </p>
            </div>
            <div className="bg-emerald-50 p-8 rounded-lg border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be recognized as the premier podiatry clinic in Thika and beyond, known for our innovative approaches, patient satisfaction, and positive outcomes. We aim to continuously advance our practice through education, technology, and a commitment to excellence in every aspect of patient care.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Core Values
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="bg-sky-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-sky-600 w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Compassion
                </h4>
                <p className="text-gray-600">
                  We approach each patient with empathy and understanding, recognizing their unique concerns.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="bg-emerald-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-emerald-600 w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Excellence
                </h4>
                <p className="text-gray-600">
                  We are committed to the highest standards of clinical practice and patient service.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="bg-sky-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-sky-600 w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Integrity
                </h4>
                <p className="text-gray-600">
                  We operate with honesty, transparency, and ethical conduct in all our interactions.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <div className="bg-emerald-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-emerald-600 w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Collaboration
                </h4>
                <p className="text-gray-600">
                  We work together with patients and healthcare partners to achieve the best outcomes.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Section>


    </div>
  );
};
