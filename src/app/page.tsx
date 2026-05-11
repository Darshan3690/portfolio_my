import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { ProjectsSection } from '@/components/ProjectsSection';
import { BookCall } from '@/components/BookCall';
import { Navigation } from '@/components/Navigation';
import { AnimatedSocialLinks } from '@/components/AnimatedSocialLinks';
import { Chatbot } from '@/components/Chatbot';

function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 pt-6 pb-8 md:py-8 md:pt-24">
        <div id="home" className="scroll-mt-24">
          <Hero />
        </div>
        <div id="about" className="scroll-mt-24">
          <About />
        </div>
        <div id="experience" className="scroll-mt-24">
          <Experience />
        </div>
        <div id="education" className="scroll-mt-24">
          <Education />
        </div>
        <div id="skills" className="scroll-mt-24">
          <Skills />
        </div>
      </div>

      <ProjectsSection />

      <div className="max-w-4xl mx-auto px-6 pb-12 md:pb-16">
        <div id="contact" className="scroll-mt-24">
          <BookCall />
        </div>
      </div>
      <AnimatedSocialLinks />
      <Chatbot />
    </div>
  );
}

export default Index;
