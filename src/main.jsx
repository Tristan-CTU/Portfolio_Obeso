import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles.css';

const projects = [
  { name: 'Northstar', type: '01 / BRAND IDENTITY · E-COMMERCE', description: 'A calm, considered digital storefront for objects made to stay.', word: 'northstar', lineOne: 'Find your', lineTwo: 'own north.', tags: 'OBJECTS FOR SLOWER LIVING', year: 'EST. 2025' },
  { name: 'Fieldnotes', type: '02 / DIGITAL PRODUCT · DEVELOPMENT', description: 'A friendly garden journal built to help small ideas take root.', word: 'fieldnotes', lineOne: 'Good things', lineTwo: 'grow here.', tags: 'A COMMUNITY GARDEN JOURNAL', year: 'EST. 2024' },
  { name: 'Signal', type: '03 / PRODUCT DESIGN · INTERACTION', description: 'A focused listening experience that makes finding new music feel like play.', word: 'signal', lineOne: 'Find your', lineTwo: 'frequency.', tags: 'TUNE IN · DISCOVER MORE', year: 'CONCEPT / 2026' },
];

function Avatar() {
  return <svg className="avatar" viewBox="0 0 460 550" role="img" aria-labelledby="avatar-title">
    <title id="avatar-title">Stylized illustrated portrait representing Tristan</title>
    <defs>
      <linearGradient id="jacket" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#283e4b"/><stop offset="1" stopColor="#101a23"/></linearGradient>
      <linearGradient id="skin" x1="0" x2="1"><stop stopColor="#b98260"/><stop offset="1" stopColor="#e1b18b"/></linearGradient>
    </defs>
    <path d="M67 550c9-102 51-164 163-176 114 12 155 74 164 176H67Z" fill="url(#jacket)"/>
    <path d="m178 386 52 66 52-66-13-26h-78z" fill="#d8e1e1"/><path d="m205 431 25 21 25-21-11 119h-29z" fill="#0a84ff"/>
    <path d="M163 194c0-85 28-126 68-126s68 41 68 126v91c0 68-34 111-68 111s-68-43-68-111z" fill="url(#skin)"/>
    <path d="M154 198c-8-92 18-154 79-154 69 0 91 54 77 157l-18-35-14-62c-28 29-71 46-124 47z" fill="#131a1d"/>
    <path d="M159 211c-20-12-30 5-20 36 7 18 17 25 28 23m134-59c20-12 30 5 20 36-7 18-17 25-28 23" fill="none" stroke="#dba47f" strokeWidth="13" strokeLinecap="round"/>
    <path d="M191 222h31m16 0h31" fill="none" stroke="#17232a" strokeWidth="7" strokeLinecap="round"/><path d="M222 222h16" stroke="#17232a" strokeWidth="6"/>
    <path d="M229 232l-9 34 13 5" fill="none" stroke="#a56f53" strokeWidth="4" strokeLinecap="round"/><path d="M211 293c12 8 25 8 37 0" fill="none" stroke="#684737" strokeWidth="4" strokeLinecap="round"/>
    <path d="M151 186c-11-45 5-107 49-131m107 123c13-52-4-100-42-119" fill="none" stroke="#0a84ff" strokeWidth="8" strokeLinecap="round"/>
    <path d="M146 172v61m168-61v61" fill="none" stroke="#0672df" strokeWidth="16" strokeLinecap="round"/><circle cx="146" cy="241" r="8" fill="#e8f4ff"/><circle cx="314" cy="241" r="8" fill="#e8f4ff"/>
    <path d="M135 550c10-57 35-90 72-108m118 108c-10-57-35-90-72-108" fill="none" stroke="#415b64" strokeWidth="3"/>
  </svg>;
}

function ProjectVisual({ project, index }) {
  return <div className="project-visual">
    <div className="visual-top"><span>CASE STUDY / {String(index + 1).padStart(3, '0')}</span><span>{project.type.split(' / ')[1]}</span></div>
    <div className="northstar-word">{project.word}<span>®</span></div>
    <div className="northstar-copy">{project.lineOne}<br/><em>{project.lineTwo}</em></div>
    <div className="northstar-sun"/>
    <div className="visual-foot"><span>{project.tags}</span><span>{project.year}</span></div>
  </div>;
}

function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') || 'light'; }
    catch { return 'light'; }
  });
  const [activeSlide, setActiveSlide] = useState(0);
  const project = projects[activeSlide];

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('#theme-color-meta')?.setAttribute('content', theme === 'dark' ? '#08090b' : '#f5f5f7');
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Theme still works for this session. */ }
  }, [theme]);

  useEffect(() => {
    const year = document.querySelector('#year');
    if (year) year.textContent = String(new Date().getFullYear());
  }, []);

  const stepSlide = (step) => setActiveSlide((current) => (current + step + projects.length) % projects.length);

  return <>
    <header className="topbar flex items-center">
      <a className="brand" href="#home" aria-label="Tristan Obeso home"><span className="brand-mark">T<span>O</span></span><span className="brand-name">TRISTAN OBESO<small>CREATIVE DEVELOPER</small></span></a>
      <nav className="main-nav" aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <div className="nav-actions flex items-center"><button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} aria-pressed={theme === 'light'}><span className="theme-icon" aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span></button><a className="hire-button" href="#contact">Let’s talk <span>↗</span></a></div>
    </header>

    <main id="home">
      <section className="hero">
        <div className="hero-status"><span className="live-dot"/> OPEN TO THE RIGHT QUEST <span className="status-separator">/</span> PHILIPPINES · GMT+8</div>
        <div className="hero-stage">
          <div className="hero-copy"><p className="eyebrow">DESIGNER <span>×</span> DEVELOPER <span>×</span> PLAYER</p><h1>Build with<br/>purpose<span>.</span></h1><p className="hero-description">I turn curious ideas into thoughtful digital experiences — with a player’s instinct for discovery and a builder’s eye for detail.</p><a className="primary-link" href="#work">Explore my work <span>↓</span></a></div>
          <div className="portrait-stage" aria-label="Abstract illustrated player avatar"><div className="portrait-grid"/><div className="portrait-halo"/><Avatar/><span className="portrait-tag tag-top">PLAYER 01 <i>● ONLINE</i></span><span className="portrait-tag tag-bottom">LOADOUT: IDEAS / SKILLS / COFFEE</span><span className="portrait-cross">＋</span></div>
          <span className="hero-outline" aria-hidden="true">TRISTAN</span>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/><span>01 — 03</span><span className="hero-location">DESIGNING FROM THE PHILIPPINES</span></div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-heading"><div><p className="eyebrow">SELECTED MISSIONS / 2024—26</p><h2>Work gallery<span>.</span></h2></div><p className="section-note">A few worlds I’ve helped bring to life.<br/>Concept, craft, and a little code.</p></div>
        <div className="gallery" aria-live="polite">
          <div className="gallery-rail" aria-label="Project selection">
            {projects.map((item, index) => <button key={item.name} className={`rail-card rail-${['one','two','three'][index]}`} onClick={() => setActiveSlide(index)} aria-label={`Show ${item.name} project`} aria-pressed={index === activeSlide}><span className="rail-art"><b>{item.word}</b><i>{item.tags}</i></span></button>)}
          </div>
          <article className="featured-project" data-active-slide={activeSlide}>
            <ProjectVisual project={project} index={activeSlide}/>
            <div className="project-info"><div><p className="project-kicker">{project.type}</p><h3 className="project-title">{project.name}</h3><p className="project-description">{project.description}</p></div><a className="project-arrow" href="#contact" aria-label={`Discuss a project like ${project.name}`}>↗</a></div>
          </article>
          <div className="gallery-controls"><div className="gallery-dots" aria-label="Choose project">{projects.map((item, index) => <button key={item.name} className={`gallery-dot ${index === activeSlide ? 'active' : ''}`} onClick={() => setActiveSlide(index)} aria-label={`Show project ${index + 1}: ${item.name}`} aria-current={index === activeSlide ? 'true' : undefined}/>)}</div><span className="gallery-count"><b>{String(activeSlide + 1).padStart(2, '0')}</b> / 03</span><div className="gallery-arrows"><button onClick={() => stepSlide(-1)} aria-label="Previous project">←</button><button onClick={() => stepSlide(1)} aria-label="Next project">→</button></div></div>
        </div>
      </section>

      <section className="about section-wrap" id="about"><div className="about-label"><p className="eyebrow">THE PLAYER BEHIND THE PIXELS</p><span>ABOUT / 002</span></div><div className="about-content"><h2>Curiosity is my<br/>favorite <em>power-up.</em></h2><p>Games taught me to look closer, experiment, and keep iterating. I bring that same energy to design and development, partnering with good people to make digital experiences that feel clear, considered, and rewarding to use.</p><div className="skills"><span>PRODUCT DESIGN</span><span>VISUAL IDENTITY</span><span>FRONTEND DEVELOPMENT</span><span>GAME THINKING</span></div></div></section>

      <section className="contact section-wrap" id="contact"><p className="eyebrow"><span className="live-dot"/> NEXT QUEST: COLLABORATION</p><div className="contact-row"><h2>Have a good<br/>one in <em>mind?</em></h2><a className="contact-link" href="mailto:hello@tristanobeso.com">LET’S TALK <span>↗</span></a></div><div className="contact-foot"><span>TRISTAN OBESO © <span id="year">2026</span></span><span>BUILT WITH INTENTION · GMT+8</span><a href="#home">BACK TO TOP ↑</a></div></section>
    </main>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
