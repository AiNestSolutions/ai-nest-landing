
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative py-32 md:py-48 min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900 bg-grid-slate-800/[0.2] [mask-image:linear-gradient(to_bottom,white_20%,transparent_100%)]"></div>
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(50%_50%_at_50%_50%,white,transparent)]">
        <div className="absolute top-1/2 left-1/2 w-[50rem] h-[50rem] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-100">
          Building the Future of Digital,
          <br />
          <span className="gradient-text">One Line of Code at a Time.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-400">
          AI Nest Solutions crafts bespoke web and mobile applications that are fast, scalable, and user-centric. We turn your vision into a high-performance digital reality.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://forms.gle/nehQhV7gvUUSaLCy5"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/30"
          >
            Start Your Project
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto bg-slate-800/50 border border-slate-700 text-slate-200 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-700 hover:border-slate-600 transition-colors duration-300"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
