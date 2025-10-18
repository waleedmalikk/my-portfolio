const experiences = [
  {
    company: "Contour Software (Jonas Club)",
    period: "Sept 2025 – Present",
    title: "Senior Software Developer",
    location: "Lahore, Pakistan",
    bullets: [
      "Led frontend development for Jonas Club CRM.",
      "Upgraded the application to the latest Angular version.",
      "Implemented best practices in authentication, authorization accessibility, and state management",
      "Managed production build optimization and deployed application updates.",
    ],
  },

  {
    company: "Contour Software (Trapeze Group)",
    period: "Jan 2024 – Aug 2025",
    title: "Software Developer",
    location: "Lahore, Pakistan",
    bullets: [
      "Developed transportation ERP system UI to handle hundreds of employee schedules, shifts, and absences.",
      "Implemented variable-height virtual scroll to reduce memory usage by 400% and optimized Angular lifecycle hooks.",
      "Built reusable UI components (calendars, tables, modals, dialogs) packaged via Storybook.",
      "Used Akita for complex state management and RxJS OnPush to fix re-render issues.",
      "Achieved 80%+ unit test coverage with Jasmine & Karma.",
      "Followed Agile methodology, actively participating in sprint planning and reviews.",
    ],
  },
  {
    company: "Cinnova Technologies",
    period: "June 2023 – Dec 2023",
    title: "Full-Stack Developer",
    location: "Lahore, Pakistan",
    bullets: [
      " Developed CRM & inventory management system using Angular, NGXS, Ionic, NestJS, SQL Server.",
      "Built role-based UI screens, reactive forms, and dynamic validations.",
      "Integrated serverless Node.js functions and legacy JavaScript/jQuery components.",
    ],
  },
  {
    company: "Greyloops",
    period: "Dec 2021 – June 2023",
    title: "Full-Stack Developer",
    location: "Lahore, Pakistan",
    bullets: [
      " Built clinic management system with Angular, Node.js, Bootstrap, MySQL, and GraphQL.",
      "Developed modules for doctors, patients, and appointments with full calendar integration.",
    ],
  },
  {
    company: "Afiniti Ltd.",
    period: "Mar 2021 – Oct 2021",
    title: "Data Analyst",
    location: "Lahore, Pakistan",
    bullets: [
      "Conducted exploratory data analysis, built predictive models in Python, and optimized MySQL queries.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="rounded-2xl p-6 shadow-sm bg-white">
      <h2 className="text-2xl font-semibold">Work Experience</h2>
      <div className="mt-4 space-y-6">
        {experiences.map((e) => (
          <div key={e.company} className="border-l-2 pl-4 border-slate-200">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium">
                  {e.title} — {e.company}
                </div>
                <div className="text-xs text-slate-500">
                  {e.location} · {e.period}
                </div>
              </div>
            </div>
            <ul className="mt-2 ml-2 list-disc text-sm text-slate-700">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
