import React, { useState } from 'react';
import { Download, Check, Sparkles, Zap } from 'lucide-react';

export const Hero = () => {
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'complete'>('idle');

  const handleDownload = () => {
    if (downloadState !== 'idle') return;
    setDownloadState('downloading');
    
    // Simulate prepare and open link
    setTimeout(() => {
      window.open('https://www.mediafire.com/file/tsjlffl33qae7lu/byg_rds_replacer_chrome_extension.zip/file', '_blank');
      setDownloadState('complete');
    }, 1500);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10 text-center lg:mt-20">
      
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-2 mb-8 transition-all border rounded-full glass-panel border-purple-500/30 hover:border-purple-500/60 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] group cursor-default">
        <span className="relative flex w-3 h-3 mr-3">
          <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-purple-400"></span>
          <span className="relative inline-flex w-3 h-3 rounded-full bg-purple-500"></span>
        </span>
        <span className="text-sm font-medium text-purple-200 group-hover:text-white transition-colors">
          Version 2.0: Nu med mer bröder
        </span>
      </div>

      {/* Main Title */}
      <h1 className="mb-6 text-6xl font-black tracking-tighter text-transparent sm:text-8xl md:text-9xl bg-clip-text bg-gradient-to-b from-white via-white to-purple-400 font-display animate-float">
        BYGÅRDS
        <br />
        <span className="text-purple-500 neon-text">REPLACER</span>
      </h1>

      <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-400 sm:text-xl md:text-2xl leading-relaxed">
        Webben är tråkig. Gör den bättre. Byt ut alla tråkiga bilder mot 
        <span className="font-bold text-white mx-1">Bygårdsbröderna</span>.
        <br className="hidden sm:block" />
        (Och ja, du får lite <span className="text-purple-400">Bonnie Blue</span> & <span className="text-purple-400">Charlie Kirk</span> på köpet).
      </p>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
        <button
          onClick={handleDownload}
          disabled={downloadState === 'complete'}
          className={`
            relative group flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 rounded-xl
            ${downloadState === 'complete' 
              ? 'bg-green-500 text-black hover:bg-green-400 cursor-default' 
              : 'bg-white text-black hover:bg-purple-400 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]'
            }
          `}
        >
          {downloadState === 'idle' && (
            <>
              <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              LADDA NER TILLÄGG
            </>
          )}
          {downloadState === 'downloading' && (
            <>
              <Sparkles className="w-6 h-6 mr-3 animate-spin" />
              LADDAR NER...
            </>
          )}
          {downloadState === 'complete' && (
            <>
              <Check className="w-6 h-6 mr-3" />
              LADDAT NER
            </>
          )}
        </button>
        
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Zap className="w-4 h-4 text-yellow-500" />
          <span>100% Gratis</span>
          <span className="mx-2">•</span>
          <span>Bygårds Approved</span>
        </div>
      </div>

      {/* Progress Bar (Visible during download) */}
      {downloadState === 'downloading' && (
        <div className="w-full max-w-xs mx-auto mt-6 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-purple-500 animate-[width_1.5s_ease-in-out_forwards]" style={{ width: '100%' }}></div>
        </div>
      )}

    </div>
  );
};