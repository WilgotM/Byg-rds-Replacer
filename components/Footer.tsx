import React from 'react';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative z-10 w-full py-10 mt-auto border-t border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center max-w-7xl px-4 mx-auto text-center">
        
        <p className="flex items-center gap-2 mb-4 text-sm text-gray-500">
          Skapad med <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> för Bygårds communityt
        </p>
        
        <p className="text-xs text-gray-700">
          Inte associerad med någon officiell person. Detta är ett skämt (kanske).
          <br />
          © {new Date().getFullYear()} Bygårds Replacer Inc.
        </p>
      </div>
    </footer>
  );
};