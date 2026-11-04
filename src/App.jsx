import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, Moon, Sun, Sparkles, Star, Heart, X } from 'lucide-react'
import { projects, skills, experience, research } from './data'

const links = [['About', '#about'], ['Projects', '#work'], ['Experience', '#experience'], ['Research', '#research'], ['Contact', '#contact']]

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('nibblo-theme') === 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('Everything')

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('nibblo-theme', dark ? 'dark' : 'light')
  }, [dark])

  const categories = ['Everything', 'Web', 'AI & data', 'Mobile']
  const visibleProjects = projects.filter(project => {
    if (filter === 'Everything') return true
    if (filter === 'Web') return ['Healthcare technology', 'Analytics & full-stack', 'Full-stack application'].includes(project.type)
    if (filter === 'AI & data') return ['Applied machine learning', 'Conversational AI'].includes(project.type)
    return project.type === 'Mobile application'
  })

  return <div className="page-shell">
    <header className="site-nav wrap">
      <a className="brand" href="#home">nibblo<span>✳</span></a>
      <nav className={menuOpen ? 'nav-menu is-open' : 'nav-menu'}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <div className="nav-right">
        <button className="theme-button" onClick={() => setDark(!dark)} aria-label="Toggle colour theme">{dark ? <Sun size={17}/> : <Moon size={17}/>}</button>
        <a className="say-hi" href="#contact">Say hello <ArrowUpRight size={15}/></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main id="home">
      <section className="hero wrap">
        <div className="hero-copy">
          <div className="hello-pill"><span className="hello-dot"/> HELLO THERE, I'M NIDHI</div>
          <h1>Making things<br/><span className="scribble-word">work</span> & <span className="highlight-word">wonderful.</span></h1>
          <p className="hero-text">A developer, design enthusiast and curious human who loves turning interesting ideas into useful digital experiences.</p>
          <div className="hero-actions"><a className="button button-main" href="#work">Come see my work <ArrowDownRight size={17}/></a><a className="button button-text" href="mailto:nidhirk2113@gmail.com">Let's chat <ArrowUpRight size={16}/></a></div>
          <div className="hero-social"><a href="https://github.com/Nidhirk2113" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a><a href="https://www.linkedin.com/in/nidhi-kulkarni2113/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a><span>BASED IN INDIA · CURIOUS EVERYWHERE</span></div>
        </div>
        <div className="hero-doodle" aria-label="Playful abstract illustration">
          <div className="sunburst"><span>✳</span></div>
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="note-card"><span className="note-label">CURRENT MOOD</span><strong>Curious<br/>by nature.</strong><span className="note-smile">☺</span></div>
          <div className="sticker sticker-one"><Sparkles size={17}/> MAKE IT USEFUL</div>
          <div className="sticker sticker-two">DESIGN<br/>+ CODE</div>
          <span className="doodle-star star-a">✳</span><span className="doodle-star star-b">✦</span>
          <span className="doodle-caption">a little bit of everything ↗</span>
        </div>
        <a className="scroll-cue" href="#about">SCROLL A LITTLE <span>↓</span></a>
      </section>

      <section id="about" className="section wrap about-section">
        <div className="section-label"><span>01</span> THE PERSON BEHIND THE PIXELS</div>
        <div className="about-layout">
          <h2>Part logic.<br/>Part <em>imagination.</em><span className="heading-spark">✳</span></h2>
          <div className="about-copy"><p>I'm Nidhi Kulkarni, a Computer Science and Design graduate who enjoys exploring the space between technology, design and real-world problem solving.</p><p>I've worked across full-stack applications, mobile development, machine learning and research. I like making complex things feel simple — and I’m always up for learning something new.</p><div className="tiny-note"><Heart size={15}/> Currently into thoughtful products, practical AI and good user experiences.</div></div>
        </div>
        <div className="mini-values"><span>✳ DESIGN WITH INTENT</span><span>↗ BUILD WITH CURIOSITY</span><span>♡ KEEP IT HUMAN</span></div>
      </section>

      <section id="work" className="section wrap work-section">
        <div className="section-label"><span>02</span> A FEW THINGS I'VE MADE</div>
        <div className="section-title-row"><h2>Selected <em>playground.</em></h2><p>Experiments, ideas and projects<br/>that made it out of my notes app.</p></div>
        <div className="filter-row">{categories.map(item=><button key={item} className={filter===item?'selected':''} onClick={()=>setFilter(item)}>{item}</button>)}</div>
        <div className="projects-grid">
          {visibleProjects.map((project,index)=><motion.article layout key={project.number} className={'project-card project-'+((index%4)+1)} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.35}}>
            <div className="project-art"><span className="project-count">PROJECT {project.number}</span><span className="project-year">{project.year}</span><div className="project-symbol">{project.name.split(' ').map(word=>word[0]).join('').slice(0,2)}</div><span className="project-stamp">{project.type}</span></div>
            <div className="project-details"><div><h3>{project.name}</h3><p>{project.description}</p></div><a href={project.link} target="_blank" rel="noreferrer" aria-label={'Open '+project.name+' on GitHub'}><ArrowUpRight size={20}/></a></div>
            <div className="tech-list">{project.stack.map(item=><span key={item}>{item}</span>)}</div>
          </motion.article>)}
        </div>
        <a className="all-work" href="https://github.com/Nidhirk2113" target="_blank" rel="noreferrer">There's more where that came from <ArrowUpRight size={16}/></a>
      </section>

      <section id="experience" className="section wrap experience-section">
        <div className="section-label"><span>03</span> LITTLE MILESTONES</div>
        <div className="section-title-row"><h2>Where I've <em>been.</em></h2><p>Learning by doing, one<br/>experience at a time.</p></div>
        <div className="experience-list">{experience.map((item,index)=><article key={item.organisation}><span className="list-number">0{index+1}</span><div><h3>{item.role}</h3><b>{item.organisation}</b><p>{item.detail}</p></div><time>{item.period}</time></article>)}</div>
      </section>

      <section id="research" className="section wrap research-section">
        <div className="section-label"><span>04</span> NOTES FROM THE RESEARCH CORNER</div>
        <div className="section-title-row"><h2>Curiosity, with <em>footnotes.</em></h2><p>Some questions need a little<br/>more than a quick search.</p></div>
        <div className="research-list">{research.map((item,index)=><article key={item.title}><span>0{index+1}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><time>{item.year}</time></article>)}</div>
      </section>

      <section className="section wrap toolkit-section">
        <div className="section-label"><span>05</span> THINGS IN MY TOOLKIT</div>
        <h2>A mix of <em>tools & tricks.</em></h2>
        <div className="toolkit-grid">{skills.map((group,index)=><div className="toolkit-card" key={group.label}><span>0{index+1} /</span><h3>{group.label}</h3><div>{group.items.map(item=><b key={item}>{item}</b>)}</div></div>)}</div>
      </section>

      <section id="contact" className="contact-section">
        <div className="wrap contact-inner">
          <div className="contact-sticker">GOOD IDEAS<br/>START WITH<br/>A HELLO <span>✳</span></div>
          <div className="section-label"><span>06</span> YOUR TURN</div>
          <h2>Have something<br/><em>fun in mind?</em></h2>
          <a className="contact-email" href="mailto:nidhirk2113@gmail.com">Let's make it happen <ArrowUpRight/></a>
          <div className="contact-foot"><p>Open to opportunities, collaborations and conversations.</p><div><a href="https://github.com/Nidhirk2113" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a><a href="https://www.linkedin.com/in/nidhi-kulkarni2113/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a><a href="mailto:nidhirk2113@gmail.com"><Mail size={16}/> Email</a></div></div>
        </div>
      </section>
    </main>
    <footer className="footer wrap"><a className="brand" href="#home">nibblo<span>✳</span></a><span>MADE WITH CURIOSITY & A LITTLE CAFFEINE</span><span>© {new Date().getFullYear()} NIDHI KULKARNI</span><a href="#home">BACK TO TOP ↑</a></footer>
  </div>
}

export default App
