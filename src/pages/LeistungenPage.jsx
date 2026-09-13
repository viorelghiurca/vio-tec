import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import {
  Code2, Workflow, Cable, Globe, Wrench,
  CheckCircle2, ArrowRight
} from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/ui/SEOHead'
import BgImage from '../components/ui/BgImage'

// ── Service Detail Block ──────────────────────────────────────────────────────
function ServiceBlock({ id, icon, gradient, title, tagline, problem, solution, benefits, cta, image, imageAlt }) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Content */}
        <AnimatedSection direction="left">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg mb-6`}>
            {icon}
          </div>
          <span className="badge badge-primary mb-3">{tagline}</span>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4 tracking-tight">{title}</h2>

          <div className="space-y-5 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                Das Problem
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm">{problem}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                Die Lösung
              </h3>
              <p className="text-neutral-600 leading-relaxed text-sm">{solution}</p>
            </div>
          </div>

          <Link to="/kontakt" className="btn-primary">
            {cta || 'Beratung anfragen'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>

        {/* Image + Benefits */}
        <AnimatedSection direction="right">
          {image && (
            <div className="relative rounded-2xl overflow-hidden mb-6 shadow-lg">
              <img
                src={image}
                alt={imageAlt || title}
                className="w-full h-52 object-cover"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent`} />
            </div>
          )}
          <div className="bg-neutral-50 rounded-3xl p-8">
            <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-5">
              Typische Einsatzbereiche
            </h3>
            <ul className="space-y-4">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-neutral-800">{b.title}</p>
                    {b.desc && <p className="text-xs text-neutral-500 mt-0.5">{b.desc}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

const serviceData = [
  {
    id: 'softwareentwicklung',
    icon: <Code2 className="w-8 h-8" />,
    gradient: 'from-violet-500 to-primary-600',
    title: 'Softwareentwicklung',
    tagline: 'Individuelle Anwendungen',
    image: '/images/profil-arbeitsplatz.jpg',
    imageAlt: 'Softwareentwicklung – Entwickler bei der Arbeit am Computer',
    problem: 'Standardsoftware passt oft nicht zu den tatsächlichen Arbeitsabläufen. Es fehlen Funktionen, Daten werden doppelt gepflegt oder wichtige Schritte laufen weiterhin manuell nebenher.',
    solution: 'Ich entwickle individuelle Anwendungen und interne Firmenlösungen, die zu Ihren Arbeitsabläufen und Anforderungen passen — vom kleinen Werkzeug bis zur Datenbankanwendung.',
    cta: 'Projekt besprechen',
    benefits: [
      { title: 'Individuelle Desktop-Anwendungen', desc: 'Zugeschnitten auf Ihre Arbeitsweise' },
      { title: 'Interne Firmenanwendungen', desc: 'Werkzeuge für Ihr Team statt Insellösungen' },
      { title: 'Kleine Webanwendungen', desc: 'Im Browser nutzbar, ohne Installation' },
      { title: 'Datenbankanwendungen', desc: 'Daten strukturiert erfassen und auswerten' },
      { title: 'Individuelle Tools', desc: 'Gezielte Lösungen für konkrete Aufgaben' },
    ],
  },
  {
    id: 'automatisierung',
    icon: <Workflow className="w-8 h-8" />,
    gradient: 'from-emerald-500 to-teal-600',
    title: 'Automatisierung',
    tagline: 'Manuelle Arbeit reduzieren',
    image: '/images/ki-automatisierung.jpg',
    imageAlt: 'Automatisierung von Prozessen und Arbeitsabläufen',
    problem: 'Wiederkehrende Aufgaben wie Excel-Pflege, Dateiverarbeitung oder das Erstellen von Reports kosten jede Woche Arbeitszeit — und manuelle Schritte sind fehleranfällig.',
    solution: 'Ich automatisiere Excel, Dateien, Datenbanken und wiederkehrende Arbeitsabläufe, sodass manuelle Arbeit spürbar sinkt. Wo es sinnvoll ist, setze ich dabei auch KI als Werkzeug ein.',
    cta: 'Prozess automatisieren',
    benefits: [
      { title: 'Excel-Automatisierung', desc: 'Auswertungen und Tabellen ohne Handarbeit' },
      { title: 'Datei- und Dokumentenverarbeitung', desc: 'Automatisch sortieren, umbenennen, verarbeiten' },
      { title: 'Datenverarbeitung', desc: 'Daten zusammenführen, bereinigen, aufbereiten' },
      { title: 'PowerShell- und Skript-Automatisierung', desc: 'Wiederkehrende Aufgaben zuverlässig ausführen' },
      { title: 'Automatisierte Reports', desc: 'Berichte erstellen sich auf Knopfdruck oder nach Zeitplan' },
    ],
  },
  {
    id: 'schnittstellen-apis',
    icon: <Cable className="w-8 h-8" />,
    gradient: 'from-orange-500 to-amber-600',
    title: 'Schnittstellen & APIs',
    tagline: 'Systeme verbinden',
    image: '/images/digitalisierung.jpg',
    imageAlt: 'Schnittstellen und Datenaustausch zwischen Systemen',
    problem: 'Viele Unternehmen nutzen mehrere Programme, die nicht miteinander sprechen. Daten werden per Hand von einem System ins andere übertragen — doppelt, langsam und fehleranfällig.',
    solution: 'Ich verbinde bestehende Systeme miteinander und sorge dafür, dass Daten automatisiert zwischen Ihren Anwendungen ausgetauscht werden — über Standard-APIs oder individuelle Schnittstellen.',
    cta: 'Schnittstelle anfragen',
    benefits: [
      { title: 'REST APIs', desc: 'Entwicklung und Anbindung moderner Schnittstellen' },
      { title: 'API-Anbindungen', desc: 'Externe Dienste in Ihre Abläufe integrieren' },
      { title: 'Datenimport und -export', desc: 'Daten automatisiert übernehmen und bereitstellen' },
      { title: 'Verbindung verschiedener Softwaresysteme', desc: 'Schluss mit doppelter Datenpflege' },
      { title: 'Individuelle Schnittstellen', desc: 'Auch wenn keine Standard-API existiert' },
    ],
  },
  {
    id: 'webentwicklung',
    icon: <Globe className="w-8 h-8" />,
    gradient: 'from-primary-500 to-cyan-600',
    title: 'Webentwicklung',
    tagline: 'Websites & Webanwendungen',
    image: '/images/webentwicklung.jpg',
    imageAlt: 'Professionelle Webentwicklung – Code auf dem Bildschirm',
    problem: 'Eine veraltete Website oder fehlende Weblösung kostet potenzielle Kunden. Und wenn interne Abläufe nur am einzelnen Rechner funktionieren, fehlt oft eine Anwendung, die das Team im Browser nutzen kann.',
    solution: 'Ich entwickle moderne Unternehmenswebsites und individuelle Webanwendungen für unterschiedliche Anforderungen — von der neuen Website bis zur Erweiterung bestehender Seiten.',
    cta: 'Website besprechen',
    benefits: [
      { title: 'Unternehmenswebsites', desc: 'Professioneller Auftritt mit klarer Struktur' },
      { title: 'Individuelle Webanwendungen', desc: 'Browser-basierte Lösungen für Ihr Team' },
      { title: 'Responsive Webentwicklung', desc: 'Funktioniert auf Smartphone, Tablet und Desktop' },
      { title: 'Bestehende Websites erweitern', desc: 'Neue Funktionen statt teurem Neubau' },
      { title: 'SEO-Grundlagen von Anfang an', desc: 'Saubere Technik, damit Sie gefunden werden' },
    ],
  },
  {
    id: 'it-loesungen',
    icon: <Wrench className="w-8 h-8" />,
    gradient: 'from-pink-500 to-rose-600',
    title: 'IT-Lösungen',
    tagline: 'Technische Unterstützung',
    image: '/images/it-support.jpg',
    imageAlt: 'Technische IT-Unterstützung und Fehleranalyse',
    problem: 'Technische Probleme mit Servern, Netzwerk oder Hardware kosten Zeit und Nerven — besonders, wenn kein kompetenter Ansprechpartner greifbar ist.',
    solution: 'Ich unterstütze Sie bei Linux, Servern, Netzwerken, Hardware und individuellen IT-Problemen — mit strukturierter Fehleranalyse und Lösungen, die zu Ihrer Umgebung passen.',
    cta: 'IT-Problem schildern',
    benefits: [
      { title: 'Linux und Server', desc: 'Einrichtung, Wartung und Fehlerbehebung' },
      { title: 'Netzwerk', desc: 'Stabile und nachvollziehbare Konfiguration' },
      { title: 'Hardware', desc: 'Beratung, Einrichtung und Problemlösung' },
      { title: 'Technische Fehleranalyse', desc: 'Ursachen finden statt Symptome behandeln' },
      { title: 'Individuelle technische Lösungen', desc: 'Auch für Probleme abseits des Standards' },
    ],
  },
]

export default function LeistungenPage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])

  return (
    <>
      <SEOHead
        title="Leistungen – Softwareentwicklung, Automatisierung, APIs & IT-Lösungen"
        description="VIO-TEC Leistungen: Individuelle Softwareentwicklung, Prozessautomatisierung, Schnittstellen & APIs, Webentwicklung und IT-Lösungen für kleine und mittlere Unternehmen."
        canonical="/leistungen"
      />

      {/* Header */}
      <div className="relative bg-gradient-to-br from-neutral-950 via-primary-950 to-neutral-900 pt-32 pb-20 overflow-hidden">
        <BgImage src="/images/webentwicklung.jpg" />
        <div className="section-container text-center relative z-10">
          <AnimatedSection>
            <span className="badge bg-white/10 text-primary-200 mb-4">Leistungen</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Individuelle Software, Automatisierung &amp; IT-Lösungen
            </h1>
            <p className="text-primary-200 text-lg max-w-xl mx-auto">
              Ich entwickle individuelle Anwendungen, automatisiere wiederkehrende Prozesse
              und verbinde bestehende Systeme miteinander.
            </p>
          </AnimatedSection>

          {/* Quick nav */}
          <AnimatedSection delay={200} className="mt-8 flex flex-wrap justify-center gap-3">
            {serviceData.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={e => {
                  e.preventDefault()
                  document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-4 py-2 text-sm font-medium text-primary-200 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors"
              >
                {s.title}
              </a>
            ))}
          </AnimatedSection>
        </div>
      </div>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="section-container space-y-28">
          {serviceData.map((service, i) => (
            <div key={service.id}>
              <ServiceBlock {...service} />
              {i < serviceData.length - 1 && <div className="divider mt-28" />}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-neutral-50">
        <div className="section-container">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 to-primary-900 p-10 lg:p-16 text-center">
              <BgImage src="/images/webentwicklung.jpg" opacity="opacity-[0.12]" />
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Wobei kann ich Sie unterstützen?
                </h2>
                <p className="text-primary-200 mb-8 max-w-xl mx-auto">
                  Beschreiben Sie kurz, was Sie benötigen. Ich prüfe Ihre Anfrage und gebe
                  Ihnen eine erste kostenlose Einschätzung — unverbindlich.
                </p>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 px-8 py-4 text-primary-700 bg-white font-semibold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
                >
                  Kostenlose erste Einschätzung
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
