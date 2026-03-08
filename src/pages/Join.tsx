import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";

type FormData = {
    fullName: string;
    email: string;
    phone: string;
    isMesaStudent: string;
    major: string;
    aiKnowledge: string;
    topics: Record<string, boolean>;
    availableMondays: string;
    learnedAbout: Record<string, boolean>;
    suggestions: string;
};

const TOPICS_LIST = [
    "Fundamentals of AI and Machine Learning",
    "Ethical Implications of AI",
    "Practical AI Tools and Applications (e.g., ChatGPT, Midjourney)",
    "Career Paths in AI and Tech",
    "Hands-on AI Projects and Workshops",
    "Guest Speakers and Industry Professionals"
];

const LEARNED_ABOUT_LIST = [
    "Friend/Classmate",
    "Professor/Instructor",
    "San Diego Mesa College Website/Email",
    "Social Media",
    "Campus Flyer/Poster",
    "Promotional Event/Announcement",
    "Other"
];

export function Join() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [issubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        isMesaStudent: "",
        major: "",
        aiKnowledge: "",
        topics: TOPICS_LIST.reduce((acc, curr) => ({ ...acc, [curr]: false }), {}),
        availableMondays: "",
        learnedAbout: LEARNED_ABOUT_LIST.reduce((acc, curr) => ({ ...acc, [curr]: false }), {}),
        suggestions: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            const [category, item] = name.split("|");

            setFormData(prev => ({
                ...prev,
                [category as keyof FormData]: {
                    ...(prev[category as keyof FormData] as Record<string, boolean>),
                    [item]: checked
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        // Format data for webhook payload
        const payload = {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            isMesaStudent: formData.isMesaStudent,
            major: formData.major,
            aiKnowledgeLevel: formData.aiKnowledge,
            topicsOfInterest: Object.entries(formData.topics).filter(([_, v]) => v).map(([k]) => k),
            availableMondays230: formData.availableMondays,
            learnedAboutClubVia: Object.entries(formData.learnedAbout).filter(([_, v]) => v).map(([k]) => k),
            suggestions: formData.suggestions,
            submissionTime: new Date().toISOString()
        };

        try {
            const response = await fetch("https://n8n-production-cf3f.up.railway.app/webhook/6f790fd5-7bf0-43fb-a39c-5f60ac325384", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Failed to submit form. Please try again.");
            }

            setIsSubmitted(true);
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (issubmitted) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-20 md:py-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-panel p-10 md:p-16 rounded-3xl text-center flex flex-col items-center border border-cyan-500/30"
                >
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 glow-text">
                        Welcome to the Club!
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
                        Thank you for filling out the form. Your information has been successfully received, and we'll be reaching out to you shortly.
                    </p>
                    <a
                        href="/"
                        className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                    >
                        Return to Homepage
                    </a>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
            <div className="text-center mb-12">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-display font-extrabold tracking-tighter text-white mb-4 glow-text"
                >
                    Join the Club
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-gray-300 max-w-2xl mx-auto"
                >
                    Interested in learning more about Artificial Intelligence, its fascinating use cases and impact on the world? Fill out this form and we will reach out to you shortly!
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-panel rounded-3xl p-6 md:p-10 border border-blue-500/20"
            >
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-white mb-2" htmlFor="fullName">
                                Full name <span className="text-cyan-400">*</span>
                            </label>
                            <input
                                required
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-2" htmlFor="email">
                                Preferred email <span className="text-cyan-400">*</span>
                            </label>
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-2" htmlFor="phone">
                                Phone number <span className="text-cyan-400">*</span>
                            </label>
                            <input
                                required
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                                placeholder="(123) 456-7890"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-3">
                                Are you a Mesa student? (enrolled in at least 1 course) <span className="text-cyan-400">*</span>
                            </label>
                            <div className="space-y-3">
                                {["Yes", "No"].map(option => (
                                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            required
                                            type="radio"
                                            name="isMesaStudent"
                                            value={option}
                                            checked={formData.isMesaStudent === option}
                                            onChange={handleChange}
                                            className="w-5 h-5 bg-white/5 border border-white/20 text-cyan-500 focus:ring-cyan-500/50 focus:ring-offset-slate-900 cursor-pointer"
                                        />
                                        <span className="text-gray-300 group-hover:text-white transition-colors">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-2" htmlFor="major">
                                Major/Area of Study <span className="text-cyan-400">*</span>
                            </label>
                            <input
                                required
                                type="text"
                                id="major"
                                name="major"
                                value={formData.major}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                                placeholder="Computer Science, Business, etc."
                            />
                        </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

                    {/* AI Interest & Experience */}
                    <div className="space-y-8">
                        <div>
                            <label className="block text-sm font-semibold text-white mb-3">
                                How would you rate your current knowledge of Artificial Intelligence? <span className="text-cyan-400">*</span>
                            </label>
                            <div className="space-y-3">
                                {["1-No knowledge", "2", "3", "4", "5-Expert"].map((option) => (
                                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            required
                                            type="radio"
                                            name="aiKnowledge"
                                            value={option}
                                            checked={formData.aiKnowledge === option}
                                            onChange={handleChange}
                                            className="w-5 h-5 bg-white/5 border border-white/20 text-cyan-500 focus:ring-cyan-500/50 focus:ring-offset-slate-900 cursor-pointer"
                                        />
                                        <span className="text-gray-300 group-hover:text-white transition-colors">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-3">
                                Which of the following topics are you most interested in exploring with the club? (Select all that apply) <span className="text-cyan-400">*</span>
                            </label>
                            <div className="space-y-3">
                                {TOPICS_LIST.map(topic => (
                                    <label key={topic} className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name={`topics|${topic}`}
                                            checked={formData.topics[topic]}
                                            onChange={handleChange}
                                            className="mt-1 w-5 h-5 rounded bg-white/5 border border-white/20 text-indigo-500 focus:ring-indigo-500/50 focus:ring-offset-slate-900 cursor-pointer"
                                        />
                                        <span className="text-gray-300 group-hover:text-white transition-colors leading-snug">{topic}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-3">
                                Are you available on Mondays at 2:30 pm? <span className="text-cyan-400">*</span>
                            </label>
                            <div className="space-y-3">
                                {["Yes", "No"].map(option => (
                                    <label key={`monday-${option}`} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            required
                                            type="radio"
                                            name="availableMondays"
                                            value={option}
                                            checked={formData.availableMondays === option}
                                            onChange={handleChange}
                                            className="w-5 h-5 bg-white/5 border border-white/20 text-cyan-500 focus:ring-cyan-500/50 focus:ring-offset-slate-900 cursor-pointer"
                                        />
                                        <span className="text-gray-300 group-hover:text-white transition-colors">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

                    {/* Feedback */}
                    <div className="space-y-8">
                        <div>
                            <label className="block text-sm font-semibold text-white mb-3">
                                How did you learn about the club? <span className="text-cyan-400">*</span>
                            </label>
                            <div className="space-y-3">
                                {LEARNED_ABOUT_LIST.map(source => (
                                    <label key={source} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name={`learnedAbout|${source}`}
                                            checked={formData.learnedAbout[source]}
                                            onChange={handleChange}
                                            className="w-5 h-5 rounded bg-white/5 border border-white/20 text-blue-500 focus:ring-blue-500/50 focus:ring-offset-slate-900 cursor-pointer"
                                        />
                                        <span className="text-gray-300 group-hover:text-white transition-colors">{source}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-white mb-2" htmlFor="suggestions">
                                Please share any suggestions you have for club activities, meetings, or agenda
                            </label>
                            <textarea
                                id="suggestions"
                                name="suggestions"
                                value={formData.suggestions}
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all resize-none"
                                placeholder="I would love to see..."
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                            {error}
                        </div>
                    )}

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 glow-border flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {isSubmitting ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Submit Application
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
