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

      <div className="contact">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-link">
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