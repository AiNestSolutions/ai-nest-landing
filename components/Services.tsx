
import React from 'react';
// Fix: Changed import path to be explicit to ensure module resolution.
import { WebDevIcon, MobileDevIcon, UIDesignIcon, AIIcon } from './icons/index.tsx';

const services = [
  {
    icon: <WebDevIcon />,
    title: 'Web Application Development',
    description: 'We build robust, scalable, and secure web applications tailored to your business needs using modern frameworks like React, Next.js, and Node.js.',
  },
  {
    icon: <MobileDevIcon />,
    title: 'Mobile App Development',
    description: 'From iOS to Android, we create beautiful and performant native and cross-platform mobile apps that provide a seamless user experience.',
  },
  {
    icon: <UIDesignIcon />,
    title: 'UI/UX Design',
    description: 'Our design team focuses on creating intuitive, engaging, and aesthetically pleasing interfaces that delight users and drive conversion.',
  },
  {
    icon: <AIIcon />,
    title: 'AI & Machine Learning',
    description: 'Leverage the power of AI. We integrate intelligent features, chatbots, and data-driven models to make your applications smarter.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Our Core <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            We provide end-to-end solutions to transform your ideas into powerful digital products.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 flex flex-col items-start transition-all duration-300 hover:border-emerald-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/30"
            >
              <div className="bg-slate-700/50 p-3 rounded-lg mb-6 border border-slate-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
