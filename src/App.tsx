import React, { Children } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { BookingPage } from './pages/BookAppointment';
import { ContactPage } from './pages/Contact';
import { ProductsPage } from './pages/Products';
import { BlistersPage } from './pages/complaints/Blisters';
import { AchillesTendonitisPage } from './pages/complaints/AchillesTendonitis';
import { AthletesFootPage } from './pages/complaints/AthletesFoot';
import { FlatFeetPage } from './pages/complaints/FlatFeet';
import { ChilblainsPage } from './pages/complaints/Chilblains';
import { CornsAndCallusesPage } from './pages/complaints/CornsAndCalluses';
import { HeelPainPage } from './pages/complaints/HeelPain';
import { PlanterFasciitisPage } from './pages/complaints/PlanterFasciitis';
import { NewPatientConsultationPage } from './pages/treatments/NewPatientConsultation';
import { BiomechanicalAssessmentsPage } from './pages/treatments/BiomechanicalAssessments';
import { NailSurgeryPage } from './pages/treatments/NailSurgery';
import { RoutineTreatmentPage } from './pages/treatments/RoutineTreatment';
import { ReviewPage } from './pages/treatments/Review';
import { OrthoticsFittingPage } from './pages/treatments/OrthoticsFitting';
import { FenestrationPage } from './pages/treatments/Fenestration';
import { VerrucaTreatmentPage } from './pages/treatments/VerrucaTreatment';
import { ChildrensFootIssuesPage } from './pages/complaints/ChildrensFootIssues';
import { CrackedHeelsPage } from './pages/complaints/CrackedHeels';
import { DiabetesAndTheFootPage } from './pages/complaints/DiabetesAndTheFoot';
import { FungalNailPage } from './pages/complaints/FungalNail';
import { GoutPage } from './pages/complaints/Gout';
import { HammertoePage } from './pages/complaints/Hammertoe';
import { IngrowingNailsPage } from './pages/complaints/IngrowingNails';
import { MortonsNeuromaPage } from './pages/complaints/MortonsNeuroma';
import { SweatyFeetPage } from './pages/complaints/SweatyFeet';
import { VerrucaePage } from './pages/complaints/Verrucae';
import { TherapeuticLaserTreatmentPage } from './pages/treatments/TherapeuticLaserTreatment';
import { ScrollToTop } from './components/utils/ScrollToTop';
export function App() {
  return <Router>
      <ScrollToTop />
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex flex-col flex-grow md:ml-[304px] transition-all duration-300">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/book-appointment" element={<BookingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/complaints/blisters" element={<BlistersPage />} />
              <Route path="/complaints/achilles-tendonitis" element={<AchillesTendonitisPage />} />
              <Route path="/complaints/athletes-foot" element={<AthletesFootPage />} />
              <Route path="/complaints/flat-feet" element={<FlatFeetPage />} />
              <Route path="/complaints/chilblains" element={<ChilblainsPage />} />
              <Route path="/complaints/corns-calluses" element={<CornsAndCallusesPage />} />
              <Route path="/complaints/heel-pain" element={<HeelPainPage />} />
              <Route path="/complaints/plantar-fasciitis" element={<PlanterFasciitisPage />} />
              <Route path="/complaints/childrens-foot-issues" element={<ChildrensFootIssuesPage />} />
              <Route path="/complaints/cracked-heels" element={<CrackedHeelsPage />} />
              <Route path="/complaints/diabetes-and-the-foot" element={<DiabetesAndTheFootPage />} />
              <Route path="/complaints/fungal-nail" element={<FungalNailPage />} />
              <Route path="/complaints/gout" element={<GoutPage />} />
              <Route path="/complaints/hammertoe" element={<HammertoePage />} />
              <Route path="/complaints/ingrowing-nails" element={<IngrowingNailsPage />} />
              <Route path="/complaints/mortons-neuroma" element={<MortonsNeuromaPage />} />
              <Route path="/complaints/sweaty-feet" element={<SweatyFeetPage />} />
              <Route path="/complaints/verrucae" element={<VerrucaePage />} />
              <Route path="/treatments/new-patient-consultation" element={<NewPatientConsultationPage />} />
              <Route path="/treatments/routine-treatment" element={<RoutineTreatmentPage />} />
              <Route path="/treatments/review" element={<ReviewPage />} />
              <Route path="/treatments/biomechanical-assessments" element={<BiomechanicalAssessmentsPage />} />
              <Route path="/treatments/orthotics-fitting" element={<OrthoticsFittingPage />} />
              <Route path="/treatments/fenestration" element={<FenestrationPage />} />
              <Route path="/treatments/nail-surgery" element={<NailSurgeryPage />} />
              <Route path="/treatments/verruca-treatment" element={<VerrucaTreatmentPage />} />
              <Route path="/treatments/therapeutic-laser-treatment" element={<TherapeuticLaserTreatmentPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>;
}