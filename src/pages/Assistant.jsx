import { useState } from 'react'

const starter = [
  {
    role: 'bot',
    text: 'Hi Aarav. I can help with course planning, exam prep, deadlines, and study strategy. What do you want to work on?',
  },
]

function replyTo(message) {
  const text = message.toLowerCase()
  if (text.includes('compiler') || text.includes('cs322')) {
    return 'Compiler Design is your highest-risk course. Prioritize CFG practice tonight, then attend the parsing clinic. Predicted lift: +4 to +6 points if you complete both before Oct 30.'
  }
  if (text.includes('gpa') || text.includes('predict')) {
    return 'Your current trajectory is 8.42 CGPA. If attendance stays above 90% and assignments stay above 80%, the model expects an A- this term.'
  }
  if (text.includes('study') || text.includes('plan')) {
    return 'Suggested 14-hour week: 4h ML project, 4h compilers, 3h DBMS queries, 2h distributed systems, 1h writing polish. Keep one recovery block on Sunday.'
  }
  if (text.includes('deadline') || text.includes('exam')) {
    return 'Next critical items: ML milestone on Oct 28, Compiler midterm on Oct 30, DBMS lab on Nov 2. I recommend locking the compiler revision block first.'
  }
  return 'I can outline a weekly plan, explain a weak course, or walk through predicted GPA. Try asking about compilers, deadlines, or a study plan.'
}

const prompts = ['Compiler study plan', 'Predict my GPA', 'What is due this week?']

export default function Assistant() {
  const [messages, setMessages] = useState(starter)
  const [draft, setDraft] = useState('')

  function send(text) {
    const content = text.trim()
    if (!content) return
    setMessages((current) => [
      ...current,
      { role: 'user', text: content },
      { role: 'bot', text: replyTo(content) },
    ])
    setDraft('')
  }

  return (
    <article className="card chat">
      <div className="messages">
        {messages.map((message, index) => (
          <div className={`bubble ${message.role}`} key={`${message.role}-${index}`}>
            {message.text}
          </div>
        ))}
        <div className="chips" style={{ marginTop: 8 }}>
          {prompts.map((prompt) => (
            <button key={prompt} className="chip" type="button" onClick={() => send(prompt)}>
              {prompt}
            </button>
          ))}
        </div>
      </div>
      <form
        className="composer"
        onSubmit={(event) => {
          event.preventDefault()
          send(draft)
        }}
      >
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Ask about courses, GPA, or a study plan"
        />
        <button className="btn" type="submit">
          Send
        </button>
      </form>
    </article>
  )
}
