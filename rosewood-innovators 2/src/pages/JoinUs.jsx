import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const JoinUs = () => {
  const [selectedRole, setSelectedRole] = useState('student');

  const roles = {
    student: {
      title: 'Students',
      icon: '🎓',
      description: 'Join a club, attend an event, or feature your project.',
      actions: [
        { title: 'Join a Program', description: 'Sign up for one of our hands-on learning programs' },
        { title: 'Attend Events', description: 'Come to our workshops, showcases, and competitions' },
        { title: 'Submit Your Project', description: 'Share your creative work with our community' },
        { title: 'Become a Mentor', description: 'Help younger students with their projects' }
      ],
      cta: 'Get Started Today'
    },
    parent: {
      title: 'Parents',
      icon: '👨‍👩‍👧‍👦',
      description: 'Sign up for our newsletter, enroll your child, or volunteer.',
      actions: [
        { title: 'Enroll Your Child', description: 'Register for programs that match your child\'s interests' },
        { title: 'Join Our Newsletter', description: 'Stay updated on events, achievements, and opportunities' },
        { title: 'Volunteer Your Time', description: 'Help with events, mentoring, or program support' },
        { title: 'Share Your Expertise', description: 'Guest speak or lead workshops in your field' }
      ],
      cta: 'Connect With Us'
    },
    sponsor: {
      title: 'Sponsors',
      icon: '🤝',
      description: 'Download our sponsor kit and discover how your support transforms lives.',
      actions: [
        { title: 'Download Sponsor Kit', description: 'Learn about partnership opportunities and impact' },
        { title: 'Fund a Program', description: 'Support specific programs that align with your values' },
        { title: 'Provide Equipment', description: 'Donate tools, materials, or technology' },
        { title: 'Offer Internships', description: 'Give students real-world experience' }
      ],
      cta: 'Partner With Us'
    },
    volunteer: {
      title: 'Volunteers',
      icon: '🙋‍♀️',
      description: 'Offer your skills or time at an upcoming event or program.',
      actions: [
        { title: 'Event Support', description: 'Help with setup, registration, and coordination' },
        { title: 'Mentoring', description: 'Guide students through projects and challenges' },
        { title: 'Skills Workshops', description: 'Teach specialized skills in your area of expertise' },
        { title: 'Administrative Help', description: 'Support with communications, planning, and logistics' }
      ],
      cta: 'Start Volunteering'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Community</h1>
          <p className="text-xl leading-relaxed">
            Whether you're a student, parent, sponsor, or volunteer, there's a place for you 
            in the Rosewood Innovators family
          </p>
        </div>
      </section>

      {/* Role Selector */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(roles).map(([key, role]) => (
              <button
                key={key}
                onClick={() => setSelectedRole(key)}
                className={`p-6 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 ${
                  selectedRole === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200 shadow-md'
                }`}
              >
                <div className="text-4xl mb-3">{role.icon}</div>
                <h3 className="font-semibold">{role.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Role Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="text-8xl mb-4">{roles[selectedRole].icon}</div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{roles[selectedRole].title}</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {roles[selectedRole].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {roles[selectedRole].actions.map((action, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{action.title}</h3>
                  <p className="text-gray-600">{action.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 px-12 py-4 text-lg font-semibold rounded-full"
              >
                {roles[selectedRole].cta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-100 to-rose-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Growing Community</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <p className="text-gray-600">Students Served</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-rose-500 mb-2">50+</div>
              <p className="text-gray-600">Community Projects</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
              <p className="text-gray-600">Active Volunteers</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-teal-500 mb-2">10+</div>
              <p className="text-gray-600">Partner Organizations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;

