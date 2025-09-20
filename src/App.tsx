import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PaymentModal from './components/PaymentModal';

interface Plan {
  name: string;
  price: number;
  period: string;
}

function App() {
  const { i18n } = useTranslation();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  useEffect(() => {
    // Set document direction and language based on i18n language
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsPaymentModalOpen(true);
  };

  return (
    <div className={`App ${i18n.language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
      <Navbar />
      <Hero />
      <ProductSection />
      <PricingSection onPlanSelect={handlePlanSelect} />
      <Testimonials />
      <FAQ />
      <Footer />
      
      {isPaymentModalOpen && selectedPlan && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          plan={selectedPlan}
        />
      )}
    </div>
  );
}

export default App;
