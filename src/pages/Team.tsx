import { motion } from "motion/react";
import { TEAM_MEMBERS } from "../data";
import { Mail } from "lucide-react";

export function Team() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-white mb-6 glow-text"
        >
          Executive Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          Meet the dedicated students leading the AI Literacy & Exploration Club at San Diego Mesa College.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {TEAM_MEMBERS.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-panel rounded-3xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-indigo-500/30"
          >
            <div className="relative aspect-square overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-galaxy-900 to-transparent opacity-60 z-10" />
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-display font-bold text-white mb-1 glow-text">{member.name}</h3>
                <p className="text-indigo-300 font-medium tracking-wide uppercase text-xs">{member.role}</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>
              
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center justify-center w-full px-4 py-2 rounded-xl bg-white/5 hover:bg-indigo-600 text-gray-300 hover:text-white transition-colors duration-300 border border-white/10 hover:border-transparent text-sm font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact {member.name.split(' ')[0]}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
