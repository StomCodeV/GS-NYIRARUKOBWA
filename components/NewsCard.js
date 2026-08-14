import Image from 'next/image'

export default function NewsCard({ title, date, excerpt, image }) {
  return (
    <div className="glass overflow-hidden hover:translate-y-[-4px] transition">
      <div className="h-48 bg-royal-blue/30 relative">
        {image ? (
          <Image src={image} alt={title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            📰
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="text-white/40 text-sm mb-2">{date}</p>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-white/60 text-sm">{excerpt}</p>
      </div>
    </div>
  )
}
