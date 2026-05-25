export default function Home() {
  return (
    <main className="content">
      <h1 className="intro">hey, it's Michael ✌️</h1>
      <p className="about-me">
        I am a computer science graduate from Stony Brook University with
        hands-on experience building full-stack web applications. Passionate
        about creating scalable, user-focused solutions and continuously
        improving through real-world projects. Open to working!
      </p>

      <p className="currently">
        currently — looking for full-time roles in full-stack development
      </p>

      <div className="skills">
        <div className="skill-row">
          <span className="skill-label">languages</span>
          <span className="skill-items">Java, TypeScript, JavaScript, Python</span>
        </div>
        <div className="skill-row">
          <span className="skill-label">frameworks</span>
          <span className="skill-items">React, Node.js, Express, MongoDB, PostgreSQL, PyTorch, NumPy, Pandas</span>
        </div>
        <div className="skill-row">
          <span className="skill-label">tools</span>
          <span className="skill-items">Git, Jest, Cypress, Bash, WebSocket</span>
        </div>
        <div className="skill-row">
          <span className="skill-label">concepts</span>
          <span className="skill-items">REST APIs, Authentication, OOP, Data Structures, Algorithms</span>
        </div>
      </div>

      <div className="contact">
        <a href="/ResumeMichaelLieberman.pdf" target="_blank" download rel="noreferrer" className="contact-link">
          resume
        </a>
        <span className="contact-divider">/</span>
        <a href="mailto:michaellieberman44@gmail.com" className="contact-link">
          michaellieberman44@gmail.com
        </a>
      </div>

    </main>
  )
}
