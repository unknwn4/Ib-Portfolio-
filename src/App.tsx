/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Camera, 
  Code, 
  Trophy, 
  Download, 
  Mail, 
  Instagram, 
  Facebook, 
  ArrowRight,
  MapPin,
  GraduationCap,
  Quote,
  Calendar,
  Award,
  ExternalLink
} from "lucide-react";
import { useRef } from "react";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const handleDownloadResume = () => {
    // Creating a dummy resume content for demonstration
    const resumeContent = `
IBEREDEM JOHN
Software Developer & Creator
Email: iberedemjohn2024@gmail.com
Location: Uyo, Nigeria

EDUCATION
Nigerian Christian Institute (Class of 2025)
GPA: 3.16
Certification: WASSCE (June 2025)

EXPERIENCE
- Social Media Manager, Nigerian Christian Institute (2025 - Present)
- Photography Club President (2022 - 2025)
- Varsity Basketball Captain (2023 - 2024)

SKILLS
HTML, Python, Photography, Social Media Management
    `;
    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Iberedem_John_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-mesh">
      {/* Background Parallax Element */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 blur-[120px] rounded-full" />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-serif italic tracking-tight"
        >
          IJ.
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium opacity-60"
        >
          <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
          <a href="#journey" className="hover:opacity-100 transition-opacity">Journey</a>
          <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest font-semibold text-emerald-400">
              Class of 2025 • Nigerian Christian Institute
            </span>
          </div>

          <h1 className="text-[12vw] md:text-[8vw] font-serif leading-[0.9] tracking-tighter mb-8">
            Iberedem <br />
            <span className="italic opacity-50">John</span>
          </h1>

          <div className="flex flex-wrap gap-12 mb-12">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Role</span>
              <span className="text-lg font-light">Aspiring Developer & Creator</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest opacity-40 mb-2">GPA</span>
              <span className="text-lg font-light">3.16 / 4.0</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest opacity-40 mb-2">Location</span>
              <span className="text-lg font-light">Uyo, Nigeria</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadResume}
              className="px-8 py-4 bg-white text-black rounded-full font-medium flex items-center gap-2 hover:bg-emerald-400 transition-colors"
            >
              <Download size={18} />
              Download Resume
            </motion.button>
            <div className="flex items-center gap-6 px-4">
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default">
                <Trophy size={18} />
                <span className="text-xs uppercase tracking-wider">Hoops</span>
              </div>
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default">
                <Camera size={18} />
                <span className="text-xs uppercase tracking-wider">Lens</span>
              </div>
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default">
                <Code size={18} />
                <span className="text-xs uppercase tracking-wider">Code</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20"
        >
          <div className="w-[1px] h-12 bg-white" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-24 border-t border-white/5">
        <div className="grid md:grid-template-columns-[1fr_1.5fr] gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <h2 className="text-4xl font-serif italic mb-6">The Story.</h2>
            <div className="space-y-6 opacity-60 text-lg leading-relaxed font-light">
              <p>
                I'm a 16-year-old recent graduate from the Nigerian Christian Institute. 
                My journey into the world of technology began in my junior year when I 
                taught myself HTML and Python, fueled by a curiosity about how the 
                digital world is built.
              </p>
              <p>
                Beyond the screen, I'm often found on the basketball court or behind 
                 a camera lens, capturing the raw emotions of life in Uyo.
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden group"
            >
              <Quote className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity" size={120} />
              <p className="text-3xl md:text-4xl font-serif italic leading-tight mb-8 relative z-10">
                "You have to write your own story."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-emerald-500" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">Personal Mantra</span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                <GraduationCap className="mb-4 text-emerald-400" size={24} />
                <h3 className="text-sm uppercase tracking-widest font-semibold mb-2 opacity-40">Certification</h3>
                <p className="text-lg font-light">WASSCE (June 2025)</p>
              </div>
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
                <ArrowRight className="mb-4 text-blue-400" size={24} />
                <h3 className="text-sm uppercase tracking-widest font-semibold mb-2 opacity-40">Next Step</h3>
                <p className="text-lg font-light">College & Freelance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-32 px-6 md:px-24 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-30 mb-4 block">Timeline</span>
            <h2 className="text-6xl font-serif">The Journey</h2>
          </div>

          <div className="space-y-24">
            {/* Timeline Item 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-0 grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-16 items-center"
            >
              <div className="md:text-right">
                <div className="flex items-center gap-2 md:justify-end mb-2">
                  <Calendar size={14} className="opacity-40" />
                  <span className="text-xs font-mono opacity-40">2025 — PRESENT</span>
                </div>
                <h3 className="text-2xl font-serif italic mb-2">Social Media Manager</h3>
                <p className="text-sm opacity-50">Nigerian Christian Institute</p>
              </div>
              <div className="absolute left-0 md:relative w-4 h-4 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10" />
              <div className="opacity-60 font-light leading-relaxed">
                Managing the school's digital presence on Facebook, crafting narratives that connect the community and showcase our values.
              </div>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-0 grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-16 items-center"
            >
              <div className="md:order-3">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={14} className="opacity-40" />
                  <span className="text-xs font-mono opacity-40">2022 — 2025</span>
                </div>
                <h3 className="text-2xl font-serif italic mb-2">Photography Club President</h3>
                <p className="text-sm opacity-50">Visual Storytelling</p>
              </div>
              <div className="absolute left-0 md:relative w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10" />
              <div className="md:text-right opacity-60 font-light leading-relaxed">
                Captured portraits for 180 students and designed the 2024 yearbook cover. Led a team of young photographers to document school life.
              </div>
            </motion.div>

            {/* Timeline Item 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-0 grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-16 items-center"
            >
              <div className="md:text-right">
                <div className="flex items-center gap-2 md:justify-end mb-2">
                  <Calendar size={14} className="opacity-40" />
                  <span className="text-xs font-mono opacity-40">2023 — 2024</span>
                </div>
                <h3 className="text-2xl font-serif italic mb-2">Varsity Basketball Captain</h3>
                <p className="text-sm opacity-50">Leadership & Grit</p>
              </div>
              <div className="absolute left-0 md:relative w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10" />
              <div className="opacity-60 font-light leading-relaxed">
                Led the team to district finals and earned MVP honors three times. Developed a culture of discipline and teamwork on and off the court.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-7xl font-serif italic mb-12">Let's build <br /> something.</h2>
            <div className="space-y-8">
              <a 
                href="mailto:iberedemjohn2024@gmail.com" 
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">Email</p>
                  <p className="text-lg">iberedemjohn2024@gmail.com</p>
                </div>
              </a>
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com/ibeeredem" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/ibe_re_dem?igsh=MnJyYnA4bnphMWI4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="p-12 rounded-3xl bg-white/[0.02] border border-white/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                  placeholder="What's on your mind?"
                />
              </div>
              <button className="w-full py-4 bg-emerald-500 text-black rounded-xl font-bold hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2">
                Send Message
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-[10px] uppercase tracking-[0.2em] font-medium">
        <p>© 2026 Iberedem John. All rights reserved.</p>
        <div className="flex gap-8">
          <p>Built with Passion</p>
          <p>Uyo, Nigeria</p>
        </div>
      </footer>
    </div>
  );
}
