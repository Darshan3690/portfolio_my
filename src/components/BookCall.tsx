'use client';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import { Plus } from 'lucide-react';

export const BookCall = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="mb-16">
      <div className="w-full bg-gray-900/50 border border-gray-800 rounded-lg shadow-lg p-8 text-center">
        <p className="text-gray-300 text-lg mb-6">
          Hey, you scrolled this far, let's talk.
        </p>
        <div className="flex justify-center">
          <Button
            onClick={() =>
              window.open('https://topmate.io/darshan3690', '_blank')
            }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-sm flex items-center gap-2 border border-gray-700 transition-all duration-300 group relative overflow-visible"
          >
            <Avatar className="w-5 h-5 border border-gray-600 transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
              <AvatarImage src="/avatar.png" alt="Darshan Rajput" />
              <AvatarFallback className="bg-gray-800 text-white text-xs">
                DR
              </AvatarFallback>
            </Avatar>
            <div
              className={`flex items-center gap-1.5 transition-all duration-300 ease-in-out ${
                isHovered
                  ? 'opacity-100 translate-x-0 max-w-[100px]'
                  : 'opacity-0 -translate-x-2 max-w-0 overflow-hidden'
              }`}
            >
              <Plus className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              <span className="bg-gray-800/50 text-gray-200 text-xs px-2.5 py-1 rounded-full whitespace-nowrap border border-dashed border-gray-500/60">
                You
              </span>
            </div>
            <span className="whitespace-nowrap font-semibold">
              Book a Free Call
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
