import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles.css';

const projects = [
  { name: 'Northstar', type: '01 / BRAND IDENTITY · E-COMMERCE', description: 'A calm, considered digital storefront for objects made to stay.', word: 'northstar', lineOne: 'Find your', lineTwo: 'own north.', tags: 'OBJECTS FOR SLOWER LIVING', year: 'EST. 2025' },
  { name: 'Fieldnotes', type: '02 / DIGITAL PRODUCT · DEVELOPMENT', description: 'A friendly garden journal built to help small ideas take root.', word: 'fieldnotes', lineOne: 'Good things', lineTwo: 'grow here.', tags: 'A COMMUNITY GARDEN JOURNAL', year: 'EST. 2024' },
  { name: 'Signal', type: '03 / PRODUCT DESIGN · INTERACTION', description: 'A focused listening experience that makes finding new music feel like play.', word: 'signal', lineOne: 'Find your', lineTwo: 'frequency.', tags: 'TUNE IN · DISCOVER MORE', year: 'CONCEPT / 2026' },
];

const languages = [
  { name: 'HTML5', icon: 'html5', color: 'E34F26' },
  { name: 'CSS3', icon: 'css3', color: '1572B6' },
  { name: 'PHP', icon: 'php', color: '777BB4' },
  { name: 'TypeScript', icon: 'typescript', color: '3178C6' },
  { name: 'Python', icon: 'python', color: '3776AB' },
];

const skillGroups = [
  { title: 'Frameworks', items: [
    { name: 'React', icon: 'react', color: '61DAFB', mark: 'R' }, { name: 'Laravel', icon: 'laravel', color: 'FF2D20', mark: 'L' }, { name: 'Next.js', icon: 'nextdotjs', color: '111111', mark: 'N' }, { name: 'Livewire', icon: 'livewire', color: '4E56A6', mark: 'LW' }, { name: 'Express.js', icon: 'express', color: '555555', mark: 'EX' }, { name: 'Tailwind CSS', icon: 'tailwindcss', color: '06B6D4', mark: 'TW' },
  ] },
  { title: 'Backend & APIs', items: [
    { name: 'Node.js', icon: 'nodedotjs', color: '5FA04E', mark: 'N' }, { name: 'MVC', mark: 'MVC' }, { name: 'REST APIs', mark: 'API' }, { name: 'MySQL', icon: 'mysql', color: '4479A1', mark: 'SQL' }, { name: 'PostgreSQL', icon: 'postgresql', color: '4169E1', mark: 'PG' }, { name: 'NoSQL', mark: 'DB' }, { name: 'Prisma ORM', icon: 'prisma', color: '2D3748', mark: 'P' }, { name: 'JWT', mark: 'JWT' },
  ] },
  { title: 'Tools & platforms', items: [
    { name: 'Git', icon: 'git', color: 'F05032', mark: 'G' }, { name: 'Docker', icon: 'docker', color: '2496ED', mark: 'D' }, { name: 'NPM', icon: 'npm', color: 'CB3837', mark: 'npm' }, { name: 'Vercel', icon: 'vercel', color: '111111', mark: 'V' }, { name: 'Render', icon: 'render', color: '46E3B7', mark: 'R' }, { name: 'Supabase', icon: 'supabase', color: '3FCF8E', mark: 'S' }, { name: 'Cloudinary', icon: 'cloudinary', color: '3448C5', mark: 'C' }, { name: 'AWS', icon: 'amazonaws', color: 'FF9900', mark: 'AWS' }, { name: 'Google Cloud', icon: 'googlecloud', color: '4285F4', mark: 'GCP' },
  ] },
  { title: 'AI tools & workflows', items: [
    { name: 'Claude Code', icon: 'anthropic', color: '191919', mark: 'C' }, { name: 'OpenCode CLI', mark: 'OC' }, { name: 'Kiro CLI', mark: 'K' }, { name: 'OpenRouter', icon: 'openrouter', color: '6467F2', mark: 'OR' }, { name: 'OmniRoute', mark: 'OR' }, { name: '9route', mark: '9R' }, { name: 'AI Skills', mark: 'AI' }, { name: 'Agentic AI', mark: 'AG' }, { name: 'Antigravity', mark: 'A' },
  ] },
  { title: 'Developer approach', items: [
    { name: 'Script-driven', mark: '</>' }, { name: 'Test-driven', mark: 'TDD' }, { name: 'Requirements', mark: 'REQ' }, { name: 'SDLC', mark: 'SDLC' }, { name: 'Agile / Scrum', mark: 'A/S' }, { name: 'DevOps', mark: '∞' }, { name: 'CI / CD', mark: 'CI' }, { name: 'Documentation', mark: 'DOC' },
  ] },
];

const certifications = [
  { name: 'Networking Basics', issuer: 'Cisco Networking Academy', date: 'May 20, 2025', art: 'cisco', file: '/certificates/cisco-networking-basics.pdf', image: '/certificates/cisco-networking-basics.png' },
  { name: 'iLEAP Course on Intellectual Property', issuer: 'IPOPHL', date: 'May 8, 2024', art: 'ipophil', file: '/certificates/ileap-ip-course-certificate.pdf', image: '/certificates/ileap-ip-course-certificate.png' },
  { name: 'Introduction to Python', issuer: 'Coursera', date: 'Mar 25, 2024', art: 'coursera', file: '/certificates/coursera-introduction-to-python.pdf', image: '/certificates/coursera-introduction-to-python.png' },
];

const workshopLink = 'https://luma.com/watp40f7?fbclid=IwY2xjawVaT_ZleHRuA2FlbQIxMABwZG9mBWJyaWQRMVkxR2daNUFYS3hkeVdBM3RzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEf2WsI0-_0kQepfDTaKEMf_vseSVSbNW1H3lNJyASoqpjrIdf8qZU2mYj-UwE_aem_KTEPTvYfyN1w_vdA22Pvgw&tk=LFpEIZ&utm_id=97758_v0_s00_e0_tv2';

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

function ContactLogo({ type }) {
  const logos = {
    facebook: 'https://cdn.simpleicons.org/facebook/0866FF',
    linkedin: 'https://cdn.simpleicons.org/linkedin/0A66C2',
    instagram: 'https://cdn.simpleicons.org/instagram/E4405F',
  };
  if (logos[type]) return <span className={`contact-logo contact-logo-${type}`} aria-hidden="true"><img src={logos[type]} alt="" loading="lazy"/></span>;
  return <span className={`contact-logo contact-logo-${type}`} aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{type === 'phone' ? <path d="M7 3h3l1.2 4-2 1.6a15 15 0 0 0 6.2 6.2l1.6-2 4 1.2v3c0 1.1-.9 2-2 2C10.7 19 5 13.3 5 6a2 2 0 0 1 2-3Z"/> : <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>}</svg></span>;
}

function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') || 'light'; }
    catch { return 'light'; }
  });
  const [activeSlide, setActiveSlide] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
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

  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const targets = document.querySelectorAll('.section-heading, .featured-project, .about-content, .contact-row, .contact-details');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((target) => {
      target.classList.add('scroll-reveal');
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!chatOpen) return undefined;
    const handleEscape = (event) => { if (event.key === 'Escape') setChatOpen(false); };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [chatOpen]);

  const stepSlide = (step) => setActiveSlide((current) => (current + step + projects.length) % projects.length);
  const sendMessage = (event) => {
    event.preventDefault();
    const subject = `Portfolio message from ${senderName}`;
    const body = `Hi Tristan,\n\n${message}\n\nFrom: ${senderName}\nEmail: ${senderEmail}`;
    window.location.href = `mailto:tristanobeso@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return <>
    <header className="topbar flex items-center">
      <a className="brand" href="#home" aria-label="Tristan Obeso home"><span className="brand-mark">T<span>O</span></span><span className="brand-name">TRISTAN OBESO</span></a>
      <nav className="main-nav" aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      <div className="nav-actions flex items-center"><button className="theme-toggle" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} aria-pressed={theme === 'light'}><span className="theme-icon" aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span></button><button className="hire-button" type="button" onClick={() => setChatOpen(true)}>Let’s talk</button></div>
    </header>

    <main id="home">
      <section className="hero">
        <div className="hero-stage">
          <div className="hero-copy"><h1>Hi, I&apos;m<br/>Tristan Menver<br/>Neil E. Obeso</h1><p className="hero-description">I turn curious ideas into thoughtful digital experiences — with a player’s instinct for discovery and a builder’s eye for detail.</p><div className="hero-actions"><a className="primary-link" href="#work">Explore my work <span>↓</span></a><a className="resume-link" href="/resume.pdf" download="Tristan-Obeso-Resume.pdf">Resume <span>↓</span></a></div></div>
          <div className="portrait-stage" aria-label="Abstract illustrated player avatar"><div className="portrait-grid"/><div className="portrait-halo"/><Avatar/></div>
          <span className="hero-outline" aria-hidden="true">TRISTAN</span>
        </div>
      </section>

      <section className="about section-wrap" id="about"><div className="about-label"><p className="eyebrow">ABOUT ME</p><span>ABOUT / 001</span></div><div className="about-content"><h2>A little about <em>me.</em></h2><p>I’ll add more about myself here soon.</p></div></section>

      <section className="skills-section section-wrap" id="skills">
        <div className="section-heading"><div><p className="eyebrow">TOOLS IN MY TOOLKIT</p><h2>Technical skills<span>.</span></h2></div><p className="section-note">Languages, frameworks,<br/>and ways I like to build.</p></div>
        <div className="language-grid" aria-label="Programming languages">
          {languages.map((language) => <article className="language-card" key={language.name}><div className="language-logo"><img src={`https://cdn.simpleicons.org/${language.icon}/${language.color}`} alt={`${language.name} logo`} loading="lazy"/></div><h3>{language.name}</h3></article>)}
        </div>
        <div className="skill-groups">{skillGroups.map((group) => <article className="skill-group" key={group.title}><h3>{group.title}</h3><div className="skill-pills">{group.items.map((item) => <span className="skill-pill" key={item.name}><span className="skill-icon" aria-hidden="true"><span className="skill-icon-fallback">{item.mark}</span>{item.icon && <img className="skill-icon-image" src={`https://cdn.simpleicons.org/${item.icon}/${item.color}`} alt="" loading="lazy" onError={(event) => { event.currentTarget.style.display = 'none'; }}/>}</span><span>{item.name}</span></span>)}</div></article>)}</div>
      </section>

      <section className="cert-section section-wrap" id="certifications">
        <div className="section-heading"><div><p className="eyebrow">LEARNING & RECOGNITION</p><h2>Certifications<span>.</span></h2></div><p className="section-note">Courses completed and<br/>community recognition.</p></div>
        <div className="certificate-grid">{certifications.map((certificate) => <article className="certificate-card" key={certificate.name}>
          <div className={`certificate-image certificate-${certificate.art}`}>{certificate.image ? <a className="certificate-preview-link" href={certificate.file} target="_blank" rel="noreferrer" aria-label={`Open ${certificate.name} certificate`}><img className="certificate-photo" src={certificate.image} alt={`${certificate.name} certificate`} loading="lazy"/></a> : <div className="certificate-frame"><span className="certificate-stamp">aws</span><span className="certificate-rule"/><span className="certificate-image-hint">Core team member badge</span></div>}</div>
          <div className="certificate-info"><p>{certificate.issuer} · {certificate.date}</p><h3>{certificate.name}</h3>{certificate.file && <a className="certificate-link" href={certificate.file} target="_blank" rel="noreferrer">View certificate <span aria-hidden="true">↗</span></a>}</div>
        </article>)}</div>
      </section>

      <section className="workshop-section section-wrap" id="workshops">
        <div className="section-heading"><div><p className="eyebrow">LEARNING & COMMUNITY</p><h2>Workshops<span>.</span></h2></div><p className="section-note">Explore the event<br/>details on Luma.</p></div>
        <article className="workshop-card"><div className="workshop-copy"><p className="eyebrow">FEATURED WORKSHOP</p><h3>Workshop</h3><p>Event details and registration are available on Luma.</p></div><a className="workshop-link" href={workshopLink} target="_blank" rel="noreferrer">Open event page <span aria-hidden="true">↗</span></a></article>
      </section>

      <section className="work section-wrap" id="work">
        <div className="section-heading"><div><p className="eyebrow">SELECTED MISSIONS / 2024—26</p><h2>Work gallery<span>.</span></h2></div><p className="section-note">A few worlds I’ve helped bring to life.<br/>Concept, craft, and a little code.</p></div>
        <div className="gallery" aria-live="polite">
          <div className="gallery-rail" aria-label="Project selection">
            {projects.map((item, index) => <button key={item.name} className={`rail-card rail-${['one','two','three'][index]}`} onClick={() => setActiveSlide(index)} aria-label={`Show ${item.name} project`} aria-pressed={index === activeSlide}><span className="rail-art"><b>{item.word}</b><i>{item.tags}</i></span></button>)}
          </div>
          <article className="featured-project" data-active-slide={activeSlide}>
            <ProjectVisual key={activeSlide} project={project} index={activeSlide}/>
            <div className="project-info"><div><p className="project-kicker">{project.type}</p><h3 className="project-title">{project.name}</h3><p className="project-description">{project.description}</p></div><a className="project-arrow" href="#contact" aria-label={`Discuss a project like ${project.name}`}>↗</a></div>
          </article>
          <div className="gallery-controls"><div className="gallery-dots" aria-label="Choose project">{projects.map((item, index) => <button key={item.name} className={`gallery-dot ${index === activeSlide ? 'active' : ''}`} onClick={() => setActiveSlide(index)} aria-label={`Show project ${index + 1}: ${item.name}`} aria-current={index === activeSlide ? 'true' : undefined}/>)}</div><span className="gallery-count"><b>{String(activeSlide + 1).padStart(2, '0')}</b> / 03</span><div className="gallery-arrows"><button onClick={() => stepSlide(-1)} aria-label="Previous project">←</button><button onClick={() => stepSlide(1)} aria-label="Next project">→</button></div></div>
        </div>
      </section>

      <section className="contact section-wrap" id="contact"><p className="eyebrow"><span className="live-dot"/> NEXT QUEST: COLLABORATION</p><div className="contact-row"><h2>Have a good<br/>one in <em>mind?</em></h2><button className="contact-link" type="button" onClick={() => setChatOpen(true)}>LET’S TALK</button></div><div className="contact-details"><a href="tel:+639225910755"><ContactLogo type="phone"/><span className="contact-detail-label">PHONE</span><strong>0922 591 0755</strong></a><a href="https://www.facebook.com/search/top/?q=Tristan%20Obeso" target="_blank" rel="noreferrer"><ContactLogo type="facebook"/><span className="contact-detail-label">FACEBOOK</span><strong>Tristan Obeso ↗</strong></a><a href="https://www.linkedin.com/search/results/people/?keywords=Tristan%20Obeso" target="_blank" rel="noreferrer"><ContactLogo type="linkedin"/><span className="contact-detail-label">LINKEDIN</span><strong>Tristan Obeso ↗</strong></a><a href="https://www.instagram.com/trstanobso/" target="_blank" rel="noreferrer"><ContactLogo type="instagram"/><span className="contact-detail-label">INSTAGRAM</span><strong>@trstanobso ↗</strong></a><a href="mailto:tristanobeso@gmail.com"><ContactLogo type="email"/><span className="contact-detail-label">EMAIL</span><strong>tristanobeso@gmail.com ↗</strong></a></div><div className="contact-foot"><span>TRISTAN OBESO © <span id="year">2026</span></span><span>BUILT WITH INTENTION · GMT+8</span><a href="#home">BACK TO TOP ↑</a></div></section>
    </main>
    {chatOpen && <div className="chat-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setChatOpen(false); }}><section className="chat-box" role="dialog" aria-modal="true" aria-labelledby="chat-title"><header className="chat-header"><div><span className="chat-avatar">TO</span><span><strong id="chat-title">Message Tristan</strong><small><i/> Usually replies by email</small></span></div><button type="button" className="chat-close" onClick={() => setChatOpen(false)} aria-label="Close message window">×</button></header><div className="chat-thread"><div className="chat-bubble">Hi! Thanks for stopping by. Leave me a message and it’ll be addressed to my Gmail.</div><span className="chat-time">TRISTAN · EMAIL</span></div><form className="chat-form" onSubmit={sendMessage}><label>Your name<input required autoComplete="name" value={senderName} onChange={(event) => setSenderName(event.target.value)} placeholder="Jane Smith"/></label><label>Your email<input required type="email" autoComplete="email" value={senderEmail} onChange={(event) => setSenderEmail(event.target.value)} placeholder="jane@example.com"/></label><label>Message<textarea required rows="3" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="What would you like to talk about?"/></label><button className="send-message" type="submit">Continue to email <span>↗</span></button><p>Your email app will open with your message ready to send.</p></form></section></div>}
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
