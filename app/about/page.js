import SectionTitle from '@/components/SectionTitle'

export default function AboutPage() {
  return (
    <div className="pt-32 section">
      <div className="container max-w-4xl mx-auto">
        <h1 className="section-title text-center">About G.S Nyirarukobwa</h1>
        <p className="section-subtitle">
          Learn about our history, mission, vision, and values.
        </p>

        <div className="glass p-8 space-y-8">
          {/* History */}
          <div>
            <h2 className="text-2xl font-bold text-cyan mb-4">School History</h2>
            <p className="text-white/70 leading-relaxed">
              [Official school history will be provided by the administration]
            </p>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-2xl font-bold text-cyan mb-4">Mission</h2>
            <p className="text-white/70 leading-relaxed">
              [School mission statement will be provided by the administration]
            </p>
          </div>

          {/* Vision */}
          <div>
            <h2 className="text-2xl font-bold text-cyan mb-4">Vision</h2>
            <p className="text-white/70 leading-relaxed">
              [School vision statement will be provided by the administration]
            </p>
          </div>

          {/* Values */}
          <div>
            <h2 className="text-2xl font-bold text-cyan mb-4">Core Values</h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>[Value 1]</li>
              <li>[Value 2]</li>
              <li>[Value 3]</li>
            </ul>
          </div>

          {/* Timeline */}
          <div>
            <h2 className="text-2xl font-bold text-cyan mb-4">Our Journey</h2>
            <div className="space-y-4">
              {[
                { year: 'Foundation', desc: '[Year] — The school was founded.' },
                { year: 'Early Years', desc: '[Year] — Early years of growth and development.' },
                { year: 'Growth', desc: '[Year] — Expansion of academic levels and facilities.' },
                { year: 'Today', desc: '[Year] — Continuing to serve our community with excellence.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border-l-2 border-cyan pl-4">
                  <span className="text-cyan font-bold min-w-[100px]">{item.year}</span>
                  <span className="text-white/70">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
