import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const Arrow = () => <span aria-hidden="true">↗</span>;
const Icon = ({ children }) => <span className="icon">{children}</span>;

const skills = [
  ['Programming & Data', 'Python', 'SQL', 'Pandas', 'NumPy', 'MySQL'],
  ['AI / Machine Learning', 'Machine Learning', 'Deep Learning', 'Generative AI', 'NLP', 'Scikit-learn'],
  ['Analytics & Deployment', 'Power BI', 'Tableau', 'Streamlit', 'REST APIs', 'Model Deployment'],
  ['Tools & Workflow', 'Git', 'GitHub', 'Jupyter Notebook', 'Google Colab', 'VS Code'],
];

const projects = [
  {
    number: '01', icon: '◉', title: 'Movie Recommender System', type: 'Machine Learning · NLP',
    description: 'A content-based discovery experience that finds the next great watch from a user’s preferences.',
    details: 'Engineered with movie metadata, CountVectorizer, cosine similarity, and live TMDB API data in an interactive Streamlit app.',
    tags: ['Python', 'NLP', 'Scikit-learn', 'Streamlit'], accent: 'violet'
  },
  {
    number: '02', icon: '✦', title: 'SpamShield', type: 'Natural Language Processing',
    description: 'An intelligent SMS spam classifier designed to keep everyday inboxes clear and trustworthy.',
    details: 'Built an end-to-end NLP pipeline with text preprocessing, NLTK, TF-IDF / CountVectorizer features, and a deployable Streamlit interface.',
    tags: ['Python', 'NLTK', 'TF-IDF', 'Streamlit'], accent: 'cyan'
  },
  {
    number: '03', icon: '◫', title: 'Expense Tracker', type: 'Python Application',
    description: 'A practical command-line companion for capturing and understanding daily spending.',
    details: 'Created persistent CSV-based storage with useful flows for recording, categorizing, viewing, and managing expenses.',
    tags: ['Python', 'CLI', 'CSV', 'File Handling'], accent: 'orange'
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-35% 0px -55% 0px' });
    document.querySelectorAll('section[id]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const nav = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];
  return <>
    <div className="noise" />
    <header className="nav-wrap">
      <a className="brand" href="#home" aria-label="Jay Darji home"><span>J</span>D.</a>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? '×' : '☰'}</button>
      <nav className={menuOpen ? 'open' : ''}>{nav.map(item => <a key={item} onClick={() => setMenuOpen(false)} className={active === item.toLowerCase() ? 'active' : ''} href={`#${item.toLowerCase()}`}>{item}</a>)}</nav>
      <a className="nav-cta" href="/resume-jay-darji.pdf" download>Resume <Arrow /></a>
    </header>

    <main>
      <section id="home" className="hero section-shell">
        <div className="orb orb-one" /><div className="orb orb-two" />
        <div className="hero-copy reveal">
          <p className="identity">JAY DARJI <span>/ AI ENTHUSIAST</span></p>
          <p className="eyebrow"><span className="live-dot" /> Available for opportunities</p>
          <h1>Building useful <em>intelligence</em> from data.</h1>
          <p className="hero-text">I’m <strong>Jay Darji</strong>, a Computer Engineering undergraduate turning data, language, and thoughtful code into practical digital experiences.</p>
          <div className="hero-actions"><a className="button primary" href="#projects">View selected work <Arrow /></a><a className="button text" href="#contact">Let’s connect <span>↓</span></a></div>
        </div>
        <aside className="hero-card reveal-delay">
          <div className="card-top"><span>BASED IN</span><span className="status">● INDIA</span></div>
          <div className="location">Ahmedabad<br/><i>23.0225° N</i> · <i>72.5714° E</i></div>
          <div className="card-bottom"><span>DATA · AI · SOFTWARE</span><b>2026</b></div>
        </aside>
        <a className="scroll" href="#about">SCROLL TO EXPLORE <span>↓</span></a>
      </section>

      <section id="about" className="section-shell about">
        <p className="section-kicker">01 / ABOUT</p>
        <div className="about-grid"><h2>Curious by nature.<br/><em>Precise</em> by practice.</h2><div className="about-copy"><p>I’m a Computer Engineering student at Vishwakarma Government Engineering College with hands-on experience across data analytics, machine learning, NLP, and deployment.</p><p>My approach pairs a researcher’s curiosity with an engineer’s focus on the details that make an idea actually work.</p><div className="mini-facts"><div><b>2023—2027</b><span>B.E. Computer Engineering</span></div><div><b>Ahmedabad, India</b><span>Open to collaboration</span></div></div></div></div>
      </section>

      <section id="skills" className="section-shell skills-section">
        <p className="section-kicker">02 / TOOLKIT</p><div className="section-heading"><h2>Technical range,<br/><em>intentional</em> focus.</h2><p>Tools I use to move from raw data to clear, usable outcomes.</p></div>
        <div className="skill-grid">{skills.map(([title, ...items], index) => <article className="skill-card" key={title}><span className="skill-num">0{index + 1}</span><h3>{title}</h3><div>{items.map(item => <span className="chip" key={item}>{item}</span>)}</div></article>)}</div>
      </section>

      <section id="experience" className="section-shell experience">
        <p className="section-kicker">03 / EXPERIENCE</p><h2>Learning by doing,<br/>and <em>shipping.</em></h2>
        <div className="timeline">
          <article><div className="time">JUL 2026 — AUG 2026</div><div><span className="role-type">VIRTUAL INTERNSHIP</span><h3>Virtual Data Science Explorer Intern</h3><p>YuvaIntern</p></div><p className="role-copy">Completed weekly work spanning data science project planning, exploratory analysis, ML workflows, visualization strategy, model evaluation, and technical documentation.</p></article>
          <article><div className="time">SEP 2025 — OCT 2025</div><div><span className="role-type">INTERNSHIP</span><h3>Data Analytics Intern</h3><p>SkillFied Mentor</p></div><p className="role-copy">Built practical familiarity with data organization, analytical workflows, interpreting results, and presenting structured findings from datasets.</p></article>
        </div>
      </section>

      <section id="projects" className="section-shell projects">
        <p className="section-kicker">04 / SELECTED WORK</p><div className="section-heading"><h2>Projects with a<br/><em>purpose.</em></h2><p>Explorations at the intersection of intelligent systems and everyday utility.</p></div>
        <div className="project-list">{projects.map(project => <article className={`project ${project.accent}`} key={project.title}><div className="project-visual"><span className="project-number">{project.number}</span><span className="project-icon">{project.icon}</span><span className="project-type">{project.type}</span></div><div className="project-content"><h3>{project.title}</h3><p className="project-lede">{project.description}</p><p className="project-detail">{project.details}</p><div className="project-footer"><div>{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><span className="round-arrow"><Arrow /></span></div></div></article>)}</div>
      </section>

      <section className="section-shell credentials">
        <p className="section-kicker">05 / CREDENTIALS</p><div className="credential-grid"><div><h2>Always<br/><em>learning.</em></h2><p>Beyond the classroom, I stay engaged with the ideas and tools shaping data and AI.</p></div><div className="cert-list"><div><span>01</span><p>Time Series Analysis</p><b>IIT Guwahati</b></div><div><span>02</span><p>Deloitte Data Analytics Job Simulation</p><b>Forage</b></div></div></div>
        <div className="extra"><div><span>LANGUAGES</span><p>English · Hindi · Gujarati</p></div><div><span>INTERESTS</span><p>Reading · Research Papers · Photography & Videography</p></div></div>
      </section>

      <section id="contact" className="contact section-shell"><div className="contact-glow" /><p className="section-kicker">06 / CONTACT</p><h2>Let’s make<br/>something <em>meaningful.</em></h2><p className="contact-copy">Have an interesting problem, role, or idea? I’d love to hear about it.</p><a className="email-link" href="mailto:jaydarji256@gmail.com">jaydarji256@gmail.com <Arrow /></a><div className="contact-bottom"><span>© {new Date().getFullYear()} JAY DARJI</span><a href="#home">BACK TO TOP ↑</a></div></section>
    </main>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
