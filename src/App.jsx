import './App.css'
import navLogo from './images/clubhacks.png'
import heroLogo from './images/clubhack-top.png'
import heroBackground from './images/background2.png'
import aiClubLogo from './images/ai_club.png'
import cyberClubLogo from './images/cyber.png'
import greenTechClubLogo from './images/greentech.png'
import roboticsClubLogo from './images/robotics.png'
import cssClubLogo from './images/CSS.png'
import gdgClubLogo from './images/gdg-logo.png'

const navItems = [
  { label: 'Tracks', href: '#tracks' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'FAQ', href: '#faq' },
]

const tracks = [
  {
    logo: greenTechClubLogo,
    title: 'GreenTech',
    ideas: 'Carbon footprint tracker, smart recycling assistant, sustainable campus map.',
  },
  {
    logo: cyberClubLogo,
    title: 'CyberSecurity',
    ideas: 'Phishing detection extension, secure password coach, incident simulator.',
  },
  {
    logo: aiClubLogo,
    title: 'Artificial Intelligence',
    ideas: 'Study companion chatbot, resume analyzer, accessibility-focused AI helper.',
  },
  {
    logo: roboticsClubLogo,
    title: 'Robotics',
    ideas: 'Autonomous sorting bot, line-following challenge, warehouse mini-automation.',
  },
  {
    logo: gdgClubLogo,
    title: 'GDG',
    ideas: 'Google developer groups Windsor.',
  },
]

const workshops = [
  { club: 'GreenTech Club', topic: 'Eco travelling...' },
  { club: 'CyberSecurity Club', topic: 'Threat modeling for student projects...' },
  { club: 'AI Club', topic: 'Prompting + model integration basics...' },
  { club: 'Robotics Club', topic: 'Hardware-to-software workflow in 30 mins...' },
  { club: 'GDG Club', topic: '...' },

]

const schedule = [
  { time: '9:00 AM', event: 'Check-in + team formation' },
  { time: '9:30 AM', event: 'Opening + challenge briefing' },
  { time: '10:00 AM', event: 'Build sprint begins' },
  { time: '1:00 PM', event: 'Workshops + mentor office hours' },
  { time: '4:30 PM', event: 'Project submissions due' },
  { time: '5:00 PM', event: 'Demos, judging, and winners' },
]

const faq = [
  {
    question: 'Who can participate?',
    answer: 'All students are welcome, from beginners to experienced builders.',
  },
  {
    question: 'Do I need a team?',
    answer: 'No. You can join solo and find teammates during check-in.',
  },
  {
    question: 'What should I bring?',
    answer: 'Your laptop, charger, and plenty of energy.',
  },
  {
    question: 'How do I submit?',
    answer: 'Use the Register link to reach our Devpost submission portal.',
  },
]

const clubLogos = [
  { name: 'GreenTech Club', image: greenTechClubLogo, href: 'https://www.instagram.com/uwindsorgreentech/' },
  { name: 'CyberSecurity Club', image: cyberClubLogo, href: 'https://www.instagram.com/uwincybersec/' },
  { name: 'AI Club', image: aiClubLogo, href: 'https://www.instagram.com/uwindsor.ai.club/' },
  { name: 'Robotics Club', image: roboticsClubLogo, href: 'https://www.instagram.com/uwinrobotics/' },
  { name: 'Computer Science Society', image: cssClubLogo, href: 'https://www.instagram.com/uwindsorcss/' },
  { name: 'GDG Windsor', image: gdgClubLogo, href: 'https://www.instagram.com/gdsc_uwindsor/' }
]

function SectionHeader({ title, subtitle }) {
  return (
    <header className="section-header">
      <p className="section-title">{title}</p>
      <h2>{subtitle}</h2>
      <div className="section-line" aria-hidden="true" />
    </header>
  )
}

function Button({ href, variant = 'primary', children }) {
  return (
    <a href={href} className={`btn btn-${variant}`}>
      {children}
    </a>
  )
}

function Card({ children }) {
  return <article className="card">{children}</article>
}

function App() {
  return (
    <div className="site-shell" style={{ '--hero-bg': `url(${heroBackground})` }}>
      <nav className="top-nav">
        <a className="brand" href="#home">
          <img className="brand-mark" src={navLogo} alt="ClubHacks logo" />
          ClubHacks
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-content">
            <div className="hero-logo-wrap">
              <img className="hero-logo" src={heroLogo} alt="ClubHacks hackathon logo" />
            </div>
            <p className="kicker">Build for impact in 8 hours</p>
            <h1>
              <span>ClubHacks</span>
            </h1>
            <p className="hero-copy">
              A student hackathon where GreenTech, CyberSecurity, AI, GDG and Robotics teams ship bold ideas in one day.
            </p>
            <div className="hero-meta">
              <span>April 4th, 2026</span>
              <span>Engineering Building, Room 1100</span>
              <span>8-hour build sprint</span>
            </div>
            <div className="hero-quick-stats" aria-label="Event highlights">
              <div>
                <strong>5</strong>
                <span>Tracks</span>
              </div>
              <div>
                <strong>6</strong>
                <span>Clubs</span>
              </div>
              <div>
                <strong>$$</strong>
                <span>Prizes</span>
              </div>
            </div>
            <div className="hero-cta">
              <Button href="https://devpost.com" variant="primary">
                Register
              </Button>
              <Button href="https://discord.com" variant="secondary">
                Join Discord
              </Button>
            </div>
          </div>
        </section>

        <section className="section club-row">
          <SectionHeader title="Club Collaboration" subtitle="Hosted by student clubs" />
          <div className="logo-grid" aria-label="Collaborating clubs">
            {clubLogos.map((club) => (
              <a
                key={club.name}
                className="logo-pill"
                href={club.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${club.name} Instagram`}
              >
                <img src={club.image} alt={club.name} />
              </a>
            ))}
          </div>
        </section>

        <section id="tracks" className="section">
          <SectionHeader title="Tracks" subtitle="Choose your challenge" />
          <div className="grid four">
            {tracks.map((track) => (
              <Card key={track.title}>
                <div className="track-icon">
                  <img src={track.logo} alt={`${track.title} club logo`} />
                </div>
                <h3>{track.title}</h3>
                <p>{track.ideas}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHeader title="Workshops" subtitle="Quick boosts from each club" />
          <div className="grid four">
            {workshops.map((item) => (
              <Card key={item.club}>
                <h3>{item.club}</h3>
                <p>{item.topic}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="schedule" className="section">
          <SectionHeader title="Schedule" subtitle="Hackathon timeline" />
          <div className="timeline">
            {schedule.map((slot) => (
              <div key={slot.time} className="timeline-item">
                <p className="time">{slot.time}</p>
                <p>{slot.event}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="prizes" className="section two-col">
          <div>
            <SectionHeader title="Prizes" subtitle="What you can win" />
            <div className="stack">
              <Card>
                <h3> Winners </h3>
                <p>TBA </p>
              </Card>
            </div>
          </div>
          <div>
            <SectionHeader title="Judging" subtitle="How projects are scored" />
            <Card>
              <ul className="criteria">
                <li>Innovation</li>
                <li>Technical execution</li>
                <li>Impact and usability</li>
                <li>Presentation quality</li>
              </ul>
            </Card>
          </div>
        </section>

        <section id="faq" className="section">
          <SectionHeader title="FAQ" subtitle="Things teams ask most" />
          <div className="grid two">
            {faq.map((item) => (
              <Card key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </Card>
            ))}
          </div>
        </section>

      </main>

      <footer className="footer">
        <p>© 2026 ClubHacks</p>
        <div className="footer-links">
          <a href="mailto:ai-club@uwindsor.ca">Contact</a>
          <a href="https://devpost.com">Devpost</a>
        </div>
      </footer>
    </div>
  )
}

export default App
