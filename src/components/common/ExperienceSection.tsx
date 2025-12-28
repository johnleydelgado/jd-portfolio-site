"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Download } from "lucide-react";

interface Experience {
  period: string;
  company: string;
  location: string;
  role: string;
  description: string | string[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    period: "Feb 2024 - Jul 2025",
    company: "Simple Cloudology",
    location: "Remote",
    role: "Mobile Developer",
    description:
      "Collaborated with cross-functional teams to conceptualize and launch high-performance mobile applications. Successfully increased app store ratings through UI/UX optimizations and streamlined development processes using agile methodologies. Maintained strict project budgets while integrating complex third-party APIs.",
    tags: ["Agile", "API Integration", "Mobile Optimization", "Budget Management"],
  },
  {
    period: "Jan 2022 - Aug 2023",
    company: "Indra Philippines, Inc",
    location: "Philippines",
    role: "Software Engineer",
    description: [
      "Enterprise Middleware Project: Backend development using Node.js, Airflow, Cloud Run, BigQuery, and Load Balancers.",
      "Crew Commission: Frontend development utilizing Firebase and React.js for seamless user interfaces.",
      "Corporate IT Portal: Full Stack development implementing Next.js and Prisma for robust internal tools.",
    ],
    tags: ["Node.js", "React.js", "Next.js", "Google Cloud", "Python"],
  },
  {
    period: "2016 - Apr 2022",
    company: "CHINET",
    location: "Makati City",
    role: "Full Stack Developer",
    description: [
      "MDRecords: Full Stack development leveraging Laravel, jQuery, AWS, and Digital Ocean for scalable deployment.",
      "Personalized Bible App: Mobile application development using Android Studio, Node.js backend, and optimized SQL/No-SQL database structures.",
    ],
    tags: ["Laravel", "AWS", "Android Studio", "SQL/No-SQL"],
  },
  {
    period: "Jan 2021 - Nov 2021",
    company: "Simple Cloudology",
    location: "Remote",
    role: "Lead Developer",
    description: [
      "EHR: Spearheaded development using React.js, Expo, and React Native for electronic health records systems.",
      "Mad Man Media: Led a team of 5 junior engineers in mobile development using Android Studio, ensuring code quality and timely delivery.",
    ],
    tags: ["React Native", "Expo", "Android Studio", "Team Leadership"],
  },
  {
    period: "Jan 2020 - Nov 2021",
    company: "Simple Cloudology",
    location: "Remote",
    role: "Lead Developer",
    description:
      "Project Therapute: Designed and developed a comprehensive solution using React Native, Xcode, Android Studio, and Node.js. Focused on creating a scalable architecture for mobile health applications.",
    tags: ["React Native", "Node.js", "Xcode"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border pb-6">
          <div className="max-w-2xl">
            <h4 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-2">
              Resume
            </h4>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              A timeline of my professional career, showcasing my roles and
              contributions in software development across various industries.
            </p>
          </div>
          <h2 className="mt-6 md:mt-0 text-5xl md:text-7xl font-display font-bold uppercase text-white opacity-90 tracking-tight">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative border-b border-border py-12 transition-all duration-300 hover:bg-secondary/40 rounded-lg px-4 -mx-4"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Date */}
                <div className="lg:col-span-3">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4 opacity-70" />
                    <span className="font-display text-lg tracking-wide uppercase font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Company */}
                <div className="lg:col-span-3">
                  <h3 className="font-display text-2xl font-bold uppercase text-white mb-1 group-hover:text-indigo-400 transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-gray-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </p>
                </div>

                {/* Role & Description */}
                <div className="lg:col-span-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <h4 className="text-xl font-display font-medium text-gray-100 mb-3">
                        {exp.role}
                      </h4>
                      {Array.isArray(exp.description) ? (
                        <ul className="list-disc list-outside pl-4 space-y-2 text-gray-400 text-sm md:text-base font-light">
                          {exp.description.map((item, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/^([^:]+:)/, '<strong>$1</strong>') }} />
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
                          {exp.description}
                        </p>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="mt-auto pt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="px-3 py-1 text-xs font-mono rounded-full border-gray-700 text-gray-300 bg-white/5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-border text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-light mb-4 md:mb-0">
            Detailed project history available upon request.
          </p>
          <Link href="/resume.pdf" target="_blank" download>
            <Button
              variant="default"
              className="bg-white text-gray-900 hover:bg-gray-200 transition-colors shadow-sm"
            >
              Download Full Resume
              <Download className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
