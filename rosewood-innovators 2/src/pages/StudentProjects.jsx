import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const StudentProjects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'Robotics', 'Garden', 'Art', 'Fabrication', 'Design'];

  const projects = [
    {
      id: 1,
      title: 'Automated Garden Watering System',
      category: 'Robotics',
      student: 'Maya Chen',
      description: 'A smart irrigation system that monitors soil moisture and automatically waters plants when needed.',
      image: '🤖🌱',
      quote: 'I wanted to help my grandma take care of her garden when she travels.',
      details: 'This project combines Arduino programming with moisture sensors and water pumps to create an automated garden care system.'
    },
    {
      id: 2,
      title: 'Upcycled Fashion Collection',
      category: 'Art',
      student: 'Alex Rivera',
      description: 'A fashion line created entirely from recycled materials and fabric scraps.',
      image: '👗♻️',
      quote: 'Fashion should be beautiful AND sustainable.',
      details: 'Using sewing skills learned in Makerspace, Alex created a complete collection of wearable art from discarded materials.'
    },
    {
      id: 3,
      title: 'Community Herb Garden Map',
      category: 'Garden',
      student: 'Jordan Kim',
      description: 'An interactive digital map showing all the edible plants growing around our school.',
      image: '🗺️🌿',
      quote: 'There are so many plants we can eat right here on campus!',
      details: 'Jordan documented over 50 edible plants on campus and created a digital guide for other students.'
    },
    {
      id: 4,
      title: '3D Printed Prosthetic Hand',
      category: 'Fabrication',
      student: 'Sam Patel',
      description: 'A functional prosthetic hand designed and printed for a local community member.',
      image: '🦾🖨️',
      quote: 'Technology should help everyone live their best life.',
      details: 'Working with a local nonprofit, Sam designed and printed a custom prosthetic that costs 90% less than traditional options.'
    },
    {
      id: 5,
      title: 'Drone Delivery System',
      category: 'Robotics',
      student: 'Riley Johnson',
      description: 'A prototype drone system for delivering supplies to remote areas.',
      image: '🚁📦',
      quote: 'I want to help people in places where trucks can\'t go.',
      details: 'Riley programmed autonomous flight paths and designed a secure delivery mechanism for emergency supplies.'
    },
    {
      id: 6,
      title: 'Accessible Playground Design',
      category: 'Design',
      student: 'Casey Wong',
      description: 'A playground design that includes features for children with different abilities.',
      image: '🎪♿',
      quote: 'Every kid deserves to play together.',
      details: 'Casey interviewed families and designed playground equipment that accommodates wheelchairs, sensory needs, and different mobility levels.'
    }
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Student Projects</h1>
          <p className="text-xl leading-relaxed mb-8">
            Our students create everything from robotic prototypes to hand-sewn plushies and scientific food journals. 
            Here's what happens when creativity meets courage.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full"
          >
            Submit Your Project
          </Button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center text-6xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-500">by {project.student}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedProject.title}</h2>
                  <p className="text-lg text-gray-600">by {selectedProject.student}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="h-64 bg-gradient-to-br from-purple-100 to-rose-100 rounded-xl flex items-center justify-center text-8xl mb-6">
                {selectedProject.image}
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {selectedProject.details}
              </p>
              
              <blockquote className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-500 mb-6">
                <p className="text-lg italic text-gray-700">"{selectedProject.quote}"</p>
                <cite className="text-sm text-gray-500 mt-2 block">— {selectedProject.student}</cite>
              </blockquote>
              
              <div className="flex gap-4">
                <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                  Learn More
                </Button>
                <Button variant="outline" className="flex-1">
                  Share Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProjects;

