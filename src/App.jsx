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
import featherlessLogo from './images/featherless-full-dark.svg'
import { FaInstagram, FaDiscord, FaLinkedin, FaGlobe } from 'react-icons/fa'

const navItems = [
  { label: 'Tracks', href: '#tracks' },
  { label: 'Workshops', href: '#workshops' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Sponsors & Partners', href: '#sponsors' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'FAQ', href: '#faq' },
]

const tracks = [
  {
    logo: greenTechClubLogo,
    title: 'GreenTech',
    ideas: 'Build solutions for sustainability, climate impact, and smarter living — from carbon tracking tools to green campus apps and eco-focused platforms.'
  },
  {
    logo: cyberClubLogo,
    title: 'CyberSecurity',
    ideas: 'Build tools for safer systems and smarter defense — such as phishing detection, password safety tools, privacy-first apps, or incident response simulators.',
  },
  {
    logo: aiClubLogo,
    title: 'Artificial Intelligence',
    ideas: 'Build an AI system that turns messy or complex problems into clear decisions, strategies, or useful tools. Think planning assistants, accessibility tools, study companions, or intelligent productivity apps.',
  },
  {
    logo: roboticsClubLogo,
    title: 'Robotics',
    ideas: 'Build automation-driven solutions using robotics, embedded systems, simulation, or control logic — from sorting systems to smart task automation.',
  },
]

const workshops = [
  {
    club: 'GreenTech Club + AI Club',
    topic: 'Building a smart app from 11:00 AM - 1:00 PM that recommends eco-friendly travel based on your calendar and location.',
  },
  {
    club: 'CyberSecurity Club',
    topic: 'TBA',
  },
  {
    club: 'Robotics Club',
    topic: 'TBA',
  },
  {
    club: 'GDG Club',
    topic: (
      <>
        Build with AI workshop from 1:00 PM–3:00 PM using modern AI tools and Google technologies.{' '}
        <a
          href="https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-windsor-windsor-canada-presents-building-a-travel-helper-agent-adk-amp-gemini-workshop/"
          target="_blank"
          rel="noreferrer"
        >
          Attend here
        </a>
        .
      </>
    ),
  },
]

const schedule = [
  { time: '8:00 AM', event: 'Check-in + breakfast + team formation' },
  { time: '9:00 AM', event: 'Opening ceremony + challenge briefing' },
  { time: '9:30 AM', event: 'Hacking begins' },
  { time: '11:00 AM – 1:00 PM', event: 'GreenTech + AI workshop: building a smart app for eco-friendly travel based on calendar and location' },
  { time: '1:00 PM – 3:00 PM', event: 'GDG Build with AI workshop + mentor office hours' },
  { time: '3:30 PM', event: 'Lunch' },
  { time: '5:30 PM', event: 'Project submissions due' },
  { time: '6:00 PM', event: 'Demos + judging begin' },
  { time: '7:30 PM', event: 'Winners announced + closing' },
  { time: '8:00 PM', event: 'Event ends' },
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
  {
    question: 'When is the registration deadline?',
    answer: 'Registration closes on April 1st, 2026.',
  },
]

const clubLogos = [
  {
    name: 'GreenTech Club',
    image: greenTechClubLogo,
    links: {
      instagram: 'https://www.instagram.com/uwindsorgreentech/',
      discord: 'https://discord.gg/vjNFgVZy',
      website: '',
      linkedin: '',
    },
  },
  {
    name: 'CyberSecurity Club',
    image: cyberClubLogo,
    links: {
      instagram: 'https://www.instagram.com/uwincybersec/',
      discord: 'https://discord.gg/tkfwTxqR6p',
      website: '',
      linkedin: 'https://www.linkedin.com/company/uwin-cybersec-club/posts/?feedView=all',
    },
  },
  {
    name: 'AI Club',
    image: aiClubLogo,
    links: {
      instagram: 'https://www.instagram.com/uwindsor.ai.club/',
      discord: 'https://discord.gg/bkfWAhjWSK',
      website: 'https://uwindsoraiclub.com/',
      linkedin: 'https://www.linkedin.com/company/uwindsor-ai-club/',
    },
  },
  {
    name: 'Robotics Club',
    image: roboticsClubLogo,
    links: {
      instagram: 'https://www.instagram.com/uwinrobotics/',
      discord: 'https://discord.gg/eVd3mQABm3',
      website: '',
      linkedin: '',
    },
  },
  {
    name: 'Computer Science Society',
    image: cssClubLogo,
    links: {
      instagram: 'https://www.instagram.com/uwindsorcss/',
      discord: 'https://css.uwindsor.ca/discord',
      website: 'https://css.uwindsor.ca/',
      linkedin: 'https://www.linkedin.com/company/uwindsorcss/posts/?feedView=all',
    },
  },
  {
    name: 'GDG Windsor',
    image: gdgClubLogo,
    links: {
      instagram: 'https://www.instagram.com/gdsc_uwindsor/',
      discord: 'https://discord.gg/tCNv6Kp3YM',
      website: '',
      linkedin: 'https://www.linkedin.com/company/gdg-on-campus-university-of-windsor/posts/?feedView=all',
    },
  },
]

const sponsors = [
  {
    name: 'GDG Windsor',
    description:
      'Sponsor of the Best Use of Gemini prize, awarded to the team that makes the most effective and creative use of Gemini in their project.',
  },
  {
    name: 'Featherless AI',
    description:
      'Featherless AI is providing one month of hosted AI model access for all participants, plus sponsored prizes in Featherless credits for the top 3 teams.',
  },
]

const clubHacksSocials = {
  instagram: 'https://www.instagram.com/clubhacks/',
  linkedin: 'https://www.linkedin.com/company/club-hacks/about/?viewAsMember=true',
}

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
              A student hackathon where GreenTech, CyberSecurity, AI, and Robotics builders ship bold ideas in one day, with support from partners including GDG Windsor and Featherless AI.
            </p>
            <div className="hero-meta">
              <span>April 4th, 2026</span>
              <span>Engineering Building, Room 1100</span>
              <span>8:00 AM – 8:00 PM</span>
              <span>Register by April 1st</span>
            </div>
            <div className="hero-quick-stats" aria-label="Event highlights">
              <div>
                <strong>4</strong>
                <span>Tracks</span>
              </div>
              <div>
                <strong>6</strong>
                <span>Clubs</span>
              </div>
              <div>
                <strong>$1000+</strong>
                <span>In Prizes</span>
              </div>
            </div>
            <div className="hero-cta">
              <Button href="https://forms.office.com/pages/responsepage.aspx?id=szP5EmE9GUuaTWiQId6MyXVwJg0sUe9AvxObJKUNQa9UMjMwNlQwVTc4SlpISVRaU0IzTUVIMjZBTSQlQCN0PWcu&route=shorturl" variant="primary">
                Register
              </Button>
              <Button href="https://clubhacks.devpost.com/?_gl=1*1i021yi*_gcl_au*ODYxMDE1NTMxLjE3NzA1NjU1Mzc.*_ga*Njc4NjQwNjAzLjE3NzA1NjU1Mzc.*_ga_0YHJK3Y10M*czE3NzMzNDYyNjIkbzE5JGcxJHQxNzczMzQ2NTg5JGo1OSRsMCRoMA.." variant="primary">
                Devpost
              </Button>
              <Button href="https://discord.gg/Hz62e78uCZ" variant="secondary">
                Join Discord
              </Button>
            </div>
            <div className="event-socials" aria-label="ClubHacks social links">
              <span className="event-socials-label">Follow ClubHacks</span>
              <a
                className="event-social-link"
                href={clubHacksSocials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="ClubHacks Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="event-social-link"
                href={clubHacksSocials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="ClubHacks LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>

        <section className="section club-row">
          <SectionHeader title="Club Collaboration" subtitle="Hosted by student clubs" />
          <div className="grid three" aria-label="Collaborating clubs">
            {clubLogos.map((club) => (
              <Card key={club.name}>
                <div className="track-icon club-card-icon">
                  <img src={club.image} alt={club.name} />
                </div>
                <h3>{club.name}</h3>

                <div className="club-links">
                  {club.links.instagram && (
                    <a href={club.links.instagram} target="_blank" rel="noreferrer" aria-label={`${club.name} Instagram`}>
                      <FaInstagram />
                    </a>
                  )}
                  {club.links.discord && (
                    <a href={club.links.discord} target="_blank" rel="noreferrer" aria-label={`${club.name} Discord`}>
                      <FaDiscord />
                    </a>
                  )}
                  {club.links.website && (
                    <a href={club.links.website} target="_blank" rel="noreferrer" aria-label={`${club.name} Website`}>
                      <FaGlobe />
                    </a>
                  )}
                  {club.links.linkedin && (
                    <a href={club.links.linkedin} target="_blank" rel="noreferrer" aria-label={`${club.name} LinkedIn`}>
                      <FaLinkedin />
                    </a>
                  )}
                </div>
              </Card>
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

        <section id="workshops" className="section">
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

        <section id="sponsors" className="section">
          <SectionHeader title="Sponsors & Partners" subtitle="Supporting ClubHacks" />
          <div className="grid two">
            {sponsors.map((sponsor) => (
              <Card key={sponsor.name}>
                {sponsor.name === 'Featherless AI' && (
                  <div className="track-icon sponsor-logo">
                    <img src={featherlessLogo} alt="Featherless AI logo" />
                  </div>
                )}
                <h3>{sponsor.name}</h3>
                <p>{sponsor.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="prizes" className="section two-col">
          <div>
            <SectionHeader title="Prizes" subtitle="What you can win" />
            <div className="stack">
              <Card>
                <h3>Track Winners</h3>
                <ul className="criteria">
                  <li>Best AI Project — $100</li>
                  <li>Best CyberSecurity Project — $100</li>
                  <li>Best GreenTech Project — $100</li>
                  <li>Best Robotics Project — $100</li>
                </ul>
                <p><em>Each team splits the prize among members.</em></p>
              </Card>

              <Card>
                <h3>Partner Prize</h3>
                <p>
                  <strong>Best Use of Gemini</strong> — sponsored by <strong>GDG Windsor</strong>, awarded to the team
                  that makes the most effective and creative use of Gemini in their project.
                </p>
                <p><em>Additional partner prizes may be announced.</em></p>
                <p>
                  <strong>Featherless AI Prizes</strong> — 1st place: $300 in Featherless credits, 2nd place: $150, 3rd place: $75.
                </p>
              </Card>

              <Card>
                <h3>Certificates</h3>
                <p>All registered attendees will receive certificates after the event, so be sure to register in advance.</p>
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
                <li>Track relevance</li>
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
          <a href="https://clubhacks.devpost.com/?_gl=1*1c2o8xm*_gcl_au*ODYxMDE1NTMxLjE3NzA1NjU1Mzc.*_ga*Njc4NjQwNjAzLjE3NzA1NjU1Mzc.*_ga_0YHJK3Y10M*czE3NzMzNDYyNjIkbzE5JGcxJHQxNzczMzQ2OTY4JGo1NSRsMCRoMA..">Devpost</a>
          <a href={clubHacksSocials.instagram} target="_blank" rel="noreferrer" aria-label="ClubHacks Instagram">
            <FaInstagram />
          </a>
          <a href={clubHacksSocials.linkedin} target="_blank" rel="noreferrer" aria-label="ClubHacks LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
