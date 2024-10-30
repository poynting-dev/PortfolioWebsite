import React from 'react';
import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-white">Experience</h2>

        <div className="space-y-12">
          {/* EPAM Systems - Software Engineer */}
          <div className="bg-gray-900 rounded-xl p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Building2 size={20} />
                  <h3 className="text-xl font-semibold">EPAM Systems</h3>
                </div>
                <h4 className="text-lg text-white">Software Engineer</h4>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={16} />
                <span>May 2022 - Present</span>
              </div>
            </div>

            <div className="space-y-3 text-gray-300">
              <p>Project: LSEG Thomson One</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Built Thomson One AdminTools and Thomson ONE</li>
                <li>
                  Integrated C++ COM components with C# APIs, enabling
                  interoperation between React, TypeScript, and Edge WebView2
                </li>
                <li>
                  Solved critical Chromium Embedded Framework PrintPDF issue for
                  170,000 users by adding custom headers and footers
                </li>
                <li>
                  Managed production incidents and performed root cause analysis
                </li>
                <li>
                  Developed dynamic port discovery for duplex communication
                  between desktop and web applications
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  ASP.NET MVC
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  C#
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  REST API
                </span>
              </div>
            </div>
          </div>

          {/* EPAM Systems - Intern */}
          <div className="bg-gray-900 rounded-xl p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Building2 size={20} />
                  <h3 className="text-xl font-semibold">EPAM Systems</h3>
                </div>
                <h4 className="text-lg text-white">Software Engineer Intern</h4>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar size={16} />
                <span>Jan 2022 - May 2022</span>
              </div>
            </div>

            <div className="space-y-3 text-gray-300">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Researched and integrated Microsoft Graph API and various OTP
                  services
                </li>
                <li>Focused on both front-end and back-end operations</li>
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  ASP.NET MVC
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  Bootstrap
                </span>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
