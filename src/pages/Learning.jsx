import { learningPaths, resources } from '../data/mock'

export default function Learning() {
  return (
    <div className="grid">
      <section className="grid split">
        {learningPaths.map((path) => (
          <article className="card" key={path.id}>
            <div className="section-title">
              <h3>{path.title}</h3>
              <span className="chip">{path.progress}% complete</span>
            </div>
            <p className="muted">{path.reason}</p>
            <div className="progress">
              <span style={{ width: `${path.progress}%` }} />
            </div>
            <div className="chips">
              {path.modules.map((module) => (
                <span className="chip" key={module}>
                  {module}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <article className="card">
        <div className="section-title">
          <h3>Recommended resources</h3>
          <span className="muted">Ranked by your current gaps</span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Resource</th>
              <th>Type</th>
              <th>Time</th>
              <th>Match</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((item) => (
              <tr key={item.title}>
                <td>
                  <strong>{item.title}</strong>
                </td>
                <td>{item.type}</td>
                <td>{item.duration}</td>
                <td>{item.match}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </div>
  )
}
