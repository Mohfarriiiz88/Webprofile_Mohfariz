// src/pages/Index.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import RollingGallery from "../components/RollingGallery";
import SkillsList from "../components/Skills";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";

// Import CursorFollower
import CursorFollower from "../components/CursorFollower";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Partikel di belakang */}
      <div className="fixed inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Dot mengikuti kursor (posisi z paling atas) */}
      <CursorFollower />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />

        {/* Section: Skills kiri, Gallery kanan */}
        <section id="skills-and-gallery" className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Kolom kiri: SkillsList */}
              <div className="w-full md:w-1/3 lg:w-2/5 h-auto overflow-auto">
                <SkillsList />
              </div>

              {/* Kolom kanan: RollingGallery */}
              <div className="w-full md:w-2/3 lg:w-3/5 h-[250px] md:h-[300px]">
                <RollingGallery autoplay={false} pauseOnHover={false} />
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Certificates />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
