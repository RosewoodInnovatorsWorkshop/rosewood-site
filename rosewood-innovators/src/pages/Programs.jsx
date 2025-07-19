import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      id: 'garden',
      title: '🌿 School Garden Program',
      summary: 'Grow food, cook meals, and learn plant science through hands-on gardening and global traditions.',
      description: 'Students learn sustainable agriculture, nutrition science, and cultural food traditions while growing their own vegetables and herbs. From seed to table, participants experience the full cycle of food production.',
      features: ['Organic gardening techniques', 'Cooking workshops', 'Plant biology', 'Cultural food traditions', 'Sustainability practices']
    },
    {
      id: 'makerspace',
      title: '🧵 Makerspace Club',
      summary: 'Learn 3D printing, sewing, and creative fabrication—and launch your own pop-up market.',
      description: 'A hands-on creative space where students learn digital fabrication, traditional crafts, and entrepreneurship. Students create products and learn business skills through real market experiences.',
      features: ['3D printing & design', 'Sewing & textiles', 'Woodworking basics', 'Product design', 'Pop-up market experience']
    },
    {
      id: 'robotics',
      title: '🤖 VEX Robotics & Drones',
      summary: 'Build, code, and fly robots and drones while competing in real-world tech challenges.',
      description: 'Students design, build, and program robots and drones for competitions and real-world applications. Learn engineering principles, coding, and teamwork through exciting challenges.',
      features: ['Robot design & building', 'Programming & coding', 'Drone piloting', 'Competition preparation', 'Engineering problem-solving']
    },
    {
      id: 'design-thinking',
      title: '🧠 Design Thinking Club',
      summary: 'Solve real-world problems using empathy, creativity, and rapid prototyping.',
      description: 'Students learn the design thinking process to tackle real community challenges. From empathy interviews to prototype testing, participants develop solutions that matter.',
      features: ['Human-centered design', 'Community problem-solving', 'Rapid prototyping', 'User research', 'Presentation skills']
    },
    {
      id: 'nature-lab',
      title: '🌎 Nature Lab (Biomimicry)',
      summary: 'Invent like nature—design sustainable tech based on the genius of ecosystems.',
      description: 'Explore how nature solves problems and apply these solutions to create sustainable technologies. Students study natural systems and design bio-inspired innovations.',
      features: ['Biomimicry principles', 'Sustainable design', 'Nature observation', 'Scientific research', 'Innovation projects']
    },
    {
      id: 'startup-studio',
      title: '🚀 Startup Studio',
      summary: 'Prototype, pitch, and present your own product ideas in a youth version of Shark Tank.',
      description: 'Students develop entrepreneurial skills by creating their own business ideas. From market research to investor pitches, participants experience the startup journey.',
      features: ['Business plan development', 'Market research', 'Pitch presentations', 'Financial literacy', 'Investor feedback']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl leading-relaxed">
            Hands-on learning experiences that blend creativity, technology, and real-world problem solving
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
                onClick={() => setSelectedProgram(program)}
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.summary}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-800">{selectedProgram.title}</h2>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {selectedProgram.description}
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What You'll Learn:</h3>
              <ul className="space-y-2 mb-8">
                {selectedProgram.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Join This Program
                </Button>
                <Button variant="outline" className="flex-1">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Programs;

