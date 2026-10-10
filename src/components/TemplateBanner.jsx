import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function TemplateBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Template Demonstration Notice" className="bg-charcoal-900 border-b border-champagne-500/30 text-ivory-100 text-[11px] sm:text-xs py-2 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="px-2 py-0.5 rounded bg-champagne-400 text-charcoal-950 font-bold uppercase tracking-wider text-[10px] shrink-0">
            Agency Template
          </span>
          <span className="truncate text-charcoal-300">
            <strong className="text-ivory-100 font-medium">Demo Showcase:</strong> Fully configurable for salons & beauty studios. All data & branding editable via <code className="text-champagne-300 bg-charcoal-800 px-1 py-0.5 rounded">salonConfig.js</code>.
          </span>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-charcoal-400 hover:text-ivory-100 p-1 shrink-0 transition-colors"
          aria-label="Dismiss template notice"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
