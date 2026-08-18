import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy/95 border-t border-white/10 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              G.S <span className="text-cyan">Nyirarukobwa</span>
            </h3>
            <p className="text-white/60 text-sm">
              Learning Today. Building Tomorrow.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/about" className="hover:text-cyan transition">About</Link></li>
              <li><Link href="/academics" className="hover:text-cyan transition">Academics</Link></li>
              <li><Link href="/staff" className="hover:text-cyan transition">Staff</Link></li>
              <li><Link href="/apply" className="hover:text-cyan transition">Admissions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>[School Phone Number]</li>
              <li>[School Email]</li>
              <li>[School Address]</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-cyan transition">Facebook</a></li>
              <li><a href="#" className="hover:text-cyan transition">YouTube</a></li>
              <li><a href="#" className="hover:text-cyan transition">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/40">
          <p>© 2026 G.S Nyirarukobwa. All rights reserved.</p>
         <p class="dev">
    Designed & developed by 
    <a href="https://imena-tech.vercel.app/" target="_blank" style="color:var(--cyan); hover:text-white; transition;">
        iMENA Tech
    </a>
</p>
        </div>
      </div>
    </footer>
  )
}
