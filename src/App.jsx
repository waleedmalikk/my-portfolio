/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen body-bg text-slate-900 font-sans">
      <div className="max-w-4xl mx-auto p-6">
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="header-nav flex items-center justify-between py-4 rounded-2xl p-8 shadow-sm bg-white">
            <div className="text-lg font-semibold">Waleed Malik</div>
            <div className="space-x-4 text-sm">
              <a href="#experience" className="hover:underline">
                Experience
              </a>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </div>
          </nav>
        </motion.header>

        <main className="mt-8 space-y-16 main-container">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <footer className="text-center text-xs text-slate-500 py-8">
          © {new Date().getFullYear()} Waleed Malik — Built with Vite + React +
          Tailwind
        </footer>
      </div>
    </div>
  );
}
