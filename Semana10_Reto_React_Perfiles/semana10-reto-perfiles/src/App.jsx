import Profile from './components/Profile.jsx'

// Cada objeto contiene las propiedades que pasamos al componente Profile.
const personas = [
  { id: 1, nombre: 'Ana Torres', role: 'Frontend Developer' },
  { id: 2, nombre: 'Carlos Ramírez', role: 'Backend Developer' },
  { id: 3, nombre: 'Lucía Mendoza', role: 'UI/UX Designer' },
  { id: 4, nombre: 'José Paredes', role: 'Full Stack Developer' },
]

export default function App() {
  return (
    <main className="container">
      <span className="eyebrow">RETO · SEMANA 10 · REACT</span>
      <h1>Conoce a nuestro equipo</h1>
      <p className="intro">Ejercicio de React: componentes reutilizables y propiedades (props).</p>
      <section className="grid" aria-label="Perfiles del equipo">
        {personas.map(persona => (
          <Profile key={persona.id} nombre={persona.nombre} role={persona.role} />
        ))}
      </section>
      <footer>Desarrollado con React + Vite · Ejercicio académico</footer>
    </main>
  )
}
