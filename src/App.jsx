import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';

function App() {
  return (
    <div className="bg-bg-primary min-h-screen overflow-x-hidden flex flex-col w-full relative">
      <Navbar />
      <Hero />
      <Marquee />
    </div>
  );
}

export default App;