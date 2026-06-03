import { useEffect, useState } from "react";

const projects = [
  {
    title: "Serena Hotel",
    desc: "Plataforma de gestión hotelera con reservas, pagos Mercado Pago y dashboard administrativo. Trabajo en equipo (3 personas). 650+ commits.",
    tech: ["React", "Redux", "Node.js", "PostgreSQL", "Mercado Pago"],
    url: "https://serena-hotel.vercel.app",
    github: "https://github.com/alej098/proyecto-serenaHotel",
  },
  {
    title: "Contabilidad Personal",
    desc: "App full stack para finanzas personales con CRUD de transacciones, dashboard financiero y tests automatizados (Jest + Supertest).",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS"],
    url: null,
    github: "https://github.com/alej098/Contabilidad-inicial-React",
  },
  {
    title: "WellHome",
    desc: "Sistema de administración de condominios con arquitectura híbrida SQL + NoSQL. Backend completo + dashboard + landing page.",
    tech: ["React", "Node.js", "PostgreSQL", "MongoDB", "Express"],
    url: null,
    github: "https://github.com/alej098/wellhome-api",
    repos: [
      { label: "API", url: "https://github.com/alej098/wellhome-api" },
      { label: "Web", url: "https://github.com/alej098/wellhome-web" },
      { label: "Dashboard", url: "https://github.com/alej098/wellhome-dashboard" },
    ],
  },
  {
    title: "Catálogo de Perros",
    desc: "SPA para explorar razas desde TheDogAPI con búsqueda, filtros, ordenamientos y formulario controlado.",
    tech: ["React", "Redux", "Node.js", "PostgreSQL", "CSS"],
    url: null,
    github: "https://github.com/alej098/Proyecto-individual",
  },
  {
    title: "Catálogo de Videojuegos",
    desc: "SPA con consumo de API externa, búsqueda, filtros combinados y ordenamientos múltiples.",
    tech: ["React", "Redux", "Node.js", "PostgreSQL", "CSS"],
    url: null,
    github: "https://github.com/alej098/proyecto-videojuegos",
  },
];

const skills = [
  "JavaScript", "TypeScript", "React", "Redux", "Node.js", "Express",
  "PostgreSQL", "MongoDB", "Sequelize", "Mongoose", "TailwindCSS",
  "Vite", "Git", "REST APIs", "JWT", "Mercado Pago", "HTML", "CSS",
];

const learning = [
  { name: "Fundamentos de IA Generativa — Google", url: "https://cloud.google.com/learn/training" },
  { name: "IA para Tecnología — Edutin Academy", url: "https://edutin.com/curso-de-ia-para-tecnologia" },
  { name: "AI for Everyone (Andrew Ng) — Coursera", url: "https://www.coursera.org/learn/ai-for-everyone" },
];

export default function App() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a1a]/80 backdrop-blur border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-bold text-lg">DB</span>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#projects" className="hover:text-white transition">Proyectos</a>
            <a href="#certifications" className="hover:text-white transition">Cursos</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#contact" className="hover:text-white transition">Contacto</a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 pt-14">
        <div className={`text-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold mb-6 shadow-lg shadow-blue-500/30">
            DB
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Diego Becerra
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6">
            Full Stack Developer
          </p>
          <p className="text-gray-500 max-w-lg mx-auto mb-8">
            React · TypeScript · Node.js · PostgreSQL · Aprendiendo IA
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition">
              Ver Proyectos
            </a>
            <a href="#contact" className="px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-medium transition">
              Contacto
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-2">Proyectos</h2>
        <p className="text-gray-500 mb-10">Aplicaciones web que he construido</p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition group">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-white/10 rounded">{t}</span>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                {p.url && (
                  <a href={p.url} target="_blank" className="text-sm text-blue-400 hover:text-blue-300 transition">
                    Demo →
                  </a>
                )}
                {p.repos ? p.repos.map((r) => (
                  <a key={r.label} href={r.url} target="_blank" className="text-sm text-gray-400 hover:text-white transition">
                    {r.label} →
                  </a>
                )) : p.github && (
                  <a href={p.github} target="_blank" className="text-sm text-gray-400 hover:text-white transition">
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="certifications" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-2">Formación</h2>
        <p className="text-gray-500 mb-8">Educación y certificaciones</p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 max-w-xl mb-4">
          <h3 className="font-semibold text-lg">Bootcamp Full Stack — Henry</h3>
          <p className="text-gray-400 text-sm mt-1">2023</p>
          <p className="text-gray-500 text-sm mt-2">Programa intensivo de desarrollo web full stack con más de 800 horas de formación práctica.</p>
          <a href="/henry-cert.pdf" target="_blank" className="inline-block mt-3 text-sm text-blue-400 hover:text-blue-300 transition">Ver certificado →</a>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 max-w-xl">
          <h3 className="font-semibold text-lg">Desarrollo con IA: de 0 a producción</h3>
          <p className="text-gray-400 text-sm mt-1">Big School / MoureDev — Abril 2026 · 6 horas</p>
          <p className="text-gray-500 text-sm mt-2">Jornadas formativas de iniciación al desarrollo con inteligencia artificial. Avalado por Brais Moure y Romuald Fons.</p>
          <a href="/ai-cert.pdf" target="_blank" className="inline-block mt-3 text-sm text-blue-400 hover:text-blue-300 transition">Ver certificado →</a>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 max-w-xl mt-4">
          <h3 className="font-semibold text-lg">De 0 a Agentes: Introducción a AI Agents</h3>
          <p className="text-gray-400 text-sm mt-1">Big School — Mayo 2026</p>
          <p className="text-gray-500 text-sm mt-2">Curso práctico sobre agentes de IA autónomos, herramientas y flujos de trabajo.</p>
          <a href="/agents-cert.pdf" target="_blank" className="inline-block mt-3 text-sm text-blue-400 hover:text-blue-300 transition">Ver certificado →</a>
        </div>
      </section>

      <section id="learning" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-2">Aprendiendo</h2>
        <p className="text-gray-500 mb-8">Cursos que estoy tomando para especializarme en IA</p>
        <div className="grid md:grid-cols-3 gap-4">
          {learning.map((c) => (
            <a key={c.name} href={c.url} target="_blank" className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-purple-500/50 transition group">
              <h3 className="font-medium group-hover:text-purple-400 transition text-sm">{c.name}</h3>
            </a>
          ))}
        </div>
      </section>

      <section id="skills" className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-2">Tecnologías</h2>
        <p className="text-gray-500 mb-10">Stack con el que trabajo</p>
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:border-blue-500/50 hover:bg-blue-500/10 transition">
              {s}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-2">Contacto</h2>
        <p className="text-gray-500 mb-8">Conectemos</p>
        <div className="flex gap-6 justify-center flex-wrap">
          <a href="https://github.com/alej098" target="_blank" className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/d-alejandro-becerra-g-93319025a" target="_blank" className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 transition">
            LinkedIn
          </a>
          <a href="mailto:urzola2003@gmail.com" className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-blue-500/50 transition">
            Email
          </a>
          <a href="/cv.html" target="_blank" className="px-6 py-3 bg-blue-600/20 border border-blue-500/40 rounded-lg hover:bg-blue-600/30 transition font-semibold">
            CV Español 📄
          </a>
          <a href="/cv-en.html" target="_blank" className="px-6 py-3 bg-blue-600/20 border border-blue-500/40 rounded-lg hover:bg-blue-600/30 transition font-semibold">
            CV English 📄
          </a>
        </div>
      </section>

      <footer className="text-center py-8 text-gray-600 text-sm border-t border-white/5">
        Diego Becerra © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
