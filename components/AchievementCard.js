export default function AchievementCard({ title, description, icon }) {
  return (
    <div className="glass p-6 text-center hover:border-cyan/50 transition border border-transparent">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/60 text-sm">{description}</p>
    </div>
  )
}
