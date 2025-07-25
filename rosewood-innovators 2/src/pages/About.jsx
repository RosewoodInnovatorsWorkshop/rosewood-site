import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Rosewood Innovators Workshop equips students with creative, technical, and entrepreneurial 
                skills through hands-on programs and mentorship—preparing them for a future beyond 
                traditional education.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-blue-100 p-8 rounded-2xl">
              <div className="text-6xl mb-4">🌳</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Growing Future Leaders</h3>
              <p className="text-gray-600">
                Every student has the potential to create, innovate, and lead. We provide the soil, 
                sunlight, and support they need to flourish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Vision</h2>
          <p className="text-xl leading-relaxed">
            A future where students don't just consume knowledge—they build the world they want to live in.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Born from a Classroom</h3>
                <p className="text-gray-600">
                  Born out of a classroom, Rosewood was founded by Arizona educator Natalie Carpenter.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-cyan-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Student-Led Innovation</h3>
                <p className="text-gray-600">
                  After years of leading after-school programs, she saw what happened when students 
                  were trusted to lead, create, and invent.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-gray-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Beyond Traditional Education</h3>
                <p className="text-gray-600">
                  Rosewood is her answer to outdated educational models—one rooted in design thinking, 
                  play, and purpose.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-gray-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl">
                  👩‍🏫
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Natalie Carpenter</h3>
                <p className="text-gray-600 mb-6">
                  A passionate public educator with six years of experience leading youth programs in Arizona. 
                  She currently leads four after-school programs—Makerspace, Robotics, Student Government, 
                  and Garden Club—and is the founder of Rosewood Innovators Workshop.
                </p>
                <blockquote className="text-lg italic text-gray-700 border-l-4 border-blue-400 pl-4">
                  "Every student deserves the chance to build their own future, one prototype, pitch, 
                  or planting bed at a time."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

