'use client'

import { useState } from 'react'
import SectionTitle from '@/components/SectionTitle'

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    studentName: '',
    studentDOB: '',
    studentGender: '',
    previousSchool: '',
    levelApplying: '',
    additionalInfo: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          parentName: '',
          phone: '',
          email: '',
          studentName: '',
          studentDOB: '',
          studentGender: '',
          previousSchool: '',
          levelApplying: '',
          additionalInfo: '',
        })
      } else {
        const data = await response.json()
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="pt-32 section">
        <div className="container text-center">
          <div className="glass p-12 max-w-2xl mx-auto">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
            <p className="text-white/70 mb-6">
              Thank you for applying to G.S Nyirarukobwa. We have received your application and will contact you soon.
            </p>
            <a href="/" className="btn-primary inline-block">Return Home</a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 section">
      <div className="container max-w-3xl mx-auto">
        <h1 className="section-title text-center">Apply Online</h1>
        <p className="section-subtitle">
          Complete this form to register your child at G.S Nyirarukobwa.
        </p>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="glass p-8 space-y-6">
          {/* Parent/Guardian Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan">Parent / Guardian Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan focus:outline-none transition text-white"
                  placeholder="e.g., Jean Pierre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan focus:outline-none transition text-white"
                  placeholder="e.g., 0788 123 456"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan focus:outline-none transition text-white"
                placeholder="e.g., parent@email.com"
              />
            </div>
          </div>

          {/* Student Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan">Student Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Student Full Name *</label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan focus:outline-none transition text-white"
                  placeholder="e.g., Marie Aimee"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date of Birth *</label>
                <input
                  type="date"
                  name="studentDOB"
                  value={formData.studentDOB}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan focus:outline-none transition text-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium mb-2">Gender *</label>
                <select
                  name="studentGender"
                  value={formData.studentGender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan focus:outline-none transition text-white"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Level Applying For *</label>
                <select
                  name="levelApplying"
                  value={formData.levelApplying}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan focus:outline-none transition text-white"
                >
                  <option value="">Select Level</option>
                  <option value="Nursery">Nursery</option>
                  <option value="Lower Primary">Lower Primary</option>
                  <option value="Upper Primary">Upper Primary</option>
                  <option value="O-Level">O-Level</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">Previous School (if any)</label>
              <input
                type="text"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan focus:outline-none transition text-white"
                placeholder="e.g., G.S Another School"
              />
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan">Additional Information</h3>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan focus:outline-none transition text-white"
              placeholder="Any additional information you'd like to share..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>

          <p className="text-white/40 text-xs text-center">
            By submitting this form, you agree to the school's data collection policies.
          </p>
        </form>
      </div>
    </div>
  )
}
