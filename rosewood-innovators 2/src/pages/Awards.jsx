import React, { useState } from 'react';

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  const awards = [
    {
      id: 1,
      title: 'Phoenix Suns/APS STEM Grant',
      year: '2024',
      description: 'Received funding to expand our Makerspace program and provide 3D printing access to more students.',
      icon: '🏀⚡',
      story: 'This grant allowed us to purchase new 3D printers and materials, enabling students to create more complex prototypes and bring their ideas to life.',
      impact: 'Served 150+ students with enhanced maker tools'
    },
    {
      id: 2,
      title: 'Disney Imagination Campus: Top 100 Educators',
      year: '2023',
      description: 'Natalie Carpenter recognized as one of the top 100 educators nationwide for innovative teaching methods.',
      icon: '🏰✨',
      story: 'Selected from thousands of applicants for creating engaging, hands-on learning experiences that inspire creativity and innovation in students.',
      impact: 'Recognition led to new partnerships and program expansion'
    },
    {
      id: 3,
      title: 'MLB Players Trust: Playmakers Classic',
      year: '2023',
      description: 'Our robotics team won the regional competition for their community-focused robot design.',
      icon: '⚾🤖',
      story: 'Students designed a robot that could help maintain baseball fields, combining their love of sports with engineering skills.',
      impact: 'Team advanced to nationals and inspired other schools'
    },
    {
      id: 4,
      title: 'Arizona STEM Excellence Award',
      year: '2024',
      description: 'Recognized for outstanding contribution to STEM education in Arizona schools.',
      icon: '🌵🔬',
      story: 'Our interdisciplinary approach to STEM education, combining technology with environmental science and art, set a new standard for innovative learning.',
      impact: 'Program model adopted by 5 other Arizona schools'
    },
    {
      id: 5,
      title: 'Youth Innovation Challenge Winner',
      year: '2023',
      description: 'Student team won statewide competition for their sustainable technology solution.',
      icon: '🌱💡',
      story: 'Our students developed a solar-powered water purification system for rural communities, beating teams from across the state.',
      impact: 'Prototype is being tested in 3 Arizona communities'
    },
    {
      id: 6,
      title: 'Community Impact Award',
      year: '2024',
      description: 'Honored for positive impact on local community through student-led service projects.',
      icon: '🤝❤️',
      story: 'Our students have completed over 50 community service projects, from building wheelchair ramps to creating educational apps for local nonprofits.',
      impact: 'Over 1,000 community members directly helped'
    }
  ];

  const testimonials = [
    {
      quote: "Both of our kids, Nina and Maya, love Makerspace Club so much. Thanks again for all you do to inspire the kiddos.",
      author: "Alexis",
      role: "Parent"
    },
    {
      quote: "Congratulations to Natalie for receiving an APS STEM grant for the Makerspace work she's doing.",
      author: "Johnny Brownlie",
      role: "Principal"
    },
    {
      quote: "Valerie loves being a part of your classes and everything you're involved in! You make things fun!",
      author: "Jacqueline",
      role: "Parent"
    },
    {
      quote: "The robotics program has given my son confidence and real-world skills he'll use forever.",
      author: "Marcus",
      role: "Parent"
    },
    {
      quote: "Watching these students present their projects is incredible. They're solving real problems!",
      author: "Dr. Sarah Chen",
      role: "Community Partner"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-gray-800">
      {/* Header Section */}
      <section className="py-20 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Awards & Recognition</h1>
          <p className="text-xl leading-relaxed">
            Celebrating the achievements of our students, programs, and community impact
          </p>
        </div>
      </section>

      {/* Awards Trophy Wall */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Trophy Wall</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award) => (
              <div
                key={award.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-white/20"
                onClick={() => setSelectedAward(award)}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{award.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                  <p className="text-cyan-100 mb-4">{award.year}</p>
                  <p className="text-white/80 text-sm leading-relaxed">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What People Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl text-blue-500 mb-4">"</div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <cite className="text-sm text-gray-500">
                  <strong className="text-gray-700">{testimonial.author}</strong>
                  <br />
                  {testimonial.role}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award Detail Modal */}
      {selectedAward && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="text-center">
                  <div className="text-8xl mb-4">{selectedAward.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedAward.title}</h2>
                  <p className="text-lg text-gray-600">{selectedAward.year}</p>
                </div>
                <button
                  onClick={() => setSelectedAward(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">The Story</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedAward.story}</p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Impact</h3>
                  <p className="text-blue-700">{selectedAward.impact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Awards;

