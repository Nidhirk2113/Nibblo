import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, Moon, Sun, X, Sparkles, Code2, Layers3, BrainCircuit, Download, ExternalLink } from 'lucide-react'
import { projects, skills, experience, research } from './data'

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

function SectionHeading({ eyebrow, title, note }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{note && <p>{note}</p>}</div>
}

function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('nibblo-theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('nibblo-theme', dark ? 'dark' : 'light')
  }, [dark])

  const categories = ['All', 'Web & product', 'AI & data', 'Mobile']
  const filtered = projects.filter(project => {
    if (filter === 'All') return true
    if (filter === 'Web & product') return ['Healthcare technology', 'Analytics & full-stack', 'Full-stack application'].includes(project.type)
    if (filter === 'AI & data') return ['Applied machine learning', 'Conversational AI'].includes(project.type)
    return project.type === 'Mobile application'
  })

  const closeMenu = () => setMenuOpen(false)
  const navLinks = [['About', '#about'], ['Work', '#work'], ['Experience', '#experience'], ['Research', '#research'], ['Contact', '#contact']]

  return <div className="site-shell">
    <div className="grain" aria-hidden="true" />
    <header className="topbar">
      <a className="wordmark" href="#home" onClick={closeMenu}>n<span>.</span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {navLinks.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
      </nav>
      <div className="nav-actions">
        <button className="icon-button theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
        <button className="icon-button menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main id="home">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{duration:.6}} className="availability"><span className="pulse-dot"/> OPEN TO OPPORTUNITIES <span className="availability-line"/></motion.div>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{duration:.7, delay:.08}}>Ideas into<br/><span className="outlined">interfaces</span><span className="hero-period">.</span></motion.h1>
          <motion.p className="hero-intro" initial="hidden" animate="visible" variants={fadeUp} transition={{duration:.7, delay:.16}}>Hey, I'm <strong>Nidhi Kulkarni</strong> — a developer and curious problem-solver building thoughtful digital experiences across web, data and AI.</motion.p>
          <motion.div className="hero-buttons" initial="hidden" animate="visible" variants={fadeUp} transition={{duration:.7, delay:.24}}>
            <a className="button button-primary" href="#work">Explore my work <ArrowDown size={16}/></a>
            <a className="button button-quiet" href="mailto:nidhirk2113@gmail.com">Get in touch <ArrowUpRight size={16}/></a>
          </motion.div>
          <motion.div className="hero-socials" initial="hidden" animate="visible" variants={fadeUp} transition={{duration:.7, delay:.32}}>
            <a href="https://github.com/Nidhirk2113" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            <a href="https://www.linkedin.com/in/nidhi-kulkarni2113/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a>
            <span className="hero-location">BASED IN INDIA · WORKING EVERYWHERE</span>
          </motion.div>
        </div>
        <motion.div className="hero-art" initial={{opacity:0, scale:.94, rotate:2}} animate={{opacity:1, scale:1, rotate:0}} transition={{duration:.9, delay:.2}}>
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
          <div className="art-card">
            <div className="art-card-top"><span>CREATIVE ENGINEERING</span><Sparkles size={16}/></div>
            <div className="art-glyph">n<span>+</span></div>
            <div className="art-card-bottom"><span>DESIGN × CODE × CURIOSITY</span><span>01 / 26</span></div>
          </div>
          <div className="floating-tag tag-code"><Code2 size={15}/> BUILD</div>
          <div className="floating-tag tag-ai"><BrainCircuit size={15}/> EXPLORE</div>
          <div className="art-caption">A little structure.<br/>A lot of imagination.</div>
        </motion.div>
        <div className="hero-index"><span>SCROLL TO DISCOVER</span><span className="index-line"/></div>
      </section>

      <section id="about" className="about-section section-wrap section-block">
        <SectionHeading eyebrow="01 / A LITTLE ABOUT ME" title={<>Curiosity is my<br/><em>favourite tool.</em></>} />
        <div className="about-grid">
          <div className="about-lead"><p>I enjoy sitting at the intersection of <span>technology, design and real-world problem solving.</span> I like understanding how things work, finding the friction in an experience, and building something better.</p></div>
          <div className="about-detail"><p>My background in Computer Science and Design has taken me through full-stack applications, mobile development, machine learning experiments and research. I care about the details — from a clear user journey to a reliable system underneath it.</p><p>Currently exploring product-minded development, data-informed experiences and practical applications of AI.</p><a className="text-link" href="https://github.com/Nidhirk2113" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16}/></a></div>
        </div>
        <div className="principles">
          <div><span className="principle-icon"><Layers3/></span><b>Thoughtful design</b><small>Clarity before decoration.</small></div>
          <div><span className="principle-icon"><Code2/></span><b>Useful engineering</b><small>Build for people, not just demos.</small></div>
          <div><span className="principle-icon"><BrainCircuit/></span><b>Always learning</b><small>Stay curious. Keep iterating.</small></div>
        </div>
      </section>

      <section id="work" className="work-section section-wrap section-block">
        <SectionHeading eyebrow="02 / SELECTED WORK" title={<>Things I've<br/><em>put into motion.</em></>} note="A selection of projects across product development, AI, analytics and mobile."/>
        <div className="project-toolbar"><span>{String(filtered.length).padStart(2,'0')} PROJECTS</span><div className="filter-list">{categories.map(item=><button key={item} className={filter===item?'active':''} onClick={()=>setFilter(item)}>{item}</button>)}</div></div>
        <div className="project-grid">
          {filtered.map((project, i)=><motion.article className={project.featured ? 'project-card featured' : 'project-card'} key={project.number} layout initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.15}} transition={{duration:.45,delay:i*.04}}>
            <div className="project-visual"><span className="project-number">{project.number} / 06</span><span className="project-year">{project.year}</span><div className="project-mark">{project.name.split(' ').map(word=>word[0]).join('').slice(0,2)}</div><span className="project-type">{project.type}</span></div>
            <div className="project-info"><div><h3>{project.name}</h3><p>{project.description}</p></div><a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={'View '+project.name+' on GitHub'}><ArrowUpRight/></a></div>
            <div className="project-stack">{project.stack.map(item=><span key={item}>{item}</span>)}</div>
          </motion.article>)}
        </div>
        <div className="work-footer"><span>MORE EXPERIMENTS, REPOS & ITERATIONS</span><a className="text-link" href="https://github.com/Nidhirk2113" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={16}/></a></div>
      </section>

      <section id="experience" className="experience-section section-wrap section-block">
        <SectionHeading eyebrow="03 / THE JOURNEY" title={<>Learning by<br/><em>doing.</em></>} note="A few chapters in my professional journey so far."/>
        <div className="timeline">{experience.map((item,i)=><div className="timeline-item" key={item.organisation}><span className="timeline-index">0{i+1}</span><div className="timeline-main"><h3>{item.role}</h3><b>{item.organisation}</b><p>{item.detail}</p></div><span className="timeline-period">{item.period}</span></div>)}</div>
      </section>

      <section id="research" className="research-section section-wrap section-block">
        <SectionHeading eyebrow="04 / RESEARCH & WRITING" title={<>Questions worth<br/><em>investigating.</em></>} note="Research has taught me to be rigorous, curious and comfortable with complex problems."/>
        <div className="research-list">{research.map((item,i)=><article className="research-item" key={item.title}><span className="research-index">0{i+1}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><span className="research-year">{item.year}</span></article>)}</div>
      </section>

      <section className="skills-section section-wrap section-block">
        <SectionHeading eyebrow="05 / MY TOOLKIT" title={<>A flexible<br/><em>toolbox.</em></>} note="Tools I use to turn ideas into working experiences — and the list keeps evolving."/>
        <div className="skills-grid">{skills.map((group,i)=><div className="skill-group" key={group.label}><span className="skill-index">0{i+1}</span><h3>{group.label}</h3><div className="skill-tags">{group.items.map(skill=><span key={skill}>{skill}</span>)}</div></div>)}</div>
      </section>

      <section id="contact" className="contact-section section-wrap">
        <div className="contact-kicker"><span className="pulse-dot"/> HAVE A GOOD PROJECT IN MIND?</div>
        <h2>Let's make<br/><em>something matter.</em></h2>
        <a className="contact-email" href="mailto:nidhirk2113@gmail.com">nidhirk2113@gmail.com <ArrowUpRight/></a>
        <div className="contact-bottom"><p>Open to conversations, collaborations and opportunities.</p><div className="contact-socials"><a href="https://github.com/Nidhirk2113" target="_blank" rel="noreferrer"><Github/> GitHub</a><a href="https://www.linkedin.com/in/nidhi-kulkarni2113/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a><a href="mailto:nidhirk2113@gmail.com"><Mail/> Email</a></div></div>
      </section>
    </main>

    <footer className="footer section-wrap"><a className="wordmark" href="#home">n<span>.</span></a><span>DESIGNED & BUILT WITH CURIOSITY</span><span>© {new Date().getFullYear()} NIDHI KULKARNI</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>
}

export default App
