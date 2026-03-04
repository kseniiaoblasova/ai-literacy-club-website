import { motion } from "motion/react";
import { MEETINGS } from "../data";
import { Calendar, Clock, MapPin, FileText, ExternalLink } from "lucide-react";

export function Meetings() {
  const upcomingMeetings = MEETINGS.filter(m => m.isUpcoming);
  const pastMeetings = MEETINGS.filter(m => !m.isUpcoming);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-white mb-6 glow-text"
        >
          Club Meetings
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          Join us for discussions, workshops, and hands-on exploration of Artificial Intelligence. All students are welcome!
        </motion.p>
      </div>

      <div className="space-y-24">
        {/* Upcoming Meetings */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-display font-bold text-white glow-text">Upcoming Meetings</h2>
            <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent flex-grow" />
          </div>
          
          {upcomingMeetings.length > 0 ? (
            <div className="grid gap-8">
              {upcomingMeetings.map((meeting, index) => (
                <motion.div
                  key={meeting.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-panel rounded-2xl p-6 md:p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-colors relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-cyan-400/20 transition-colors duration-500" />
                  
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10">
                    <div className="md:w-1/3 flex flex-col gap-4">
                      <div className="flex items-center gap-3 text-cyan-300">
                        <Calendar className="w-5 h-5" />
                        <span className="font-semibold">{meeting.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <Clock className="w-5 h-5 text-indigo-400" />
                        <span>{meeting.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <MapPin className="w-5 h-5 text-blue-400" />
                        <span>{meeting.location}</span>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold text-white mb-4">{meeting.title}</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {meeting.description}
                      </p>
                      
                      {meeting.materials && meeting.materials.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Meeting Materials</h4>
                          <div className="flex flex-wrap gap-3">
                            {meeting.materials.map((material, i) => (
                              <a
                                key={i}
                                href={material.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-sm text-indigo-300 hover:text-indigo-200 transition-colors"
                              >
                                <FileText className="w-4 h-4" />
                                {material.name}
                                <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="glass-panel rounded-2xl p-12 text-center border border-white/5">
              <p className="text-gray-400 text-lg">No upcoming meetings scheduled at the moment. Check back soon!</p>
            </div>
          )}
        </section>

        {/* Past Meetings */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-display font-bold text-white glow-text">Past Meetings</h2>
            <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-grow" />
          </div>
          
          <div className="grid gap-6">
            {pastMeetings.map((meeting, index) => (
              <motion.div
                key={meeting.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel rounded-xl p-6 border border-white/5 hover:bg-white/5 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="md:w-1/4 flex flex-col gap-2">
                    <span className="text-sm font-semibold text-blue-300">{meeting.date}</span>
                    <span className="text-xs text-gray-500">{meeting.time}</span>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-white mb-2">{meeting.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {meeting.description}
                    </p>
                    
                    {meeting.materials && meeting.materials.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {meeting.materials.map((material, i) => (
                          <a
                            key={i}
                            href={material.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-xs text-gray-300 transition-colors"
                          >
                            <FileText className="w-3 h-3" />
                            {material.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
