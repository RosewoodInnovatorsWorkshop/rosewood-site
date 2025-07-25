import React from 'react';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-gray-800">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Main Content */}
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            🌱 Where Students Build, Grow, and Launch Bold Ideas
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Rosewood Innovators Workshop is a student-powered, hands-on learning hub in Arizona. 
            We blend creativity, technology, and real-world problem solving to prepare young minds 
            for the future—starting today.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-blue-600 text-white hover:bg-blue-500 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25"
            >
              Explore Our Programs
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              See Student Projects
            </Button>
            <Button 
              size="lg" 
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gray-700/25"
            >
              Get Involved
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-300 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

