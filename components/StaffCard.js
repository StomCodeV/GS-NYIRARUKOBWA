export default function StaffCard({ name, position, photo }) {
  return (
    <div className="glass p-6 text-center hover:translate-y-[-4px] transition">
      <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-royal-blue/30 flex items-center justify-center text-4xl">
        👤
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-cyan text-sm">{position}</p>
    </div>
  )
}
