import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface PricingSectionProps {
  className?: string;
  onPlanSelect?: (plan: { name: string; price: number; period: string }) => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ className = '', onPlanSelect }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      key: 'starter',
      popular: false,
      price: { monthly: 9, annual: 7 },
      features: t('pricing.starter.features', { returnObjects: true }) as string[]
    },
    {
      key: 'professional',
      popular: true,
      price: { monthly: 29, annual: 23 },
      features: t('pricing.professional.features', { returnObjects: true }) as string[]
    },
    {
      key: 'enterprise',
      popular: false,
      price: { monthly: 99, annual: 79 },
      features: t('pricing.enterprise.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="pricing" className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-arabic' : 'font-sans'}`}>
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('pricing.subtitle')}
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-gray-600 ${isRTL ? 'order-2' : 'order-1'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              aria-label="Toggle annual billing"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-gray-600 ${isRTL ? 'order-1' : 'order-2'}`}>
              Annual
              <span className="ml-2 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.key}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular
                  ? 'border-blue-500 scale-105'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className={`text-center mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className={`text-2xl font-bold text-gray-900 mb-2 ${isRTL ? 'font-arabic' : 'font-sans'}`}>
                  {t(`pricing.${plan.key}.name`)}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t(`pricing.${plan.key}.description`)}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-600 ml-2">
                    {t(`pricing.${plan.key}.period`)}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className={`w-5 h-5 text-green-500 mt-0.5 ${isRTL ? 'ml-3 order-2' : 'mr-3'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={`text-gray-600 ${isRTL ? 'text-right order-1' : 'text-left'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => onPlanSelect?.({
                  name: t(`pricing.${plan.key}.name`),
                  price: isAnnual ? plan.price.annual : plan.price.monthly,
                  period: t(`pricing.${plan.key}.period`)
                })}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                } hover:scale-105`}
              >
                {plan.popular ? 'Get Started' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-6 py-3 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Compare all features
            </button>
            <span className="text-gray-400">•</span>
            <button className="px-6 py-3 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
