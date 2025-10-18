import React from "react";
const experiences = [
  {
    company: "Contour Software (Trapeze Group)",
    period: "Jan 2024 – July 2025",
    title: "Senior Software Developer",
    location: "Lahore, Pakistan",
    bullets: [
      "Led Jonas Club (golf club CRM) styling switch, upgrades, and production optimizations.",
      "Implemented authentication, authorization and accessibility best-practices.",
      "Optimized large calendar UIs, virtual scroll, and memory usage.",
      "Used Akita store, Angular OIDC, PrimeNG, Angular Material, and Storybook.",
    ],
  },
  {
    company: "Cinnova Technologies",
    period: "June 2023 – Dec 2023",
    title: "Full-Stack Developer",
    location: "Lahore, Pakistan",
    bullets: [
      "Built CRM & inventory features with Angular and NestJS.",
      "Developed role-based UI screens and dynamic forms.",
    ],
  },
  {
    company: "Greyloops",
    period: "Dec 2021 – June 2023",
    title: "Full-Stack Developer",
    location: "Lahore, Pakistan",
    bullets: ["Clinic management app, calendar integrations, appointments."],
  },
  {
    company: "Afiniti Ltd.",
    period: "Mar 2021 – Oct 2021",
    title: "Data Analyst",
    location: "Lahore, Pakistan",
    bullets: ["EDA, predictive models, and MySQL query optimizations."],
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
