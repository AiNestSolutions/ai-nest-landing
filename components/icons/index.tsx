
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-8 h-8 text-emerald-400">{children}</div>
);

export const WebDevIcon: React.FC = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 12" />
    </svg>
  </IconWrapper>
);

export const MobileDevIcon: React.FC = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  </IconWrapper>
);

export const UIDesignIcon: React.FC = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.475 2.118A2.25 2.25 0 01.879 16.5a3 3 0 005.78-1.128m2.37-1.043a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.475 2.118A2.25 2.25 0 01.879 16.5a3 3 0 005.78-1.128m11.54-9.493a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.475 2.118 2.25 2.25 0 01-2.475-2.118 3 3 0 005.78-1.128m2.37-1.043a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.475 2.118 2.25 2.25 0 01-2.475-2.118 3 3 0 005.78-1.128" />
    </svg>
  </IconWrapper>
);

export const AIIcon: React.FC = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 3v1.5m0 15v1.5m3.75-18v1.5m0 15v1.5M12 6.75h.008v.008H12V6.75zm-.008 0h.008v.008h-.008V6.75zm0 3.75h.008v.008h-.008v-.008zm0 3.75h.008v.008h-.008v-.008z" />
    </svg>
  </IconWrapper>
);
