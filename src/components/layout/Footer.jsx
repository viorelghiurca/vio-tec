import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react'
import BgImage from '../ui/BgImage'

const services = [
  { label: 'Softwareentwicklung',    to: '/leistungen#softwareentwicklung' },
  { label: 'Automatisierung',        to: '/leistungen#automatisierung' },
  { label: 'Schnittstellen & APIs',  to: '/leistungen#schnittstellen-apis' },
  { label: 'Webentwicklung',         to: '/leistungen#webentwicklung' },
  { label: 'IT-Lösungen',            to: '/leistungen#it-loesungen' },
]

const legal = [
  { label: 'Impressum',          to: '/impressum' },
  { label: 'Datenschutz',        to: '/datenschutz' },
  { label: 'Cookie-Richtlinie',  to: '/cookie-richtlinie' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-neutral-950 text-neutral-400 overflow-hidden">
      <BgImage src="/images/server-raum.jpg" opacity="opacity-[0.04]" />
      <div className="section-container py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center">
                <span className="text-white font-black text-sm tracking-tight">VIO</span>
              </div>
              <span className="text-xl font-bold text-white">
                Vio<span className="text-primary-400">-Tec</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Individuelle Software, Automatisierung &amp; IT-Lösungen für Unternehmen —
              individuelle Anwendungen, automatisierte Prozesse und Schnittstellen
              zwischen bestehenden Systemen.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:info@vio-tec.de" className="flex items-center gap-2.5 text-sm hover:text-white transition-colors group">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <span>info@vio-tec.de</span>
              </a>
              <div className="flex items-center gap-2.5 text-sm">
                <MapPin className="w-4 h-4 text-primary-400 shrink-0" />
                <span>Deutschland – deutschlandweiter Service</span>
              </div>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Leistungen
            </h4>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s.to}>
                  <Link
                    to={s.to}
                    className="text-sm hover:text-white hover:translate-x-0.5 transition-all duration-150 inline-block"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Rechtliches
            </h4>
            <ul className="space-y-3">
              {legal.map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Wobei kann ich Sie unterstützen?
              </h4>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors"
              >
                Projekt besprechen
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {year} Vio-Tec · Viorel Ghiurca · IHK-geprüfter Fachinformatiker
          </p>
          <div className="flex items-center gap-3 text-xs text-neutral-600">
            <span>Professionelle IT-Lösungen · Made in Germany</span>
            <span className="text-neutral-700">·</span>
            <span>
              Fotos von{' '}
              <a
                href="https://www.pexels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                Pexels
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
