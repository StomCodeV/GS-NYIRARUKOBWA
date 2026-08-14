import Image from 'next/image'

export default function TestimonialCard({ name, class: studentClass, quote, photo }) {
  return (
    <div className="glass p-6 text-center">
      <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden bg-royal-blue/30">
        {photo ? (
          <Image src={photo} alt={name} width={64} height={64} className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl">
            👤
          </div>
        )}
      </div>
      <p className="text-white/80 italic mb-4">"{quote}"</p>
      <h4 className="font-semibold">{name}</h4>
      <p className="text-white/40 text-sm">{studentClass}</p>
    </div>
  )
}
