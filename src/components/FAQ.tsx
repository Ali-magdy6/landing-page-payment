import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FAQProps {
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({ className = '' }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is ClearFlow and how does it work?',
      answer: 'ClearFlow is a comprehensive productivity SaaS platform that helps teams streamline their workflows through real-time collaboration, advanced analytics, workflow automation, and seamless integrations. It provides a centralized hub where teams can manage projects, communicate effectively, and automate repetitive tasks.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for all our plans. No credit card required to get started. You can explore all features and see how ClearFlow can transform your team\'s productivity.'
    },
    {
      question: 'Can I switch between monthly and annual billing?',
      answer: 'Absolutely! You can switch between monthly and annual billing at any time from your account settings. Annual plans offer a 20% discount compared to monthly billing.'
    },
    {
      question: 'Does ClearFlow support multiple languages?',
      answer: 'Yes, ClearFlow supports multiple languages including English and Arabic with full RTL (Right-to-Left) layout support. We\'re continuously adding more languages based on user demand.'
    },
    {
      question: 'How secure is my data?',
      answer: 'Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with industry standards including SOC 2 and GDPR. Your data is encrypted in transit and at rest.'
    },
    {
      question: 'Can I integrate ClearFlow with other tools?',
      answer: 'Yes! ClearFlow offers 100+ integrations with popular tools like Slack, Microsoft Teams, Google Workspace, Salesforce, and many more. We also provide a robust API for custom integrations.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer multiple support channels including email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers. We also have a comprehensive knowledge base and community forum.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees, and you\'ll continue to have access to your data until the end of your current billing period.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`py-20 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-arabic' : 'font-sans'}`}>
            {t('faq.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-8 py-6 text-left flex items-center justify-between transition-colors duration-200 hover:bg-gray-100 ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
              >
                <h3 className={`text-lg font-semibold text-gray-900 pr-4 ${isRTL ? 'font-arabic' : 'font-sans'}`}>
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 ${isRTL ? 'order-first' : 'order-last'}`}>
                  <svg
                    className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`px-8 pb-6 text-gray-700 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${isRTL ? 'font-arabic' : 'font-sans'}`}>
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
