import React from 'react';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-white">Achievements</h2>
        
        <div className="bg-gray-900 rounded-xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="text-blue-400">
              <Trophy size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">EPAM India Hackathons</h3>
              <ul className="space-y-3 text-gray-300">
                <li>Winner of 4 hackathons:
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>2 Coding DOJO</li>
                    <li>1 ENGX Design KATA</li>
                    <li>1 Architectural KATA</li>
                  </ul>
                </li>
                <li>Finalist in EPAM Product Coding League 2024</li>
                <li>Semi-finalist in EPAM Product Coding League 2023</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;