import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { student } from '../data/mock'

const titles = {
  '/': ['Campus Dashboard', 'Live academic overview and AI insights'],
  '/performance': ['Performance Prediction', 'Estimate term GPA from current study signals'],
  '/learning': ['Personalized Learning', 'Adaptive paths based on your course gaps'],
  '/assistant': ['AI Academic Assistant', 'Ask questions about courses, deadlines, and study plans'],
  '/profile': ['Student Profile', 'Identity, academics, and campus achievements'],
}

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/performance', label: 'Performance' },
  { to: '/learning', label: 'Learning Path' },
  { to: '/assistant', label: 'AI Assistant' },
  { to: '/profile', label: 'Profile' },
]

export default function AppLayout() {
  const { pathname } = useLocation()
  const [title, subtitle] = titles[pathname] || titles['/']
  const initials = student.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">SC</div>
          <div>
            <h1>Smart College</h1>
            <p>AI Academic Ecosystem</p>
          </div>
        </div>
        <nav className="nav">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-card">
          <h3>Advisor insight</h3>
          <p>
            Your compiler score is the only course in the watch band. Book a 20-minute clinic
            before the Oct 30 midterm.
          </p>
        </div>
      </aside>
      <div className="main">
        <header className="topbar">
          <div>
            <h2>{title}</h2>
            <span>{subtitle}</span>
          </div>
          <div className="user-chip">
            <div className="avatar">{initials}</div>
            <div>
              <strong style={{ fontSize: 13 }}>{student.name}</strong>
              <div className="muted">{student.id}</div>
            </div>
          </div>
        </header>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
