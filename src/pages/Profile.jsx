import { achievements, courses, student } from '../data/mock'

export default function Profile() {
  const initials = student.name
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <div className="grid split">
      <article className="card">
        <div className="profile-hero">
          <div className="profile-photo">{initials}</div>
          <div>
            <h3>{student.name}</h3>
            <p className="muted">{student.program}</p>
            <p className="muted">
              {student.year} · {student.semester}
            </p>
          </div>
        </div>
        <dl className="grid meta-grid meta">
          <div>
            <dt>Student ID</dt>
            <dd>{student.id}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{student.email}</dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>{student.phone}</dd>
          </div>
          <div>
            <dt>Advisor</dt>
            <dd>{student.advisor}</dd>
          </div>
          <div>
            <dt>CGPA</dt>
            <dd>{student.gpa}</dd>
          </div>
          <div>
            <dt>Credits earned</dt>
            <dd>{student.credits}</dd>
          </div>
        </dl>
      </article>

      <article className="card">
        <div className="section-title">
          <h3>Achievements</h3>
        </div>
        {achievements.map((item) => (
          <div className="list-item" key={item.title}>
            <strong>{item.title}</strong>
            <span className="muted">{item.detail}</span>
          </div>
        ))}
      </article>

      <article className="card" style={{ gridColumn: '1 / -1' }}>
        <div className="section-title">
          <h3>Enrolled courses</h3>
          <span className="muted">Semester 6</span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Course</th>
              <th>Score</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.code}>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td>{course.score}%</td>
                <td>{course.attendance}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </div>
  )
}
