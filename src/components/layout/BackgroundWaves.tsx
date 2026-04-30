import React from 'react';

export default function BackgroundWaves() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none flex flex-col justify-end h-screen w-screen opacity-60 mix-blend-multiply dark:mix-blend-screen">
      <svg 
        className="relative w-[200vw] md:w-[100vw] h-[25vh] md:h-[40vh] ml-[-50vw] md:ml-[0vw]" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        viewBox="0 24 150 28" 
        preserveAspectRatio="none" 
        shapeRendering="auto"
      >
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="text-[var(--color-text-main)]">
          <use xlinkHref="#gentle-wave" x="48" y="0" className="animate-wave1 pointer-events-none" fill="currentColor" fillOpacity="0.06" />
          <use xlinkHref="#gentle-wave" x="48" y="3" className="animate-wave2 pointer-events-none" fill="currentColor" fillOpacity="0.04" />
          <use xlinkHref="#gentle-wave" x="48" y="5" className="animate-wave3 pointer-events-none" fill="currentColor" fillOpacity="0.03" />
          <use xlinkHref="#gentle-wave" x="48" y="7" className="animate-wave4 pointer-events-none" fill="currentColor" fillOpacity="0.07" />
        </g>
      </svg>
    </div>
  );
}
