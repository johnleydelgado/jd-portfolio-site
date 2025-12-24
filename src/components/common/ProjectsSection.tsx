"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Globe, Smartphone } from "lucide-react";

interface Project {
  title: string;
  description: string;
  type: "web" | "mobile";
  url: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "MDRecords",
    description:
      "A comprehensive Electronic Health Records (EHR) system designed to streamline medical documentation and patient management. Built with scalable architecture for healthcare providers.",
    type: "web",
    url: "https://mdrecords.org/",
    image: "/projects/mdrecords.png",
    tags: ["Laravel", "jQuery", "AWS", "Digital Ocean", "Full Stack"],
    featured: true,
  },
  {
    title: "Volanta",
    description:
      "A high-performance mobile application delivering seamless user experiences. Developed with modern mobile technologies focusing on UI/UX optimization and cross-platform compatibility.",
    type: "mobile",
    url: "https://volanta.app/",
    image: "/projects/volanta.png",
    tags: ["React Native", "Mobile", "iOS", "Android", "API Integration"],
    featured: true,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-card py-20 lg:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border pb-6">
          <div className="max-w-2xl">
            <h4 className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-2">
              Portfolio
            </h4>
            <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              A showcase of my work, featuring web applications and mobile apps
              that I&apos;ve built and contributed to.
            </p>
          </div>
          <h2 className="mt-6 md:mt-0 text-5xl md:text-7xl font-display font-bold uppercase text-white opacity-90 tracking-tight">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-secondary rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.type === "web" ? (
                    <Globe className="w-20 h-20 text-gray-700" />
                  ) : (
                    <Smartphone className="w-20 h-20 text-gray-700" />
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="outline"
                    className="bg-black/50 backdrop-blur-sm border-gray-700 text-white uppercase text-xs tracking-wider"
                  >
                    {project.type === "web" ? "Web App" : "Mobile App"}
                  </Badge>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="px-2 py-0.5 text-xs font-mono rounded border-gray-700 text-gray-400 bg-white/5"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <Link href={project.url} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 pt-10 border-t border-border text-center">
          <p className="text-gray-400 font-light mb-6">
            Explore more of my work and open-source contributions
          </p>
          <Link
            href="https://github.com/johnleydelgado"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="default"
              className="bg-white text-gray-900 hover:bg-gray-200 transition-colors shadow-sm"
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View GitHub Profile
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
