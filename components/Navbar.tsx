'use client'

export default function Navbar() {
  return (
    <nav>
      <a className="nav-logo" href="#">OPD.dev</a>
      <ul className="nav-links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#chat">AI Chat</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="status-badge">
        <span className="sdot" />
        Open to Work
      </div>
    </nav>
  )
}
