import React, { useState } from 'react';

const Sponsors = () => {
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  const sponsors = [
    {
      id: 1,
      name: 'APS',
      logo: '⚡',
      level: 'Platinum',
      support: 'STEM Education Grant',
      message: 'Thank you for powering our students\' futures with renewable energy education and hands-on learning opportunities.',
      impact: 'Funded 3D printers and renewable energy curriculum for 200+ students'
    },
    {
      id: 2,
      name: 'SRP',
      logo: '🔌',
      level: 'Gold',
      support: 'Sustainability Programs',
      message: 'Your commitment to sustainable energy education helps our students become environmental stewards.',
      impact: 'Supported solar panel installation and energy efficiency projects'
    },
    {
      id: 3,
      name: 'Phoenix Mercury Foundation',
      logo: '🏀',
      level: 'Gold',
      support: 'Girls in STEM Initiative',
      message: 'Thank you for championing girls in STEM and showing them they can achieve anything.',
      impact: 'Sponsored robotics team and mentorship program for 50+ girls'
    },
    {
      id: 4,
      name: 'ABC15',
      logo: '📺',
      level: 'Silver',
      support: 'Media & Communications',
      message: 'Your storytelling helps share our students\' amazing achievements with the community.',
      impact: 'Featured student projects and increased community awareness'
    },
    {
      id: 5,
      name: 'Phoenix Suns',
      logo: '☀️',
      level: 'Platinum',
      support: 'Community Outreach',
      message: 'Thank you for bringing the same championship spirit to education that you bring to basketball.',
      impact: 'Funded Makerspace expansion and community workshop series'
    },
    {
      id: 6,
      name: 'Local Tech Partners',
      logo: '💻',
      level: 'Bronze',
      support: 'Equipment & Mentorship',
      message: 'Your technical expertise and equipment donations keep our programs cutting-edge.',
      impact: 'Provided laptops, software licenses, and volunteer mentors'
    }
  ];

  const sponsorshipLevels = [
    {
      level: 'Platinum',
      amount: '$10,000+',
      color: 'from-gray-300 to-gray-500',
      benefits: [
        'Logo on all marketing materials',
        'Dedicated program naming rights',
        'Quarterly impact reports',
        'Student showcase invitations',
        'Custom partnership opportunities'
      ]
    },
    {
      level: 'Gold',
      amount: '$5,000+',
      color: 'from-yellow-300 to-yellow-600',
      benefits: [
        'Logo on website and newsletters',
        'Social media recognition',
        'Annual impact report',
        'Event invitations',
        'Student thank you videos'
      ]
    },
    {
      level: 'Silver',
      amount: '$2,500+',
      color: 'from-gray-200 to-gray-400',
      benefits: [
        'Website recognition',
        'Newsletter mentions',
        'Event invitations',
        'Impact updates'
      ]
    },
    {
      level: 'Bronze',
      amount: '$1,000+',
      color: 'from-orange-300 to-orange-600',
      benefits: [
        'Website listing',
        'Thank you recognition',
        'Program updates'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Amazing Sponsors</h1>
          <p className="text-xl leading-relaxed">
            We're proud to be supported by these generous partners who believe in the power 
            of hands-on education and student innovation
          </p>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Thank You to Our Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer p-8 text-center border border-gray-100"
                onClick={() => setSelectedSponsor(sponsor)}
              >
                <div className="text-6xl mb-4">{sponsor.logo}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{sponsor.name}</h3>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                  sponsor.level === 'Platinum' ? 'bg-gray-200 text-gray-800' :
                  sponsor.level === 'Gold' ? 'bg-yellow-200 text-yellow-800' :
                  sponsor.level === 'Silver' ? 'bg-gray-100 text-gray-700' :
                  'bg-orange-200 text-orange-800'
                }`}>
                  {sponsor.level} Partner
                </div>
                <p className="text-gray-600">{sponsor.support}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Partnership Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipLevels.map((level, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${level.color} mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl`}>
                  {level.level[0]}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{level.level}</h3>
                <p className="text-xl text-purple-600 font-semibold mb-6">{level.amount}</p>
                <ul className="text-left space-y-2">
                  {level.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
              Download Sponsor Kit
            </button>
          </div>
        </div>
      </section>

      {/* Featured Sponsor of the Month */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Partner of the Month</h2>
          <div className="bg-gradient-to-r from-purple-600 to-rose-500 rounded-2xl p-12 text-white">
            <div className="text-8xl mb-6">☀️</div>
            <h3 className="text-3xl font-bold mb-4">Phoenix Suns</h3>
            <p className="text-xl mb-6">
              The Phoenix Suns organization has been instrumental in expanding our Makerspace program, 
              providing funding for new equipment and supporting our community workshop series.
            </p>
            <p className="text-lg italic">
              "Just like basketball, innovation requires practice, teamwork, and the courage to take the shot."
            </p>
          </div>
        </div>
      </section>

      {/* Sponsor Detail Modal */}
      {selectedSponsor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="text-center">
                  <div className="text-8xl mb-4">{selectedSponsor.logo}</div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedSponsor.name}</h2>
                  <p className="text-lg text-gray-600">{selectedSponsor.level} Partner</p>
                </div>
                <button
                  onClick={() => setSelectedSponsor(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Thanks</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedSponsor.message}</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">Impact</h3>
                  <p className="text-purple-700">{selectedSponsor.impact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sponsors;

