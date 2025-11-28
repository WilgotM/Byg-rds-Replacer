import React from 'react';
import { Ghost } from 'lucide-react';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300 backdrop-blur-md bg-black/20 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/40 transition-colors">
            <Ghost className="w-6 h-6 text-purple-400" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white font-display">Bygårds<span className="text-purple-500">.exe</span></span>
        </div>
        
        {/* Navigation links removed to keep it single-page only */}
      </div>
    </nav>
  );
};