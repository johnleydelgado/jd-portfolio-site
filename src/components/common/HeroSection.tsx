"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, ChevronDown, Apple, Smartphone, Server } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-0 pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-gray-800 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-gray-800 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        <div className="absolute inset-0 hero-pattern opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 relative">
          {/* Vertical Text (Desktop only) */}
          <div className="hidden xl:block absolute -left-20 top-0 bottom-0 flex flex-col justify-center items-center opacity-20">
            <span className="transform -rotate-90 whitespace-nowrap text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-transparent tracking-widest uppercase">
              Mobile & Full-stack
            </span>
          </div>

          <div className="space-y-6">
            {/* Welcome Badge */}
            <Badge
              variant="outline"
              className="inline-block px-4 py-1.5 rounded-full border-gray-700 bg-gray-800/50 backdrop-blur-sm text-xs font-bold tracking-widest uppercase text-gray-400"
            >
              Welcome to my portfolio
            </Badge>

            {/* Name */}
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight text-white">
              Johnley Mark <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-white">
                D. Delgado
              </span>
            </h1>

            {/* Accent Line */}
            <div className="h-1 w-24 bg-primary rounded-full" />

            {/* Description */}
            <p className="text-lg text-gray-400 max-w-md leading-relaxed font-light">
              Passionate Mobile & Full-stack Developer dedicated to crafting seamless digital experiences and robust applications that solve real-world problems.
            </p>

            {/* CTA Button */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#projects"
                className="px-8 py-3 bg-white text-black rounded-full font-display font-medium tracking-wide hover:bg-gray-200 transition-colors duration-300"
              >
                View Projects
              </Link>
            </div>

            {/* Tech Stack */}
            <div className="pt-8 flex items-center gap-4 text-gray-500">
              <span className="text-xs font-bold uppercase tracking-widest mr-2 border-r border-gray-700 pr-4 h-5 flex items-center">
                Tech Stack
              </span>
              <Apple className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
              <Smartphone className="w-5 h-5 hover:text-[#3DDC84] transition-colors cursor-pointer" />
              <svg
                className="w-5 h-5 hover:text-[#61dafb] transition-colors cursor-pointer"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
              <Server className="w-5 h-5 hover:text-[#339933] transition-colors cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Content - Portrait */}
        <div className="lg:col-span-7 relative flex justify-center lg:justify-end order-1 lg:order-2">
          {/* Concentric Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] border border-gray-800 rounded-full opacity-60" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[650px] sm:h-[650px] border border-gray-800 rounded-full opacity-40" />

          {/* Portrait Container */}
          <div className="relative z-10 w-[300px] h-[400px] sm:w-[380px] sm:h-[500px] rounded-t-full overflow-hidden shadow-2xl group">
            <Image
              src="/hero-portrait.png"
              alt="Portrait of Johnley Mark D. Delgado"
              fill
              className="object-cover object-top group-hover:scale-105 transition-all duration-700 ease-in-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40" />
          </div>

          {/* Social Links (Desktop only) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 items-center">
            <div className="h-16 w-[1px] bg-gray-700" />
            <Link
              href="https://github.com/johnleydelgado"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/johnley-delgado-698348262/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077b5] transition-colors transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <div className="h-16 w-[1px] bg-gray-700" />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle cursor-pointer">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
          Scroll Down
        </span>
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </div>
    </section>
  );
}
