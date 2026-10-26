import { useMemo, useState } from 'react'

const defaults = {
  attendance: 91,
  studyHours: 14,
  previousGpa: 8.24,
  assignments: 82,
  midterm: 76,
}

function predict(values) {
  const attendance = Number(values.attendance)
  const studyHours = Number(values.studyHours)
  const previousGpa = Number(values.previousGpa)
  const assignments = Number(values.assignments)
  const midterm = Number(values.midterm)

  const studyScore = Math.min(studyHours / 20, 1) * 100
  const raw =
    attendance * 0.18 +
    studyScore * 0.16 +
    (previousGpa / 10) * 100 * 0.28 +
    assignments * 0.2 +
    midterm * 0.18

  const gpa = Math.max(5, Math.min(10, raw / 10 + 0.15))
  const risk = gpa >= 8.2 ? 'Low' : gpa >= 7.2 ? 'Moderate' : 'High'
  const grade = gpa >= 9 ? 'A' : gpa >= 8 ? 'A-' : gpa >= 7 ? 'B+' : 'B'

  const notes = []
  if (attendance < 85) notes.push('Attendance is below the safe band for distinction.')
  if (studyHours < 12) notes.push('Increase weekly study time by 3–4 focused hours.')
  if (assignments < 80) notes.push('Assignment completion is dragging predicted GPA.')
  if (midterm < 75) notes.push('A compiler/DBMS clinic before midterms would lift the forecast.')
  if (!notes.length) notes.push('Signals are healthy. Maintain current pace through finals.')

  return { gpa: gpa.toFixed(2), risk, grade, notes, percent: Math.round(gpa * 10) }
}

export default function Performance() {
  const [form, setForm] = useState(defaults)
  const [result, setResult] = useState(() => predict(defaults))

  const fields = useMemo(
    () => [
      { key: 'attendance', label: 'Attendance (%)', min: 40, max: 100 },
      { key: 'studyHours', label: 'Weekly study hours', min: 2, max: 40 },
      { key: 'previousGpa', label: 'Previous CGPA', min: 5, max: 10, step: 0.01 },
      { key: 'assignments', label: 'Assignment completion (%)', min: 40, max: 100 },
      { key: 'midterm', label: 'Midterm average (%)', min: 30, max: 100 },
    ],
    [],
  )

  function update(key, value) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function onSubmit(event) {
    event.preventDefault()
    setResult(predict(form))
  }

  return (
    <div className="grid split">
      <form className="card grid form-grid" onSubmit={onSubmit}>
        {fields.map((field) => (
          <div className="field" key={field.key}>
            <label htmlFor={field.key}>{field.label}</label>
            <input
              id={field.key}
              type="number"
              min={field.min}
              max={field.max}
              step={field.step || 1}
              value={form[field.key]}
              onChange={(event) => update(field.key, event.target.value)}
            />
          </div>
        ))}
        <div className="field" style={{ gridColumn: '1 / -1' }}>
          <button className="btn" type="submit">
            Generate AI prediction
          </button>
        </div>
      </form>

      <article className="card prediction">
        <div className="score-ring" style={{ '--p': result.percent }}>
          <div className="score-inner">{result.gpa}</div>
        </div>
        <h3>Predicted term GPA</h3>
        <p className="muted" style={{ margin: '8px 0 16px' }}>
          Likely grade {result.grade} · Risk {result.risk}
        </p>
        {result.notes.map((note) => (
          <p key={note} className="muted" style={{ marginBottom: 8 }}>
            {note}
          </p>
        ))}
      </article>
    </div>
  )
}
