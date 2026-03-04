import { SOCIAL_LINKS } from "../data";
import { Link } from "react-router-dom";
import { Instagram, MessageSquare, Video, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="glass-panel border-t border-white/10 mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-4 glow-text">
              AI Literacy & Exploration Club
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              San Diego Mesa College's premier community for exploring, understanding, and shaping the future of Artificial Intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/meetings" className="text-gray-400 hover:text-white transition-colors duration-200">Meetings</Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors duration-200">Executive Team</Link>
              </li>
              <li>
                <a href={SOCIAL_LINKS.registration} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200 flex items-center gap-1">
                  Join the Club <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4 mb-6">
              <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#5865F2] transition-colors duration-200">
                <span className="sr-only">Discord</span>
                <MessageSquare className="h-6 w-6" />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E1306C] transition-colors duration-200">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">TikTok</span>
                <Video className="h-6 w-6" />
              </a>
            </div>
            
            <a 
              href={SOCIAL_LINKS.newsletter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              <Mail className="w-4 h-4 mr-2" />
              Subscribe to Newsletter
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AI Literacy & Exploration Club. San Diego Mesa College.
          </p>
        </div>
      </div>
    </footer>
  );
}
