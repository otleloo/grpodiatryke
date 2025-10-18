import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Heart, Activity, Stethoscope, Clipboard, Users, Award, ArrowRight, MapPin, Calendar, Star, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard, Product } from '../components/products/ProductCard';
export const HomePage = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const featuredProducts: Product[] = [{
    id: '1',
    name: 'Orthotic Insoles',
    description: 'Custom orthotic insoles for everyday comfort and support. Ideal for flat feet and plantar fasciitis.',
    price: 3500,
    image: "/logo.webp",
    category: 'Orthotics'
  }, {
    id: '2',
    name: 'Foot Massage Roller',
    description: 'Relieve foot pain and tension with this ergonomic massage roller. Great for recovery after long days.',
    price: 1200,
    image: "/logo.webp",
    category: 'Recovery'
  }, {
    id: '3',
    name: 'Diabetic Socks (3 Pack)',
    description: 'Non-binding socks designed specifically for diabetic patients. Seamless design prevents irritation.',
    price: 1800,
    image: "/logo.webp",
    category: 'Diabetic Care'
  }, {
    id: '4',
    name: 'Heel Pain Relief Kit',
    description: 'Complete kit for heel pain management including night splint, heel cups, and massage ball.',
    price: 4500,
    image: "/logo.webp",
    category: 'Pain Relief'
  }];
  const handleAddToCart = (product: Product) => {
    setCart([...cart, product]);
    // In a real application, you would likely have more sophisticated cart management
    alert(`${product.name} added to cart!`);
  };
  return <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 to-sky-100 pt-20 pb-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  Toe-tally committed to the care of {' '}
                  <span className="text-sky-700">your feet</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Assessment, diagnosis, treatment & management of foot problems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/book-appointment">
                    <Button size="lg">Book an Appointment</Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" size="lg">
                      Our Services
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="rounded-lg overflow-hidden shadow-xl">
                <img src="/hero-section.webp" alt="Doctor examining patient's foot" className="w-full h-auto" />
              </motion.div>
            </div>
          </div>
        </div>
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>
      {/* About Preview Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome to GR Podiatry
          </h2>
          <p className="text-lg text-gray-600">
            We are dedicated to providing exceptional foot and ankle care in a
            comfortable and friendly environment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="bg-sky-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Heart className="text-sky-600 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Patient-Focused Care
            </h3>
            <p className="text-gray-600">
              We prioritize your comfort and well-being with personalized
              treatment plans tailored to your specific needs.
            </p>
          </Card>
          <Card className="p-6">
            <div className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Award className="text-emerald-600 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Experienced Specialists
            </h3>
            <p className="text-gray-600">
              Our team of certified podiatrists brings years of experience and
              advanced training to every patient.
            </p>
          </Card>
          <Card className="p-6">
            <div className="bg-sky-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Stethoscope className="text-sky-600 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Modern Techniques
            </h3>
            <p className="text-gray-600">
              We utilize the latest technology and evidence-based methods to
              provide effective treatments.
            </p>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Link to="/about">
            <Button>
              Learn More About Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section>
      {/* Featured Products Section */}
      <Section background="light">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <ShoppingBag className="text-sky-600 w-7 h-7 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured Products
            </h2>
          </div>
          <p className="text-lg text-gray-600">
            Quality podiatry products to support your foot health at home
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />)}
        </div>
        <div className="text-center mt-12">
          <Link to="/products">
            <Button>
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section>
      {/* Services Preview Section */}
      <Section background="accent">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Podiatry Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive foot and ankle care for patients of all ages
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <img src="/genp2.webp" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                General Podiatry
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive care for common foot problems including ingrown
                toenails, calluses, and fungal infections.
              </p>
              <Link to="/services" className="text-sky-600 font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <img src="/sportspodiatry.webp" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Sports Podiatry
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized care for athletes and active individuals, including
                injury treatment and prevention.
              </p>
              <Link to="/services" className="text-sky-600 font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </Card>
          <Card className="overflow-hidden">
            <img src="/db.webp" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Diabetic Foot Care
              </h3>
              <p className="text-gray-600 mb-4">
                Specialized treatment and preventive care for patients with
                diabetes to prevent complications.
              </p>
              <Link to="/services" className="text-sky-600 font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Link to="/services">
            <Button>
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section>
      {/* Testimonials Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Hear from patients who have experienced our quality care
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="flex text-amber-400 mb-4">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <p className="text-gray-600 italic mb-4">
              "I've been struggling with plantar fasciitis for years. After just
              a few sessions at GR Podiatry, I'm finally able to walk without
              pain. Dr. Johnson is amazing!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold mr-3">
                SM
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Sarah M.</h4>
                <p className="text-sm text-gray-500">Patient for 2 years</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex text-amber-400 mb-4">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <p className="text-gray-600 italic mb-4">
              "As a runner, I needed specialized care for my recurring foot
              issues. The team at GR Podiatry provided excellent treatment and
              advice that got me back on track."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold mr-3">
                JD
              </div>
              <div>
                <h4 className="font-medium text-gray-900">James D.</h4>
                <p className="text-sm text-gray-500">Marathon Runner</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex text-amber-400 mb-4">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <p className="text-gray-600 italic mb-4">
              "The custom orthotics Dr. Williams prescribed have made an
              incredible difference in my daily comfort. The staff is always
              friendly and the clinic is immaculate."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold mr-3">
                RL
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Rebecca L.</h4>
                <p className="text-sm text-gray-500">Teacher</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>



      {/* Map Section */}
      <Section background="light">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Our Clinic
          </h2>
          <p className="text-lg text-gray-600">
            Conveniently located in Nairobi
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-96 w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8127296114835!2d36.7974287!3d-1.2957183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f109996536c39%3A0x4eb6d6e1e16b4153!2s5th%20Avenue%20Medical%20and%20Day%20Centre!5e0!3m2!1sen!2ske!4v1716097317135!5m2!1sen!2ske" width="100%" height="100%" frameBorder="0" style={{
            border: 0
          }} allowFullScreen aria-hidden="false" title="Clinic Location"></iframe>
          </div>
          <div className="p-6 flex flex-wrap gap-6">
            <div className="flex items-start">
              <MapPin className="text-sky-600 mr-2 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">Address</h3>
                <p className="text-gray-600">
                  5th Avenue Medical and Day Centre, 5th Ngong Avenue, Nairobi
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Calendar className="text-sky-600 mr-2 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">Hours</h3>
                <p className="text-gray-600">
                  Monday-Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="light" className="text-center">
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