const skills = [
  {
    category: "Frontend",
    items: [
      "Angular",
      "JavaScript / TypeScript",
      "HTML / CSS",
      "Tailwind CSS",
      "Sass",
      "Angular Material",
      "PrimeNG",
      "NGXS Store",
      "Ionic",
      "jQuery",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "TypeORM",
      "Sequelize",
      "GraphQL",
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Azure Functions",
    ],
  },
  {
    category: "Testing & Tools",
    items: [
      "Jasmine",
      "Karma",
      "NPM",
      "Git",
      "CI/CD pipelines",
      "Docker",
      "REST APIs",
      "HTTPS",
      "Storybook",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="rounded-2xl p-6 shadow-sm bg-white mt-6">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 flex justify-around gap-4">
        {skills.map((s) => (
          <div
            key={s.category}
            className="flex-1 border p-4 border-slate-200 rounded-lg"
          >
            <div className="font-semibold">{s.category}</div>
            <ul className="mt-2 ml-2 list-disc text-sm text-slate-700">
              {s.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
