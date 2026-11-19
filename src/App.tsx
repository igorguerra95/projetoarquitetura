import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { ArchitecturalProject } from './data/projects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { AboutProcess } from './components/AboutProcess';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ArchitecturalProject | null>(null);
  const [preselectedProject, setPreselectedProject] = useState<string>('');

  const scrollToContact = () => {
    const el = document.querySelector('#contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquiryFromProject = (projectTitle: string) => {
    setPreselectedProject(projectTitle);
    scrollToContact();
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen flex flex-col bg-background text-foreground">
        {/* Camada sutil de textura mineral arquitetônica */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none architectural-grain z-0"
        />

        <Navbar onContactClick={scrollToContact} />

        <main className="relative z-10 flex-1">
          <Hero
            onContactClick={scrollToContact}
            onOpenProject={(project) => setSelectedProject(project)}
          />

          <Portfolio
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
            onInquiryFromProject={handleInquiryFromProject}
          />

          <AboutProcess onContactClick={scrollToContact} />

          <ContactSection preselectedProject={preselectedProject} />
        </main>

        <Footer />

        <WhatsAppButton />
      </div>
    </MotionConfig>
  );
}
