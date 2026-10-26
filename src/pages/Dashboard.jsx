import { announcements, courses, deadlines, gpaTrend, kpis } from '../data/mock'

export default function Dashboard() {
  const max = Math.max(...gpaTrend.map((item) => item.gpa))

  return (
    <div className="grid">
      <section className="grid kpi-grid">
        {kpis.map((kpi) => (
          <article className="card kpi" key={kpi.label}>
            <div className="label">{kpi.label}</div>
            <div className="value">{kpi.value}</div>
            <div className={`hint ${kpi.tone}`}>{kpi.hint}</div>
          </article>
        ))}
      </section>

      <section className="grid split">
        <article className="card">
          <div className="section-title">
            <h3>CGPA trend</h3>
            <span className="muted">Last 6 semesters</span>
          </div>
          <div className="chart">
            {gpaTrend.map((item) => (
              <div className="bar-wrap" key={item.term}>
                <div className="bar" style={{ height: `${(item.gpa / max) * 100}%` }} />
                <span className="muted">{item.term}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="card">
          <div className="section-title">
            <h3>Upcoming deadlines</h3>
            <span className="muted">Next 10 days</span>
          </div>
          {deadlines.map((item) => (
            <div className="list-item" key={item.title}>
              <div>
                <strong>{item.title}</strong>
                <div className="muted">
                  {item.course} · {item.type}
                </div>
              </div>
              <span className="chip">{item.due}</span>
            </div>
          ))}
        </article>
      </section>

      <section className="grid split">
        <article className="card">
          <div className="section-title">
            <h3>Course health</h3>
            <span className="muted">AI-tagged status</span>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Score</th>
                <th>Attendance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.code}>
                  <td>
                    <strong>{course.name}</strong>
                    <div className="muted">{course.code}</div>
                  </td>
                  <td>{course.score}%</td>
                  <td>{course.attendance}%</td>
                  <td>
                    <span className={`badge ${course.status.toLowerCase()}`}>{course.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="card">
          <div className="section-title">
            <h3>Campus notices</h3>
            <span className="muted">For your cohort</span>
          </div>
          {announcements.map((item) => (
            <div className="list-item" key={item.title}>
              <strong>{item.title}</strong>
              <span className="muted">{item.time}</span>
            </div>
          ))}
        </article>
      </section>
    </div>
  )
}
