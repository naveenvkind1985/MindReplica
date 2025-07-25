import React, { useState } from 'react';
import './App.css';
import { 
  Header, 
  HeroSection, 
  FeaturesSection, 
  PlatformCompatibility, 
  TestimonialsSection, 
  VideoTutorialsSection, 
  DownloadSection,
  Footer 
} from './components';

function App() {
  return (
    <div className="App min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PlatformCompatibility />
      <TestimonialsSection />
      <VideoTutorialsSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;