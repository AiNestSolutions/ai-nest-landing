import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} AI Nest Solutions LTD. All rights
            reserved.
          </p>
          <div className="flex items-center mt-4 sm:mt-0">
            <a
              href="mailto:info@ainest.solutions"
              aria-label="Email"
              className="text-slate-500 hover:text-emerald-400 transition-colors flex items-center space-x-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">info@ainest.solutions</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
