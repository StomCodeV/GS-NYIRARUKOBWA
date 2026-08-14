import Image from 'next/image'

export default function StaffCard({ name, position, photo }) {
  return (
    <div className="glass p-6 text-center hover:translate-y-[-4px] transition">
      <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-royal-blue/30">
        {photo ? (
          <Image src={photo} alt={name} width={96} height={96} className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            👤
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-cyan text-sm">{position}</p>
    </div>
  )
}
