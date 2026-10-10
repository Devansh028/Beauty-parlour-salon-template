import React, { useState, useRef } from 'react';
import { Sparkles, MoveHorizontal, AlertCircle } from 'lucide-react';
import { demoTransformations } from '../data/gallery';

export default function BeforeAfter() {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const currentItem = demoTransformations[activeTab];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section className="py-20 sm:py-28 bg-ivory-100/60 dark:bg-charcoal-950/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-champagne-600 dark:text-champagne-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artisanal Refinement</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-medium text-charcoal-900 dark:text-ivory-50 tracking-tight">
            THE ART OF TRANSFORMATION
          </h2>
          <p className="text-base text-charcoal-600 dark:text-charcoal-300">
            Experience how tailored hair artistry, radiant skincare, and subtle makeup celebrate each client's natural features.
          </p>
        </div>

        {/* Demo Transformation Notice Badge */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne-100 dark:bg-charcoal-800 border border-champagne-300 dark:border-champagne-700/60 text-[11px] font-semibold uppercase tracking-wider text-champagne-800 dark:text-champagne-300">
            <AlertCircle className="w-3.5 h-3.5 text-champagne-600" />
            <span>Demo Transformation • For Illustration Only</span>
          </div>
        </div>

        {/* Transformation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {demoTransformations.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-charcoal-900 text-ivory-50 dark:bg-champagne-400 dark:text-charcoal-950 shadow-md'
                  : 'bg-ivory-50 dark:bg-charcoal-800 text-charcoal-700 dark:text-ivory-200 hover:bg-ivory-200 dark:hover:bg-charcoal-700 border border-ivory-200 dark:border-charcoal-700'
              }`}
            >
              {item.tag}
            </button>
          ))}
        </div>

        {/* Interactive Split Slider Container */}
        <div className="rounded-3xl overflow-hidden shadow-luxury border border-ivory-200 dark:border-charcoal-700 bg-ivory-50 dark:bg-charcoal-800 p-4 sm:p-6">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-charcoal-900"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full width background) */}
            <img
              src={currentItem.afterImage}
              alt={`${currentItem.title} After`}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <span className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-charcoal-900/80 text-champagne-300 backdrop-blur-sm pointer-events-none">
              {currentItem.afterLabel}
            </span>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={currentItem.beforeImage}
                alt={`${currentItem.title} Before`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <span className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-charcoal-900/80 text-ivory-200 backdrop-blur-sm">
                {currentItem.beforeLabel}
              </span>
            </div>

            {/* Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-ivory-50 pointer-events-none shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Central Drag Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-ivory-50 dark:bg-charcoal-800 border-2 border-champagne-400 text-charcoal-900 dark:text-ivory-100 flex items-center justify-center shadow-lg">
                <MoveHorizontal className="w-4 h-4 text-champagne-600 dark:text-champagne-400" />
              </div>
            </div>
          </div>

          {/* Transformation Details */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-champagne-600 dark:text-champagne-400">
                {currentItem.category}
              </span>
              <h3 className="text-xl font-serif font-medium text-charcoal-900 dark:text-ivory-50 mt-0.5">
                {currentItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 mt-1 max-w-2xl">
                {currentItem.description}
              </p>
            </div>

            <div className="text-xs text-charcoal-400 italic shrink-0">
              Drag slider left or right to compare
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-xs text-charcoal-500 dark:text-charcoal-400 italic">
          * Demo Transformation for template demonstration only. No medical or guaranteed beauty claims are made.
        </p>

      </div>
    </section>
  );
}
