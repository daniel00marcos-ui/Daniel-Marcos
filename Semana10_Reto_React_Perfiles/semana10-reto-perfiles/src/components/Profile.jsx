// Componente reutilizable: recibe nombre y role mediante props.
export default function Profile({ nombre, role }) {
  return (
    <article className="profile">
      <div className="avatar">{nombre.trim().charAt(0).toUpperCase()}</div>
      <h2>{nombre}</h2>
      <p>{role}</p>
      <span className="status">● Disponible para proyectos</span>
    </article>
  )
}
