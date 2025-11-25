
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our team collaborating"
              className="rounded-2xl shadow-2xl shadow-slate-950/50 relative z-10"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
              Who We <span className="gradient-text">Are</span>
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              AI Nest Solutions is a collective of passionate engineers, designers, and strategists dedicated to the craft of software development. We believe in building long-term partnerships with our clients, founded on transparency, collaboration, and a shared drive for excellence.
            </p>
            <p className="mt-4 text-lg text-slate-400">
              Our mission is simple: to be the most trusted technology partner for businesses looking to innovate and grow. We combine deep technical expertise with a human-centered approach to deliver solutions that not only work flawlessly but also feel great to use.
            </p>
            <div className="mt-8 flex space-x-8">
              <div>
                <p className="text-4xl font-bold gradient-text">100%</p>
                <p className="text-slate-400 mt-1">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text">50+</p>
                <p className="text-slate-400 mt-1">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
