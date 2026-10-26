export const student = {
  name: 'Aarav Mehta',
  id: 'STU-2024-1847',
  program: 'B.Tech Computer Science',
  year: '3rd Year',
  semester: 'Semester 6',
  email: 'aarav.mehta@smartcollege.edu',
  phone: '+91 98765 43210',
  advisor: 'Dr. Nisha Kapoor',
  gpa: 8.42,
  attendance: 91,
  credits: 118,
  rank: 12,
}

export const kpis = [
  { label: 'Current CGPA', value: '8.42', hint: '+0.18 vs last term', tone: 'up' },
  { label: 'Attendance', value: '91%', hint: 'Above department avg', tone: 'up' },
  { label: 'Active Courses', value: '6', hint: '18 credits this term', tone: 'neutral' },
  { label: 'AI Risk Score', value: 'Low', hint: 'On track to graduate', tone: 'up' },
]

export const gpaTrend = [
  { term: 'S1', gpa: 7.6 },
  { term: 'S2', gpa: 7.9 },
  { term: 'S3', gpa: 8.1 },
  { term: 'S4', gpa: 8.0 },
  { term: 'S5', gpa: 8.24 },
  { term: 'S6', gpa: 8.42 },
]

export const courses = [
  { code: 'CS301', name: 'Machine Learning', score: 86, attendance: 94, status: 'Strong' },
  { code: 'CS314', name: 'Distributed Systems', score: 78, attendance: 88, status: 'Stable' },
  { code: 'CS322', name: 'Compiler Design', score: 71, attendance: 82, status: 'Watch' },
  { code: 'MA210', name: 'Linear Algebra', score: 90, attendance: 96, status: 'Strong' },
  { code: 'HS118', name: 'Technical Writing', score: 84, attendance: 91, status: 'Strong' },
  { code: 'CS330', name: 'Database Systems', score: 74, attendance: 85, status: 'Watch' },
]

export const deadlines = [
  { title: 'ML Project Milestone 2', course: 'CS301', due: 'Oct 28', type: 'Project' },
  { title: 'Compiler Midterm', course: 'CS322', due: 'Oct 30', type: 'Exam' },
  { title: 'DBMS Lab Submission', course: 'CS330', due: 'Nov 02', type: 'Lab' },
  { title: 'Advisor Meeting', course: 'Mentoring', due: 'Nov 04', type: 'Meeting' },
]

export const announcements = [
  { title: 'Placement drive: Analytics internships', time: '2h ago' },
  { title: 'Library hours extended during midterms', time: 'Yesterday' },
  { title: 'New AI tutoring slots open this week', time: '2 days ago' },
]

export const learningPaths = [
  {
    id: 'ml',
    title: 'Strengthen Machine Learning',
    reason: 'You score well, but project depth can push you to distinction.',
    progress: 62,
    modules: ['Feature Engineering Lab', 'Model Evaluation Clinic', 'Capstone Pattern Review'],
  },
  {
    id: 'compilers',
    title: 'Compiler Design Recovery',
    reason: 'Lowest current score. Parsing and IR need extra practice.',
    progress: 28,
    modules: ['CFG Drill Set', 'Lexer/Parser Walkthrough', 'Weekly TA Office Hours'],
  },
  {
    id: 'db',
    title: 'Database Systems Practice',
    reason: 'Query optimization and indexing are the main gaps.',
    progress: 41,
    modules: ['SQL Query Studio', 'Indexing Case Studies', 'Normalization Workshop'],
  },
]

export const resources = [
  { title: 'MIT OCW: Intro to Algorithms', type: 'Course', duration: '12 hrs', match: 96 },
  { title: 'Stanford CS229 Notes (selected)', type: 'Reading', duration: '4 hrs', match: 91 },
  { title: 'Compiler Construction visualizer', type: 'Tool', duration: 'Practice', match: 88 },
  { title: 'Database indexing flashcards', type: 'Drill', duration: '45 min', match: 84 },
]

export const achievements = [
  { title: 'Dean’s List', detail: 'Fall 2025' },
  { title: 'Hackathon Finalist', detail: 'Campus AI Sprint' },
  { title: 'Research Assistant', detail: 'NLP Lab' },
  { title: 'Peer Mentor', detail: 'First-year CS cohort' },
]
