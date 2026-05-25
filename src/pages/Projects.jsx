import '../stylesheets/Projects.css'

const projects = [
  {
    title: "Parking4SBU",
    description: "Smart parking availability and pricing platform for Stony Brook University.",
    bullets: [
      "Built full-stack app with React, Node, PostgreSQL, PostGIS",
      "Implemented geospatial queries for parking availability",
      "Designed REST APIs and role-based admin dashboard",
    ],
  },
  {
    title: "Fake Stack Overflow",
    description: "Full-featured Q&A platform inspired by Stack Overflow.",
    bullets: [
      "User authentication and role-based permissions",
      "Question, answer, and comment system with voting",
      "Search, tagging, and pagination",
    ],
  },
  {
    title: "campus24/7 [SBUHacks]",
    description: "Platform that allows students to discover, create, and manage campus events in real time.",
    bullets: [
      "Creation, deletion, and discovery of events",
      "Searchable and filterable event listings",
      "Structured backend APIs with clear separation of concerns",
    ],
  },
  {
    title: "Fantasy Football Dynasty",
    description: "A full-stack fantasy football dynasty app with React/TypeScript frontend and a Node/TypeScript backend using SQLite for persistence.",
    bullets: [
      "Structured as separate frontend/ and backend/ apps (React + Node)",
      "SQLite-backed persistence layer in the backend",
      "TypeScript-first codebase",
    ],
  },
  {
    title: "School Manager",
    description: "A desktop application for managing large-scale academic records.",
    bullets: [
      "Managed 1,500+ students/instructors and 40,000+ textbooks",
      "Designed a strong object-oriented architecture using inheritance and abstraction",
      "Implemented persistent storage with Java Serialization",
    ],
  },
];

export default function Projects() {
  return (
    <main className="projects-page">
      <h1 className="projects-heading">projects</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-desc">{project.description}</p>
            <ul className="project-list">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}