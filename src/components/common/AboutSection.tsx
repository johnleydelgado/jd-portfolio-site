"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  {
    title: "Mobile Development",
    description: "React Native, Flutter, iOS (Swift), Android (Kotlin), Expo, Mobile UI/UX Principles.",
  },
  {
    title: "Front-End Web",
    description: "HTML5, CSS3, React.js, Next.js, TypeScript, Tailwind CSS, Bootstrap, Material UI.",
  },
  {
    title: "Back-End & Cloud",
    description: "Node.js, Express, Python, Django, PostgreSQL, MongoDB, Firebase, AWS, Docker.",
  },
  {
    title: "Tools & Workflow",
    description: "Git, GitHub/GitLab, Jira, Figma, Agile/Scrum, CI/CD pipelines, Unit Testing.",
  },
];

const personalInfo = [
  { label: "Name", value: "Johnley Mark D. Delgado" },
  { label: "Nationality", value: "Filipino" },
  { label: "Experience", value: "5+ Years" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-card py-16 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Text */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white">
              About
            </h2>
            <div className="h-1 w-12 bg-primary" />
            <p className="text-gray-400 text-sm leading-relaxed text-justify">
              Hello! I&apos;m Johnley Mark, a versatile Mobile & Full-stack Developer. I specialize in building high-performance mobile applications and robust web solutions. I am committed to continuous learning and delivering top-tier digital products.
            </p>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-y-2 text-sm mt-4">
              {personalInfo.map((info) => (
                <div key={info.label} className="contents">
                  <span className="text-gray-500 font-bold">{info.label} :</span>
                  <span className="text-gray-200">{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <Card
                key={skill.title}
                className="bg-secondary border-border hover:border-primary transition-colors duration-300"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="font-display font-bold text-lg text-white">
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-gray-400 leading-relaxed font-mono">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
