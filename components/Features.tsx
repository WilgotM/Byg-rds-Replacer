import React from 'react';
import { Eye, Zap, Smile, Wand2 } from 'lucide-react';

const features = [
  {
    icon: <Eye className="w-8 h-8 text-purple-400" />,
    title: "Instant Replacement",
    description: "Vår avancerade AI (läs: ett if-statement) hittar tråkiga bilder och byter ut dem mot ren kvalitet."
  },
  {
    icon: <Smile className="w-8 h-8 text-blue-400" />,
    title: "Mest Bygårdsbröderna",
    description: "Huvudnumret är bröderna, men vi slänger in gästspel från Bonnie och Charlie för maximal variation."
  },
  {
    icon: <Wand2 className="w-8 h-8 text-pink-400" />,
    title: "Customizable Chaos",
    description: "Bestäm själv frekvensen. Vill du ha 10% Bygårds eller 100% total dominans? Du väljer."
  }
];

export const Features = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mt-32 mb-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold font-display text-white mb-4">Hur det fungerar</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="group relative p-8 rounded-2xl glass-panel hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-purple-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg ring-1 ring-white/10 group-hover:ring-purple-500/50 transition-all">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Demo Box */}
      <div className="mt-24 p-1 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 animate-pulse-fast">
        <div className="bg-[#0a0a0a] rounded-xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-scan"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 space-y-6">
                    <h3 className="text-2xl font-bold text-white">Före Tillägget</h3>
                    <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-800 rounded w-full"></div>
                    <div className="h-4 bg-gray-800 rounded w-5/6"></div>
                    <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 border border-gray-700">
                        TRÅKIG BILD
                    </div>
                </div>

                <div className="hidden md:flex items-center justify-center">
                    <div className="p-3 rounded-full bg-purple-500/20 text-purple-400 animate-pulse">
                        <Zap size={32} />
                    </div>
                </div>

                <div className="flex-1 space-y-6">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Efter Bygårds</h3>
                    <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-800 rounded w-full"></div>
                    <div className="h-4 bg-gray-800 rounded w-5/6"></div>
                    <div className="aspect-video bg-purple-900/30 rounded-lg flex items-center justify-center border border-purple-500/50 relative overflow-hidden group">
                        <img 
                            src="https://picsum.photos/400/225" 
                            alt="Placeholder" 
                            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
                        />
                        <span className="relative z-10 font-bold text-xl text-white drop-shadow-lg animate-glitch">
                            BYGÅRDS EFFECT
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};