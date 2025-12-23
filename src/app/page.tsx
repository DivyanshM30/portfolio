import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionObserver from '@/components/SectionObserver';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionObserver>
        <About />
      </SectionObserver>
      <SectionObserver>
        <Projects />
      </SectionObserver>
      <SectionObserver>
        <Skills />
      </SectionObserver>
      <SectionObserver>
        <Experience />
      </SectionObserver>
      <SectionObserver>
        <Contact />
      </SectionObserver>
      <Footer />
    </>
  );
}
