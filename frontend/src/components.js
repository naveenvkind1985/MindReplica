import React, { useState, useEffect } from 'react';

// Header Component
export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">InterviewAI Pro</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              Features
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              Reviews
            </a>
            <a href="#download" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              Download
            </a>
            <div className="relative">
              <a href="#desktop" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                Desktop App
                <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  New
                </span>
              </a>
            </div>
          </nav>

          {/* Sign In Button */}
          <div className="flex items-center">
            <button className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors mr-4">
              Sign in →
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
export const HeroSection = () => {
  const [currentMetric, setCurrentMetric] = useState(0);
  const metrics = [
    { number: "42,150+", label: "users" },
    { number: "15,000+", label: "interviews" },
    { number: "95%", label: "success rate" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Feature Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
              🆓 100% FREE - NO SUBSCRIPTION NEEDED
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Real-Time
                <br />
                <span className="text-teal-600">AI Interview Assistant</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Automatically get an answer to every job interview question 
                with ChatGPT AI software. Completely free forever.
              </p>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                START FREE NOW →
              </button>
              
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span>🌐 Use in Browser</span>
                <span>💻 Download Desktop App</span>
                <span>🆓 Always Free</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full border-2 border-white"></div>
                </div>
                <div className="text-sm">
                  <span className="font-semibold text-gray-900">
                    Used by {metrics[currentMetric].number} 
                  </span>
                  <span className="text-gray-600"> {metrics[currentMetric].label}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-lg">{star}</span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">4.8</span>
                <span className="text-sm text-gray-600">/ 289 reviews</span>
              </div>
            </div>
          </div>

          {/* Right Demo Section */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Browser Header */}
              <div className="bg-gray-200 px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-sm text-gray-600">InterviewAI Pro Demo</div>
              </div>
              
              {/* Demo Content */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbnRlcnZpZXd8ZW58MHx8fHRlYWx8MTc1MzM0NzExMnww&ixlib=rb-4.1.0&q=85" 
                  alt="Professional Interview Demo" 
                  className="w-full h-64 object-cover"
                />
                
                {/* Demo Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl">
                    <div className="space-y-3">
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Transcript</div>
                      <div className="text-sm text-gray-700">
                        "What are your greatest strengths in software development?"
                      </div>
                      <div className="border-t pt-3">
                        <div className="text-xs text-teal-600 uppercase tracking-wide mb-2">AI Response</div>
                        <div className="text-sm text-gray-800">
                          "My greatest strengths include problem-solving, clean code architecture, and continuous learning..."
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Play Button */}
                <div className="absolute top-4 right-4">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
                    ▶ Watch Demo
                  </button>
                </div>
              </div>
              
              {/* Mobile View Button */}
              <div className="bg-gray-50 px-4 py-3 text-center">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                  📱 View video for mobile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section Component
export const FeaturesSection = () => {
  const features = [
    {
      icon: "🎤",
      title: "Real-Time Transcription",
      description: "Lightning-fast speech recognition with <0.5s latency. Works seamlessly with all major video platforms.",
      highlight: "Blazing Fast"
    },
    {
      icon: "🧠",
      title: "AI-Powered Answers",
      description: "Context-aware responses tailored to your resume and job requirements using advanced GPT-4 technology.",
      highlight: "Personalized"
    },
    {
      icon: "💻",
      title: "Coding Interview Support",
      description: "Real-time help for LeetCode, HackerRank problems with smart hints and complete solutions.",
      highlight: "Complete Support"
    },
    {
      icon: "📄",
      title: "Resume Integration",
      description: "Upload your resume to get personalized answers that highlight your specific experience and skills.",
      highlight: "Tailored"
    },
    {
      icon: "🌍",
      title: "50+ Languages",
      description: "Multilingual support for global interviews. Instant translation and culturally appropriate responses.",
      highlight: "Global Ready"
    },
    {
      icon: "🔒",
      title: "Undetectable & Secure",
      description: "End-to-end encryption with automatic data deletion. Your privacy is our top priority.",
      highlight: "100% Private"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Everything You Need to
            <span className="text-teal-600"> Ace Any Interview</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive AI assistant provides real-time support for technical and behavioral interviews 
            across all major platforms and programming challenges.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 hover:bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-teal-200"
            >
              <div className="space-y-4">
                {/* Icon and Highlight */}
                <div className="flex items-center justify-between">
                  <div className="text-4xl">{feature.icon}</div>
                  <span className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-800 text-xs font-medium rounded-full">
                    {feature.highlight}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Showcase */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8">
            <img 
              src="https://images.unsplash.com/photo-1596300807208-eef2bb17b469?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5fGVufDB8fHx0ZWFsfDE3NTMzNDcxMzB8MA&ixlib=rb-4.1.0&q=85" 
              alt="AI Technology" 
              className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Powered by Cutting-Edge AI</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform leverages the latest advancements in natural language processing, 
              machine learning, and real-time data processing to deliver unmatched interview assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Platform Compatibility Component
export const PlatformCompatibility = () => {
  const platforms = [
    { name: "Zoom", icon: "📹", color: "bg-blue-100 text-blue-600" },
    { name: "Google Meet", icon: "🎥", color: "bg-green-100 text-green-600" },
    { name: "Microsoft Teams", icon: "💼", color: "bg-purple-100 text-purple-600" },
    { name: "LeetCode", icon: "💻", color: "bg-orange-100 text-orange-600" },
    { name: "HackerRank", icon: "⚡", color: "bg-red-100 text-red-600" },
    { name: "WebEx", icon: "🌐", color: "bg-teal-100 text-teal-600" },
    { name: "Amazon Chime", icon: "📡", color: "bg-yellow-100 text-yellow-600" },
    { name: "CodeSignal", icon: "🔧", color: "bg-indigo-100 text-indigo-600" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Works With <span className="text-teal-600">Every Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seamlessly integrated with all major video conferencing and coding interview platforms
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${platform.color} mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-2xl">{platform.icon}</span>
              </div>
              <h3 className="font-semibold text-gray-900">{platform.name}</h3>
            </div>
          ))}
        </div>

        {/* Usage Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Used for 18,000+ Job Interviews</h3>
            <p className="text-gray-600">Trusted by candidates at top companies worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-teal-600">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-teal-600">&lt;0.5s</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-teal-600">50+</div>
              <div className="text-sm text-gray-600">Languages</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-teal-600">24/7</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section Component
export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      date: "March 2025",
      rating: 5,
      text: "Transformed my interview preparation completely. The real-time AI assistance helped me land my dream job at Google. The coding support was incredibly accurate!",
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "Data Scientist at Microsoft",
      date: "February 2025",
      rating: 5,
      text: "Used it for 6 different interviews and got offers from 5 companies. The personalized responses based on my resume were spot-on. Worth every penny!",
      avatar: "MJ"
    },
    {
      name: "Lisa Rodriguez",
      role: "Frontend Developer at Meta",
      date: "January 2025",
      rating: 5,
      text: "The multilingual support was amazing for my international interviews. Completely undetectable and gave me the confidence I needed.",
      avatar: "LR"
    },
    {
      name: "David Park",
      role: "Full Stack Developer at Stripe",
      date: "January 2025",
      rating: 5,
      text: "Incredible tool! The LeetCode problem assistance during technical interviews was game-changing. Highly recommend to anyone job hunting.",
      avatar: "DP"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            What Our <span className="text-teal-600">Users Say</span>
          </h2>
          <p className="text-xl text-gray-600">
            Real success stories from candidates who landed their dream jobs
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <div 
                            className="w-20 h-20 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-white text-xl font-bold"
                            style={{
                              backgroundImage: `url(https://images.unsplash.com/photo-1646337429688-805ad5762d4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBpbnRlcnZpZXd8ZW58MHx8fHRlYWx8MTc1MzM0NzExMnww&ixlib=rb-4.1.0&q=85)`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          >
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center md:text-left">
                          {/* Stars */}
                          <div className="flex justify-center md:justify-start text-yellow-400 text-xl mb-4">
                            {Array.from({ length: testimonial.rating }, (_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>

                          {/* Quote */}
                          <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                            "{testimonial.text}"
                          </blockquote>

                          {/* Author */}
                          <div className="space-y-1">
                            <div className="font-semibold text-gray-900 text-lg">
                              {testimonial.name}
                            </div>
                            <div className="text-teal-600 font-medium">
                              {testimonial.role}
                            </div>
                            <div className="text-sm text-gray-500">
                              {testimonial.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-gray-500 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>SSL Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">✓</span>
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Video Tutorials Section Component
export const VideoTutorialsSection = () => {
  const tutorials = [
    {
      title: "How to Connect to Video Platforms",
      duration: "3:45",
      thumbnail: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbnRlcnZpZXd8ZW58MHx8fHRlYWx8MTc1MzM0NzExMnww&ixlib=rb-4.1.0&q=85",
      description: "Step-by-step guide to set up InterviewAI Pro with Zoom, Google Meet, and Teams"
    },
    {
      title: "Coding Interview Setup Guide",
      duration: "5:20",
      thumbnail: "https://images.unsplash.com/photo-1596300807208-eef2bb17b469?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5fGVufDB8fHx0ZWFsfDE3NTMzNDcxMzB8MA&ixlib=rb-4.1.0&q=85",
      description: "Learn how to use AI assistance for LeetCode and HackerRank challenges"
    },
    {
      title: "Resume Integration Tutorial",
      duration: "2:30",
      thumbnail: "https://images.unsplash.com/photo-1646337429688-805ad5762d4e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBpbnRlcnZpZXd8ZW58MHx8fHRlYWx8MTc1MzM0NzExMnww&ixlib=rb-4.1.0&q=85",
      description: "Upload your resume for personalized, context-aware interview responses"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Quick Start <span className="text-teal-600">Video Guides</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get up and running in minutes with our comprehensive tutorials
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Video Thumbnail */}
                <div className="relative">
                  <img 
                    src={tutorial.thumbnail} 
                    alt={tutorial.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {tutorial.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tutorial.description}
                  </p>
                  <div className="flex items-center text-teal-600 font-medium text-sm">
                    <span>Watch Tutorial</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-teal-100 mb-6">
              Follow our quick setup guides and be interview-ready in under 10 minutes
            </p>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Download Section Component
export const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Get Started <span className="text-teal-600">Instantly</span>
          </h2>
          <p className="text-xl text-gray-600">
            Use directly in your browser or download our desktop app - both completely free forever
          </p>
        </div>

        {/* Download Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Web Version */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-teal-200 transition-all duration-300 hover:-translate-y-2">
            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Web Version</h3>
                <p className="text-gray-600">Use directly in your browser</p>
              </div>

              {/* Features */}
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-teal-600">✓</span>
                  <span className="text-gray-700">No download required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-600">✓</span>
                  <span className="text-gray-700">Works on any device</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-600">✓</span>
                  <span className="text-gray-700">Always up-to-date</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-600">✓</span>
                  <span className="text-gray-700">Cross-platform compatible</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Launch Web App
              </button>
            </div>
          </div>

          {/* Desktop Version */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-teal-200 relative hover:-translate-y-2 transition-all duration-300">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                RECOMMENDED
              </span>
            </div>

            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16v2H4zm0 5h16v6H4zm16-8H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2z"/>
                </svg>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">Desktop App</h3>
                <p className="text-gray-600">Enhanced performance & features</p>
              </div>

              {/* Features */}
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-teal-600">✓</span>
                  <span className="text-gray-700">Faster performance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-600">✓</span>
                  <span className="text-gray-700">Works offline</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-600">✓</span>
                  <span className="text-gray-700">Advanced hotkeys</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-teal-600">✓</span>
                  <span className="text-gray-700">System integration</span>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Download for Windows
                </button>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition-colors">
                    macOS
                  </button>
                  <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg font-medium transition-colors">
                    Linux
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Comparison */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Why Choose InterviewAI Pro?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-3xl">🆓</div>
                <h4 className="text-lg font-semibold text-gray-900">Completely Free</h4>
                <p className="text-gray-600 text-sm">No hidden costs, no subscriptions, no limits. Use all features forever without paying a penny.</p>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl">🔒</div>
                <h4 className="text-lg font-semibold text-gray-900">100% Private</h4>
                <p className="text-gray-600 text-sm">Your data never leaves your device. Completely undetectable and secure interview assistance.</p>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl">⚡</div>
                <h4 className="text-lg font-semibold text-gray-900">Lightning Fast</h4>
                <p className="text-gray-600 text-sm">Real-time AI responses in under 0.5 seconds. Never miss a beat during your interview.</p>
              </div>
            </div>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mt-12 text-center">
          <div className="bg-gray-100 rounded-lg p-6 max-w-3xl mx-auto">
            <h4 className="font-semibold text-gray-900 mb-3">System Requirements</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div>
                <strong>Windows:</strong> Windows 10 or later
              </div>
              <div>
                <strong>macOS:</strong> macOS 10.14 or later
              </div>
              <div>
                <strong>Linux:</strong> Ubuntu 18.04+ or equivalent
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Web version works on any modern browser (Chrome, Firefox, Safari, Edge)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">InterviewAI Pro</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your real-time AI interview assistant. Ace any interview with confidence and land your dream job.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <div className="space-y-2">
              <a href="#features" className="block text-gray-400 hover:text-white transition-colors">Features</a>
              <a href="#download" className="block text-gray-400 hover:text-white transition-colors">Download</a>
              <a href="#reviews" className="block text-gray-400 hover:text-white transition-colors">Reviews</a>
              <a href="#tutorials" className="block text-gray-400 hover:text-white transition-colors">Tutorials</a>
            </div>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <div className="space-y-2">
              <a href="#help" className="block text-gray-400 hover:text-white transition-colors">Help Center</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact Us</a>
              <a href="#privacy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="block text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Get the latest tips and updates for interview success
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-teal-500 text-white"
              />
              <button className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 InterviewAI Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};