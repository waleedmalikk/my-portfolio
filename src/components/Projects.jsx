const projects = [
  {
    title: "Operation Management System",
    desc: "ERP solution built with Angular for managing operations, shifts, and schedules.",
  },
  {
    title: "Cosmos (CRM)",
    desc: "CRM using Angular, Ionic, NestJS, Tailwind and SQL Server.",
  },
  {
    title: "TreatAnyone",
    desc: "Clinic admin app with scheduling and appointment flows.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="rounded-2xl p-6 shadow-sm bg-white">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="p-3 border rounded-lg">
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm text-slate-600 mt-1">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
