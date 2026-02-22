'use client'
import { useState } from 'react'

const MOCK_RESPONSES = [
  {
    score: 92,
    summary: "Excellent fit. 7 years React experience exceeds requirements. Recent startup work and exact tech stack match.",
    recommendation: "Interview ASAP",
    strengths: ["7+ years React/Next.js", "Startup experience", "TypeScript expert"],
    gaps: []
  },
  {
    score: 68,
    summary: "Good overall fit but lacks recent startup experience. Strong React fundamentals.",
    recommendation: "Interview",
    strengths: ["5 years React", "Solid portfolio"],
    gaps: ["No startup exp", "Basic TypeScript"]
  }
]

export default function Home() {
  const [jd, setJd] = useState('')
  const [resume, setResume] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const analyze = () => {
    setLoading(true)
    setTimeout(() => {
      setResult(MOCK_RESPONSES[Math.floor(Math.random() * 2)])
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-3xl p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Recruit-AI
        </h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Description
            </label>
            <textarea
              value={jd}
              onChange={(e) => setJd(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500"
              rows={4}
              placeholder="Paste job description..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Resume
            </label>
            <textarea
              value={resume}
              onChange={(e) => setResume(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500"
              rows={6}
              placeholder="Paste resume text..."
            />
          </div>

          <button
            onClick={analyze}
            disabled={!jd || !resume || loading}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-xl hover:from-orange-600 disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Analyze Fit'}
          </button>

          {result && (
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-8 rounded-2xl border-2 border-emerald-200">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-emerald-600">{result.score}</div>
                <div className="text-sm text-emerald-700 mt-1">Fit Score</div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold mb-3">Summary</h3>
                  <p className="text-gray-700">{result.summary}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Recommendation</h3>
                  <div className="text-2xl font-bold text-emerald-600">
                    {result.recommendation}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Strengths</h3>
                <ul className="space-y-1">
                  {result.strengths.map((s, i) => (
                    <li key={i} className="text-emerald-700">• {s}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
