import Image from 'next/image';
const resumeUrl = process.env.NEXT_PUBLIC_RESUME_URL || 'https://drive.google.com/file/d/1m3e7TsVruyN8xYYz04arEtYiOlxkeGwJ/view';

export default function Hero() {
  return <section className="hero" id="home"><div className="container">
    <div className="hero-eyebrow"><span>SOFTWARE ENGINEER & CREATIVE PROBLEM SOLVER</span><span className="availability"><span /> Open to opportunities</span></div>
    <div className="hero-grid"><div className="hero-copy">
      <p className="hello">Hey, I’m Divyansh <span aria-hidden="true">↗</span></p>
      <h1>Thoughtful code.<br />Real-world<br /><em>impact.</em><span className="hero-star" aria-hidden="true">✳</span></h1>
      <p className="hero-description">I build software people use, from real-time calling to responsive web experiences. Currently shipping production features as an SDE Intern at PGAGI Consultancy.</p>
      <div className="hero-actions"><a className="button primary" href="#projects">Explore my work <span>↗</span></a><a className="text-link" href={resumeUrl} target="_blank" rel="noopener noreferrer">View résumé <span>↗</span></a></div>
    </div><div className="portrait-composition">
      <div className="portrait-note">A little curiosity.<br />A lot of building.</div>
      <div className="portrait-frame"><Image src="/profile.png" alt="Divyansh Mishra" fill sizes="(max-width: 700px) 85vw, 420px" priority /><span className="portrait-cross" aria-hidden="true">+</span></div>
      <div className="portrait-caption"><span>DIVYANSH MISHRA</span><span>DEVELOPER / BUILDER</span></div>
      <div className="portrait-sticker"><span aria-hidden="true">↗</span> Ideas into<br />something real.</div>
    </div></div>
    <div className="hero-bottom"><p>Studying Computer Science<br /><strong>Vellore Institute of Technology</strong></p><div className="hero-stat"><strong>500+</strong><span>Problems solved</span></div><div className="hero-stat"><strong>15+</strong><span>Projects built</span></div><a className="scroll-cue" href="#experience">EXPLORE MY EXPERIENCE <span>↓</span></a></div>
  </div></section>;
}
