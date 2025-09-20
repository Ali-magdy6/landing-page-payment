import React from 'react';
import { useTranslation } from 'react-i18next';

interface TestimonialsProps {
  className?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ className = '' }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar: 'SJ',
      content: 'ClearFlow has completely transformed how our team collaborates. The real-time features and automation tools have increased our productivity by 40%.',
      rating: 5
    },
    {
      name: 'Ahmed Al-Rashid',
      role: 'CTO, Digital Solutions',
      avatar: 'AR',
      content: 'The Arabic language support and RTL layout made it easy for our entire team to adopt. The interface is intuitive and powerful.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Project Manager, Creative Agency',
      avatar: 'MG',
      content: 'The analytics dashboard gives us incredible insights into our workflow. We can now make data-driven decisions that actually improve our processes.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Founder, StartupXYZ',
      avatar: 'DC',
      content: 'The API integrations are game-changing. We connected all our tools seamlessly and created custom workflows that save us hours every week.',
      rating: 5
    },
    {
      name: 'Fatima Al-Zahra',
      role: 'Operations Director, Global Corp',
      avatar: 'FA',
      content: 'ClearFlow\'s enterprise features are exactly what we needed. The custom workflows and unlimited storage have scaled perfectly with our growth.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Team Lead, Software Co.',
      avatar: 'JW',
      content: 'The collaboration features are outstanding. Our remote team feels more connected than ever, and project visibility has never been better.',
      rating: 5
    }
  ];

  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : 'text-left'}`}>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 ${isRTL ? 'font-arabic' : 'font-sans'}`}>
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className={`text-gray-700 mb-6 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold ${
                  isRTL ? 'ml-4' : 'mr-4'
                }`}>
                  {testimonial.avatar}
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50,000+', label: 'Happy Customers' },
              { number: '99.9%', label: 'Uptime' },
              { number: '4.9/5', label: 'Average Rating' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
