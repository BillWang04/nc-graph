import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Caleb Stam',
      email: 'cstam@ucsd.edu',
      initials: 'CS',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      id: 2,
      name: 'Bill Wang',
      email: 'blw002@ucsd.edu',
      initials: 'BW',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      name: 'Eduardo Spiegel',
      email: 'espiegel@ucsd.edu',
      initials: 'ES',
      gradient: 'from-pink-500 to-red-600'
    }
  ];

  const advisors = [
    {
      id: 1,
      name: 'Yusu Wang',
      email: 'yusuwang@ucsd.edu',
      role: 'Faculty Advisor'
    },
    {
      id: 2,
      name: 'Gal Mishne',
      email: 'gmishne@ucsd.edu',
      role: 'Faculty Advisor'
    }
  ];

  return (
    <section id="team" className="py-20 px-6 bg-dark-deep bg-opacity-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Our <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">Team</span>
        </h2>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-dark bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-xl p-8 border border-gray-800 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl font-bold text-white">{member.initials}</span>
              </div>
              
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-primary/80 mb-1">{member.email}</p>
              
         
            </div>
          ))}
        </div>

        {/* Advisors */}
        <div className="bg-dark-light bg-opacity-10 rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-6 text-center">Faculty Advisors</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {advisors.map((advisor) => (
              <div 
                key={advisor.id}
                className="flex items-center p-4 bg-dark bg-opacity-50 rounded-lg border border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-tertiary to-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-white">{advisor.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold">{advisor.name}</h4>
                  <p className="text-primary/80 text-sm">{advisor.email}</p>
                  <p className="text-gray-300 mt-1">{advisor.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Acknowledgments */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Acknowledgments</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We would like to thank the authors of "A Neural Collapse Perspective on Feature Evolution in Graph Neural Networks" for their foundational work and open-source code that made this project possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;