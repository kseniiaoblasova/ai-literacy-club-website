import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { TIMELINE_EVENTS, SOCIAL_LINKS } from "../data";
import { ArrowRight } from "lucide-react";


export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-8"
        >
          <span className="text-sm font-medium tracking-wide">San Diego Mesa College</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter text-white mb-6 md:text-left"
        >
          AI Literacy & <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Exploration Club
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl md:text-left"
        >
          Empowering students to navigate the future of Artificial Intelligence through education, critical thinking, and hands-on exploration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
        >
          <Link
            to="/join"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 glow-border flex items-center justify-center gap-2 group"
          >
            Join the Club
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-panel text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Join Discord
          </a>
        </motion.div>
      </div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-32"
      >
        <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center">
              Our Mission
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center mb-4">
                  <span className="font-mono text-sm font-bold text-cyan-400">01</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Critical Thinking</h3>
                <p className="text-gray-400 leading-relaxed">
                  We dig into how AI actually works — not just what it can do, but when to trust it, when to question it, and why it matters.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center mb-4">
                  <span className="font-mono text-sm font-bold text-cyan-400">02</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ethical Awareness</h3>
                <p className="text-gray-400 leading-relaxed">
                  AI raises real questions about bias, privacy, and power. We talk about them honestly, because someone has to.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center mb-4">
                  <span className="font-mono text-sm font-bold text-cyan-400">03</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Accessible Creativity</h3>
                <p className="text-gray-400 leading-relaxed">
                  You don't need a CS degree to use AI creatively. We make it click for everyone, whatever your background.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center mb-4">
                  <span className="font-mono text-sm font-bold text-cyan-400">04</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Professional Upskilling</h3>
                <p className="text-gray-400 leading-relaxed">
                  The job market is changing fast. We help you stay ahead by actually using the tools, not just reading about them.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center mb-4">
                  <span className="font-mono text-sm font-bold text-cyan-400">05</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Community Building</h3>
                <p className="text-gray-400 leading-relaxed">
                  Some of the best ideas start in conversation. We're a group of curious people figuring this out together.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-xl border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center mb-4">
                  <span className="font-mono text-sm font-bold text-cyan-400">06</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Leadership & Initiative</h3>
                <p className="text-gray-400 leading-relaxed">
                  Have an idea? Pitch it. Want to lead a session? Go for it. This club grows when you do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Our Journey
          </h2>
          <p className="text-gray-400">The evolution of our community at San Diego Mesa College.</p>
        </div>

        <div className="relative border-l-2 border-blue-500/30 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-12 pb-8">
          {TIMELINE_EVENTS.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(0,255,255,1)] z-10"
              />

              <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"
                }`}>
                <div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold tracking-wider uppercase mb-3">
                    {event.date}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
