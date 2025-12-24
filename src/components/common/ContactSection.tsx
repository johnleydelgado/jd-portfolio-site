"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Send, Github, Linkedin, MapPin, CheckCircle, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const email = "gamer.section102@gmail.com";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        {/* Diagonal accent line */}
        <div className="absolute top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform -rotate-1" />
      </div>

      {/* Giant background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-display text-[20vw] font-bold text-white/[0.02] uppercase tracking-tighter whitespace-nowrap">
          CONTACT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - Asymmetric */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-gradient-to-r from-blue-400 to-blue-600" />
                <span className="text-xs uppercase tracking-[0.3em] text-blue-400 font-medium">
                  Get In Touch
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9] mb-6">
                Let&apos;s Work
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-white">
                  Together
                </span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                Have a project in mind? I&apos;m always open to discussing new opportunities and bringing ideas to life.
              </p>
            </div>

            {/* Floating badge */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-20" />
              <div className="relative bg-[#111] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping opacity-75" />
                  </div>
                  <span className="text-white font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Email Card - Hero */}
            <Link
              href={`mailto:${email}`}
              className="group block relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />
              <div className="relative bg-[#111] border border-white/10 rounded-2xl p-8 group-hover:border-transparent transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center border border-blue-500/20">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Email me at</p>
                <p className="text-xl text-white font-medium group-hover:text-blue-400 transition-colors">
                  {email}
                </p>
              </div>
            </Link>

            {/* Location Card */}
            <div className="relative bg-[#111] border border-white/10 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center border border-emerald-500/20">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Based in</p>
              <p className="text-xl text-white font-medium">Philippines</p>
              <p className="text-gray-500 mt-1">Available for remote work worldwide</p>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">
                Connect with me
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/johnleydelgado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-white rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300" />
                  <div className="relative w-14 h-14 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <Github className="w-5 h-5" />
                  </div>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/johnley-delgado-698348262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-[#0077b5] rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300" />
                  <div className="relative w-14 h-14 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-[#0077b5] group-hover:border-transparent transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Form glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/20 via-transparent to-transparent rounded-3xl blur-xl opacity-50" />

              <div className="relative bg-[#0d0d0d] border border-white/10 rounded-3xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <h3 className="font-display text-2xl font-bold text-white">
                    Send a Message
                  </h3>
                </div>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-pulse" />
                      <CheckCircle className="relative w-20 h-20 text-green-400" />
                    </div>
                    <p className="text-white font-display text-2xl font-bold mb-2">
                      Opening Email Client
                    </p>
                    <p className="text-gray-400">
                      Complete sending from your mail app
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className={`text-sm font-medium transition-colors duration-200 ${
                            focusedField === 'name' ? 'text-blue-400' : 'text-gray-400'
                          }`}
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
                        />
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className={`text-sm font-medium transition-colors duration-200 ${
                            focusedField === 'email' ? 'text-blue-400' : 'text-gray-400'
                          }`}
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className={`text-sm font-medium transition-colors duration-200 ${
                          focusedField === 'subject' ? 'text-blue-400' : 'text-gray-400'
                        }`}
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        placeholder="Project inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all duration-300"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className={`text-sm font-medium transition-colors duration-200 ${
                          focusedField === 'message' ? 'text-blue-400' : 'text-gray-400'
                        }`}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="group relative w-full mt-4"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-70 group-hover:opacity-100 blur transition-all duration-300" />
                      <div className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-display font-medium text-lg tracking-wide py-4 px-8 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </div>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 flex items-center justify-center">
          <div className="flex items-center gap-4 text-gray-600">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gray-700" />
            <span className="text-xs uppercase tracking-[0.3em]">Let&apos;s create something great</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
