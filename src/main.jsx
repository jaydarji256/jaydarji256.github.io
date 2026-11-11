import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  ['01', 'Movie Recommender', 'A content-based discovery app using movie metadata, NLP, cosine similarity, and the TMDB API.', 'PYTHON · NLP · STREAMLIT'],
  ['02', 'SpamShield', 'An SMS spam classifier with text preprocessing, TF-IDF features, and a deployable NLP pipeline.', 'PYTHON · NLTK · SCIKIT-LEARN'],
  ['03', 'Expense Tracker', 'A practical command-line tool for recording, categorizing, and managing daily expenses.', 'PYTHON · CLI · CSV'],
];

const skills = ['Python', 'SQL', 'Pandas', 'NumPy', 'Machine Learning', 'NLP', 'Scikit-learn', 'Streamlit', 'Power BI', 'Tableau'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    }), { rootMargin: '-38% 0px -54% 0px' });
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal-section').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const links = ['About', 'Work', 'Skills', 'Contact'];

  return <>
    <header className="site-header">
      <a className="logo" href="#home" aria-label="Jay Darji home"><b>JD</b><span>JAY DARJI</span></a>
      <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
      <nav className={menuOpen ? 'nav-open' : ''}>{links.map((link) => <a key={link} href={`#${link === 'Work' ? 'work' : link.toLowerCase()}`} className={active === (link === 'Work' ? 'work' : link.toLowerCase()) ? 'active' : ''} onClick={() => setMenuOpen(false)}>{link}</a>)}</nav>
      <a className="header-resume" href="/resume-jay-darji.pdf" download>Resume <span>↗</span></a>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-aurora" />
        <div className="hero-ribbons" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><i /> JAY DARJI — AI ENTHUSIAST</p>
          <h1>Data work that<br/><em>feels human.</em></h1>
          <p className="intro">Computer Engineering student building practical AI, data, and software experiences — from raw inputs to useful outcomes.</p>
          <div className="hero-actions"><a className="coral-button" href="#work">Explore my work <span>↗</span></a><a className="quiet-link" href="#contact">Let’s connect <span>↓</span></a></div>
        </div>
        <aside className="signal-panel" aria-label="Jay Darji portfolio signal">
          <div className="panel-nav"><span>JAY.D / PORTFOLIO</span><span className="panel-live"><i /> OPEN TO WORK</span></div>
          <div className="signal-content"><p>BUILDING WITH</p><h2>DATA <i>×</i> IDEAS</h2><div className="signal-bars">{Array.from({ length: 10 }, (_, index) => <b key={index} />)}</div></div>
          <div className="panel-metrics"><div><b>03</b><span>SHIPPED PROJECTS</span></div><div><b>AI / ML</b><span>PRIMARY FOCUS</span></div><div><b>2027</b><span>B.E. GRADUATION</span></div></div>
        </aside>
        <div className="hero-notes"><span>BASED IN AHMEDABAD, INDIA</span><span>SCROLL TO EXPLORE ↓</span><span>PYTHON · DATA · AI</span></div>
      </section>

      <section id="about" className="about reveal-section"><p className="section-label">01 / ABOUT</p><div className="about-layout"><h2>Curious enough to<br/>ask better <em>questions.</em></h2><div><p>I’m Jay, a Computer Engineering undergraduate at Vishwakarma Government Engineering College. I enjoy making data less intimidating and technology more useful.</p><p>My work sits between machine learning, natural language processing, analytics, and thoughtful deployment.</p><div className="facts"><span><b>2023—2027</b> B.E. Computer Engineering</span><span><b>Ahmedabad</b> Gujarat, India</span></div></div></div></section>

      <section id="work" className="work reveal-section"><div className="work-heading"><p className="section-label">02 / SELECTED WORK</p><h2>Built to be <em>used.</em></h2><p>Small, purposeful products that turn learning into something real.</p></div><div className="project-stack">{projects.map(([number, title, description, tools]) => <article className="project-row" key={title}><span className="project-number">{number}</span><div><h3>{title}</h3><p>{description}</p></div><span className="project-tools">{tools}</span><span className="project-arrow">↗</span></article>)}</div></section>

      <section id="skills" className="skills reveal-section"><p className="section-label">03 / TOOLKIT</p><div className="skills-top"><h2>A practical<br/><em>toolkit.</em></h2><p>Tools I reach for to explore, model, communicate, and deploy.</p></div><div className="skill-cloud">{skills.map((skill, index) => <span key={skill} className={`skill skill-${index % 4}`}>{skill}</span>)}</div><div className="experience-strip"><span>EXPERIENCE</span><p><b>Virtual Data Science Explorer</b> · YuvaIntern</p><p><b>Data Analytics Intern</b> · SkillFied Mentor</p></div></section>

      <section id="contact" className="contact reveal-section"><p className="section-label">04 / CONTACT</p><h2>Have a good<br/><em>problem?</em></h2><p>Let’s talk about opportunities, projects, and ideas worth building.</p><a className="contact-email" href="mailto:jaydarji256@gmail.com">jaydarji256@gmail.com <span>↗</span></a><div className="contact-footer"><span>© {new Date().getFullYear()} JAY DARJI</span><span>ENGLISH · HINDI · GUJARATI</span><a href="#home">BACK TO TOP ↑</a></div></section>
    </main>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
