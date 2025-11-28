import React from 'react';

// Using simple circles with text initials to represent the heads abstractly to keep it clean,
// but styled to look like floating "entities".
export const FloatingHeads = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden h-screen z-0">
      
      {/* Element 1: Main Brother 1 */}
      <div className="absolute top-1/4 left-1/2 opacity-20 animate-float duration-[8s] -translate-x-1/2">
         <div className="w-40 h-40 rounded-full bg-gradient-to-b from-purple-600 to-indigo-900 blur-md flex items-center justify-center text-white/50 font-black text-xl border border-white/10">
            BYGÅRDS
         </div>
      </div>

      {/* Element 2: Bonnie (Secondary) */}
      <div className="absolute top-1/3 left-10 md:left-1/4 opacity-15 animate-float duration-[7s]">
         <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-blue-400 blur-sm flex items-center justify-center text-white font-bold text-[10px] border border-white/20">
            BONNIE
         </div>
      </div>

      {/* Element 3: Charlie (Secondary) */}
      <div className="absolute bottom-1/3 right-10 md:right-1/4 opacity-15 animate-float duration-[5s] animation-delay-1000">
         <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-red-600 to-pink-400 blur-sm flex items-center justify-center text-white font-bold text-[10px] border border-white/20">
            CHARLIE
         </div>
      </div>

      {/* Extra particles */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-purple-500 rounded-full animate-pulse blur-md"></div>
      <div className="absolute bottom-40 left-40 w-6 h-6 bg-cyan-500 rounded-full animate-pulse blur-md animation-delay-2000"></div>
    </div>
  );
};