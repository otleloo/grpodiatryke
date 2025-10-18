import React from 'react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Footprints, Activity, Heart, Scissors, Microscope, Baby, Bandage, ArrowRight, Zap } from 'lucide-react';
export const ServicesPage = () => {
  const services = [{
    id: 1,
    title: 'General Podiatry',
    icon: <Footprints className="text-sky-600 w-8 h-8" />,
    description: 'Comprehensive care for common foot problems including ingrown toenails, calluses, corns, and fungal infections. Our general podiatry services help maintain your overall foot health and address issues before they become more serious.',
    treatments: ['Ingrown Toenail Treatment', 'Callus and Corn Removal', 'Fungal Nail Treatment', 'Wart Treatment', 'Routine Foot Care']
  }, {
    id: 2,
    title: 'Sports Podiatry',
    icon: <Activity className="text-sky-600 w-8 h-8" />,
    description: 'Specialized care for athletes and active individuals, focusing on injury treatment, prevention, and performance optimization. We understand the unique demands placed on your feet during athletic activities.',
    treatments: ['Sports Injury Assessment', 'Biomechanical Analysis', 'Athletic Footwear Advice', 'Custom Sports Orthotics', 'Injury Prevention Strategies']
  }, {
    id: 3,
    title: 'Diabetic Foot Care',
    icon: <Heart className="text-sky-600 w-8 h-8" />,
    description: 'Specialized treatment and preventive care for patients with diabetes. Regular foot examinations and proper care are essential for preventing serious complications in patients with diabetes.',
    treatments: ['Comprehensive Foot Assessments', 'Neuropathy Screening', 'Ulcer Prevention and Treatment', 'Diabetic Footwear Recommendations', 'Patient Education']
  }, {
    id: 4,
    title: 'Surgical Procedures',
    icon: <Scissors className="text-sky-600 w-8 h-8" />,
    description: "When conservative treatments aren't enough, our podiatrists are skilled in various surgical procedures to correct foot and ankle problems. We utilize minimally invasive techniques whenever possible.",
    treatments: ['Bunion Correction', 'Hammertoe Surgery', 'Nail Surgery', 'Neuroma Excision', 'Tendon Repair']
  }, {
    id: 5,
    title: 'Biomechanical Assessment',
    icon: <Microscope className="text-sky-600 w-8 h-8" />,
    description: 'Comprehensive evaluation of your foot and lower limb function during walking and running. Understanding your biomechanics helps identify the root causes of pain and dysfunction.',
    treatments: ['Gait Analysis', 'Pressure Mapping', 'Joint Mobility Assessment', 'Muscle Strength Testing', 'Postural Evaluation']
  }, {
    id: 6,
    title: 'Pediatric Podiatry',
    icon: <Baby className="text-sky-600 w-8 h-8" />,
    description: 'Specialized foot care for children and adolescents. Early intervention is key for many childhood foot conditions, ensuring proper development and preventing future problems.',
    treatments: ['Flat Feet Assessment', 'Toe Walking Evaluation', 'In-toeing & Out-toeing Treatment', 'Growing Pains Management', 'Developmental Assessment']
  }, {
    id: 7,
    title: 'Orthotic Therapy',
    icon: <div className="text-sky-600 w-8 h-8" />,
    description: 'Custom-made devices designed to support and align your feet, improving function and reducing pain. Our orthotics are precisely crafted to address your specific needs and foot structure.',
    treatments: ['Custom Foot Orthotics', 'Prefabricated Orthotic Fitting', 'Orthotic Adjustments', 'Footwear Assessment', 'Follow-up Evaluations']
  }, {
    id: 8,
    title: 'Wound Care',
    icon: <Bandage className="text-sky-600 w-8 h-8" />,
    description: 'Specialized treatment for foot and ankle wounds, particularly for patients with compromised healing due to diabetes or vascular conditions. Proper wound care is essential for preventing infections and complications.',
    treatments: ['Wound Assessment', 'Debridement', 'Advanced Dressings', 'Infection Management', 'Preventive Strategies']
  }, {
    id: 9,
    title: 'Therapeutic Laser Treatment',
    icon: <Zap className="text-sky-600 w-8 h-8" />,
    description: 'Non-invasive and drug-free treatment using a MLS Mphi 75 medical laser. This advanced therapy is highly effective for inflammation and pain conditions, taking just a few minutes per session.',
    treatments: ['Inflammation Reduction', 'Pain Management', 'Tissue Healing Acceleration', 'Photobiomodulation Therapy', 'Chronic Condition Management']
  }];
  return <div>
      {/* Hero Section */}
      <section className="bg-sky-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive podiatry care for all your foot and ankle needs
          </p>
        </div>
      </section>
      {/* Services Introduction */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Foot & Ankle Care
          </h2>
          <p className="text-lg text-gray-600">
            At Healthy Steps Podiatry, we offer a wide range of services to
            address all aspects of foot and ankle health. Our experienced
            podiatrists use the latest techniques and technologies to provide
            effective treatment and preventive care for patients of all ages.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => <Card key={service.id} className="p-6 flex flex-col h-full">
              <div className="bg-sky-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                {service.description}
              </p>
              <div className="mt-4">
                <h4 className="font-medium text-gray-900 mb-2">
                  Treatments Include:
                </h4>
                <ul className="space-y-1">
                  {service.treatments.map((treatment, index) => <li key={index} className="text-gray-600 flex items-start">
                      <span className="text-sky-600 mr-2">•</span> {treatment}
                    </li>)}
                </ul>
              </div>
            </Card>)}
        </div>
      </Section>
      {/* Treatment Process */}
      <Section background="accent">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Treatment Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="bg-sky-600 text-white w-8 h-8 rounded-full flex items-center justify-center absolute -left-4 top-6 font-bold">
                1
              </div>
              <div className="pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Initial Consultation
                </h3>
                <p className="text-gray-600">
                  Your first visit includes a comprehensive assessment of your
                  foot health, medical history, and current concerns. We take
                  the time to understand your specific needs and goals.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="bg-sky-600 text-white w-8 h-8 rounded-full flex items-center justify-center absolute -left-4 top-6 font-bold">
                2
              </div>
              <div className="pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Diagnosis & Assessment
                </h3>
                <p className="text-gray-600">
                  Our podiatrists conduct a thorough examination, which may
                  include gait analysis, biomechanical assessment, and
                  diagnostic imaging if necessary to determine the root cause of
                  your condition.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="bg-sky-600 text-white w-8 h-8 rounded-full flex items-center justify-center absolute -left-4 top-6 font-bold">
                3
              </div>
              <div className="pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Personalized Treatment Plan
                </h3>
                <p className="text-gray-600">
                  We develop a customized treatment approach based on your
                  diagnosis, lifestyle, and preferences. Your plan may include a
                  combination of therapies, exercises, and interventions.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="bg-sky-600 text-white w-8 h-8 rounded-full flex items-center justify-center absolute -left-4 top-6 font-bold">
                4
              </div>
              <div className="pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Treatment Implementation
                </h3>
                <p className="text-gray-600">
                  We provide the necessary treatments, which may include
                  procedures, prescriptions, orthotics, or other interventions
                  to address your condition effectively.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="bg-sky-600 text-white w-8 h-8 rounded-full flex items-center justify-center absolute -left-4 top-6 font-bold">
                5
              </div>
              <div className="pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Follow-up & Prevention
                </h3>
                <p className="text-gray-600">
                  We monitor your progress through follow-up appointments and
                  make adjustments as needed. We also provide education and
                  preventive strategies to maintain your foot health long-term.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Insurance & Payment */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Insurance & Payment
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We accept most major insurance plans and are committed to making
              quality podiatric care accessible to our patients. Our
              administrative team will work with you to verify your coverage and
              explain any out-of-pocket expenses.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Accepted Insurance Plans
            </h3>
            <ul className="grid grid-cols-2 gap-2 mb-6">
              <li className="text-gray-600">• Blue Cross Blue Shield</li>
              <li className="text-gray-600">• Aetna</li>
              <li className="text-gray-600">• Cigna</li>
              <li className="text-gray-600">• United Healthcare</li>
              <li className="text-gray-600">• Medicare</li>
              <li className="text-gray-600">• Medicaid</li>
              <li className="text-gray-600">• Humana</li>
              <li className="text-gray-600">• And many more...</li>
            </ul>
            <p className="text-gray-600">
              If you don't see your insurance listed or have questions about
              coverage, please contact our office for assistance.
            </p>
          </div>
          <div className="bg-sky-50 p-8 rounded-lg border border-sky-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              New Patient Information
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We look forward to welcoming you to our practice. To make your
              first visit as smooth as possible, please:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-sky-600 mr-2 font-bold">1.</span>
                <span className="text-gray-600">
                  Complete our new patient forms (available online or in-office)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2 font-bold">2.</span>
                <span className="text-gray-600">
                  Bring your insurance card and a valid photo ID
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2 font-bold">3.</span>
                <span className="text-gray-600">
                  Bring a list of your current medications
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2 font-bold">4.</span>
                <span className="text-gray-600">
                  Wear or bring the shoes you commonly use
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-sky-600 mr-2 font-bold">5.</span>
                <span className="text-gray-600">
                  Arrive 15 minutes before your scheduled appointment time
                </span>
              </li>
            </ul>
            <Link to="/book-appointment">
              <Button className="w-full">
                Schedule Your First Visit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* CTA Section */}
      <Section background="accent" className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule an appointment today and start your journey to healthier
            feet.
          </p>
          <Link to="/book-appointment">
            <Button size="lg">Book Your Appointment</Button>
          </Link>
        </div>
      </Section>
    </div>;
};