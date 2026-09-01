import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronLeft, ChevronRight, Globe, Workflow, Cable, Code2, Wrench,
  CheckCircle2, ArrowRight, Shield, Zap, Clock,
  Users, Award, MessageCircle, ChevronDown, Lightbulb
} from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/ui/SEOHead'
import BgImage from '../components/ui/BgImage'

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-950 via-primary-950 to-neutral-900 pt-20">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BgImage src="/images/hero-workspace.jpg" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="section-container relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight text-balance"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            Individuelle Software,{' '}
            <span className="bg-gradient-to-r from-primary-300 via-primary-200 to-primary-300 bg-clip-text text-transparent">
              Automatisierung
            </span>{' '}
            &amp; IT-Lösungen für Unternehmen
          </motion.h1>

          {/* Subline */}
          <motion.p
            className="text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.28 }}
          >
            Ich entwickle individuelle Anwendungen, automatisiere wiederkehrende Prozesse
            und verbinde bestehende Systeme miteinander.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.44 }}
          >
            <Link to="/kontakt" className="btn-primary btn-lg text-base">
              Projekt besprechen
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border border-white/20 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-200"
            >
              Sie haben ein IT-Problem?
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-16 text-sm text-neutral-400"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.58 }}
          >
            <TrustPill icon={<CheckCircle2 className="w-4 h-4 text-accent-400" />} text="IHK-geprüfter Fachinformatiker" />
            <TrustPill icon={<Shield className="w-4 h-4 text-accent-400" />} text="DSGVO-konform" />
            <TrustPill icon={<Zap className="w-4 h-4 text-accent-400" />} text="Schnelle Reaktionszeit" />
            <TrustPill icon={<Users className="w-4 h-4 text-accent-400" />} text="Persönlicher Ansprechpartner" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-2 text-neutral-500 animate-bounce">
          <span className="text-xs font-medium">Mehr erfahren</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  )
}

function TrustPill({ icon, text }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <span>{text}</span>
    </div>
  )
}

// ── Services Overview ─────────────────────────────────────────────────────────
const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Softwareentwicklung',
    desc: 'Individuelle Anwendungen und interne Firmenlösungen, passend zu Ihren Arbeitsabläufen und Anforderungen.',
    to: '/leistungen#softwareentwicklung',
    color: 'from-violet-500 to-primary-600',
    image: '/images/profil-arbeitsplatz.jpg',
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: 'Automatisierung',
    desc: 'Excel, Dateien, Datenbanken und wiederkehrende Arbeitsabläufe automatisieren und manuelle Arbeit reduzieren.',
    to: '/leistungen#automatisierung',
    color: 'from-emerald-500 to-teal-600',
    image: '/images/ki-automatisierung.jpg',
  },
  {
    icon: <Cable className="w-6 h-6" />,
    title: 'Schnittstellen & APIs',
    desc: 'Bestehende Systeme miteinander verbinden und Daten automatisiert zwischen Anwendungen austauschen.',
    to: '/leistungen#schnittstellen-apis',
    color: 'from-orange-500 to-amber-600',
    image: '/images/digitalisierung.jpg',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Webentwicklung',
    desc: 'Moderne Unternehmenswebsites und individuelle Webanwendungen für unterschiedliche Anforderungen.',
    to: '/leistungen#webentwicklung',
    color: 'from-primary-500 to-cyan-600',
    image: '/images/webentwicklung.jpg',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'IT-Lösungen',
    desc: 'Technische Unterstützung bei Linux, Servern, Netzwerken, Hardware und individuellen IT-Problemen.',
    to: '/leistungen#it-loesungen',
    color: 'from-pink-500 to-rose-600',
    image: '/images/it-support.jpg',
  },
]

function ServiceThumb({ image, icon, color, title }) {
  const [failed, setFailed] = useState(false)

  if (failed || !image) {
    return (
      <div className={`h-32 bg-gradient-to-br ${color} flex items-center justify-center text-white/80`}>
        <div className="w-10 h-10">{icon}</div>
      </div>
    )
  }

  return (
    <div className="relative h-32 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        onError={() => setFailed(true)}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent`} />
    </div>
  )
}

function ServicesOverview() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="section-container">
        <AnimatedSection className="text-center mb-16">
          <span className="badge badge-primary mb-4">Leistungen</span>
          <h2 className="section-title">Womit ich Ihnen helfen kann</h2>
          <p className="section-subtitle mx-auto">
            Ob individuelle Software, Automatisierung wiederkehrender Abläufe, Schnittstellen
            zwischen Ihren Systemen, eine neue Website oder ein konkretes IT-Problem — hier
            finden Sie die passende Leistung.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 80}>
              <Link to={s.to} className="card-hover flex flex-col h-full group overflow-hidden">
                <ServiceThumb image={s.image} icon={s.icon} color={s.color} title={s.title} />
                <div className="p-5 pt-4 flex flex-col flex-1">
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed flex-1">{s.desc}</p>
                  <div className="flex items-center gap-1.5 mt-4 text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Mehr erfahren <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10">
          <Link to="/leistungen" className="btn-outline btn-lg">
            Alle Leistungen ansehen
            <ChevronRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

// ── IT-Problem Quick Contact ──────────────────────────────────────────────────
function ITProblemSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl border border-primary-100 bg-primary-50/60 p-8 sm:p-10 lg:p-14">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary-100/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-primary-600" />
                </div>
                <span className="badge badge-primary">Unverbindlich anfragen</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3 tracking-tight">
                Wobei kann ich Sie unterstützen?
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Beschreiben Sie kurz, was Sie benötigen. Ich prüfe Ihre Anfrage und gebe
                Ihnen eine erste kostenlose Einschätzung.
              </p>
              <Link to="/kontakt" className="btn-primary btn-lg">
                Kostenlose erste Einschätzung
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// ── Why VIO-IT ────────────────────────────────────────────────────────────────
const benefits = [
  {
    icon: <Award className="w-5 h-5" />,
    title: 'IHK-geprüfter Fachinformatiker',
    desc: 'Abgeschlossene IHK-Ausbildung als Fachinformatiker mit praktischer Erfahrung in Softwareentwicklung, Automatisierung und IT-Betrieb.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Persönlicher Ansprechpartner',
    desc: 'Kein anonymes Agentur-Postfach, sondern direkter Kontakt zu der Person, die Ihre Lösung auch umsetzt.',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Schnelle Reaktionszeiten',
    desc: 'Bei IT-Problemen zählt jede Minute. Wir reagieren schnell und lösen Probleme effizient.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'DSGVO & Datenschutz',
    desc: 'Alle Lösungen werden datenschutzkonform nach deutschen Standards entwickelt und betrieben.',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Passende Technologien',
    desc: 'Von Skript-Automatisierung über Datenbanken bis zu modernen Web-Frameworks — ich wähle das Werkzeug, das zu Ihrem Problem passt.',
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: 'Klare Kommunikation',
    desc: 'Kein IT-Kauderwelsch. Verständliche Erklärungen, transparente Angebote, ehrliche Beratung.',
  },
]

function WhyVioIT() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="badge badge-primary mb-4">Warum VIO-IT?</span>
            <h2 className="section-title mb-6">
              Persönlicher Ansprechpartner statt anonymer Agentur
            </h2>
            <p className="text-neutral-500 leading-relaxed mb-8">
              Als IHK-geprüfter Fachinformatiker entwickle ich individuelle Software, automatisiere
              Abläufe und löse technische Probleme für kleine und mittlere Unternehmen.
              Sie sprechen direkt mit der Person, die Ihre Lösung umsetzt — ohne Umwege
              über Projektmanager oder Ticketsysteme.
            </p>
            <div className="relative rounded-2xl overflow-hidden mb-8 shadow-lg">
              <img
                src="/images/beratung.jpg"
                alt="Team-Meeting mit Laptops in einem modernen Tech-Büro"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/30 to-transparent" />
            </div>
            <Link to="/ueber-mich" className="btn-primary">
              Mehr über VIO-IT
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 60}>
                <div className="flex gap-4 p-5 rounded-2xl bg-neutral-50 hover:bg-primary-50 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-200 transition-colors">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900 mb-1">{b.title}</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Process Steps ─────────────────────────────────────────────────────────────
const steps = [
  { step: '01', title: 'Kostenlose erste Einschätzung', desc: 'Sie beschreiben kurz Ihr Problem oder Vorhaben — ich prüfe die Anfrage und gebe Ihnen eine ehrliche, unverbindliche Einschätzung.' },
  { step: '02', title: 'Analyse & Konzept', desc: 'Ich analysiere Ihre aktuelle Situation und entwickle ein passendes Konzept für Ihre Anforderungen.' },
  { step: '03', title: 'Umsetzung', desc: 'Professionelle Implementierung mit regelmäßigen Updates und transparenter Kommunikation.' },
  { step: '04', title: 'Support & Weiterentwicklung', desc: 'Langfristige Betreuung, schnelle Hilfe bei Problemen und kontinuierliche Optimierung.' },
]

function HowWeWork() {
  return (
    <section className="relative section-padding bg-gradient-to-br from-primary-950 to-neutral-950 overflow-hidden">
      <BgImage src="/images/beratung.jpg" />
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="badge bg-white/10 text-primary-200 mb-4">So läuft es ab</span>
          <h2 className="section-title text-white mb-4">
            Von der Idee zur Lösung — in 4 Schritten
          </h2>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Transparente Zusammenarbeit von Anfang an. Kein Bluff, keine Überraschungen.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((s, i) => (
            <AnimatedSection key={s.step} delay={i * 100} className="h-full">
              <div className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group h-full flex flex-col">
                <span className="text-4xl font-black text-white/10 mb-4 block group-hover:text-white/20 transition-colors">
                  {s.step}
                </span>
                <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-primary-200 leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                    <ChevronRight className="w-6 h-6 text-primary-400/50" />
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Projects ──────────────────────────────────────────────────────────────────
// Nur echte, tatsächlich umgesetzte Projekte eintragen — keine erfundenen
// Kunden, Zahlen oder Ergebnisse.
const projects = [
  {
    title: 'Datenbereinigung & Archivierung im Terabyte-Bereich',
    problem: 'Über Jahre gewachsene Datenbestände im Terabyte-Bereich belegten Speicherplatz und waren kaum noch überschaubar.',
    solution: 'Automatisierte Bereinigung und Archivierung nach definierten Regeln — inklusive Protokollierung, damit jeder Schritt nachvollziehbar bleibt.',
    result: 'Aufgeräumte Datenbestände, freigewordener Speicherplatz und ein wiederholbarer Prozess statt einmaliger Handarbeit.',
    technologies: ['PowerShell', 'C#', 'Automatisierung'],
  },
  {
    title: 'KI-gestützte Sortierung gescannter Dokumente',
    problem: 'Gescannte Akten kamen als unsortierte PDFs vom Scanner und mussten von Hand zugeordnet werden.',
    solution: 'Automatisierte Erkennung und Sortierung der Dokumente mit KI-Unterstützung — die PDFs werden ausgelesen und der richtigen Ablage zugeordnet.',
    result: 'Deutlich weniger manuelle Sortierarbeit und eine konsistente, nachvollziehbare Ablage.',
    technologies: ['KI-Texterkennung', 'PDF-Verarbeitung', 'Automatisierung'],
  },
  {
    title: 'Individuelle Zeiterfassung',
    problem: 'Arbeitszeiten wurden uneinheitlich und mit viel manuellem Aufwand erfasst.',
    solution: 'Entwicklung von Zeiterfassungsprogrammen, angepasst an die tatsächlichen Abläufe im Betrieb.',
    result: 'Einheitliche, nachvollziehbare Zeiterfassung ohne Zettelwirtschaft.',
    technologies: ['Individuelle Software', 'Datenbanken'],
  },
  {
    title: 'Lagerdatenerfassung für Speditionen',
    problem: 'Lagerbestände — Standardware wie Gefahrgut — mussten manuell erfasst und ermittelt werden.',
    solution: 'Automatisierte Erfassung und Ermittlung der Lagerdaten, mit getrennter Behandlung von Gefahrgut und regulärer Ware.',
    result: 'Aktuelle, verlässliche Bestandsdaten ohne manuelle Zählung.',
    technologies: ['Automatisierung', 'Datenbanken', 'Logistik'],
  },
  {
    title: 'Auftragserfassung im Intranet',
    problem: 'Aufträge liefen über verschiedene Wege ein und wurden manuell erfasst.',
    solution: 'Automatisierte Auftragserfassung direkt im Firmen-Intranet — zentral, strukturiert und für alle Beteiligten zugänglich.',
    result: 'Ein einheitlicher Erfassungsweg und weniger Übertragungsfehler.',
    technologies: ['Webentwicklung', 'Intranet', 'Datenbanken'],
  },
  {
    title: 'Lobby-Display mit Live-Daten',
    problem: 'Kennzahlen und Statistiken aus den internen Systemen waren im Haus nicht sichtbar.',
    solution: 'Automatisiertes Display in der Lobby, das Daten und Statistiken direkt aus den Datenbanken bezieht und aktuell hält.',
    result: 'Aktuelle Zahlen auf einen Blick — ganz ohne manuelle Pflege.',
    technologies: ['Datenbanken', 'Dashboard', 'Automatisierung'],
  },
  {
    title: 'Postfach-Überwachung mit Benachrichtigung',
    problem: 'Volle E-Mail-Postfächer fielen erst auf, wenn keine Nachrichten mehr ankamen.',
    solution: 'Automatisierte Ermittlung der Postfachgrößen mit rechtzeitiger Benachrichtigung der betroffenen Mitarbeiter.',
    result: 'Grenzwerte werden früh erkannt — keine überraschend vollen Postfächer mehr.',
    technologies: ['Skript-Automatisierung', 'E-Mail', 'Monitoring'],
  },
]

function ProjectCard({ title, problem, solution, result, technologies }) {
  return (
    <div className="card p-6 sm:p-8 h-full flex flex-col">
      <h3 className="text-lg font-bold text-neutral-900 mb-5 tracking-tight">{title}</h3>
      <div className="space-y-4 flex-1">
        <div>
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">Problem</p>
          <p className="text-sm text-neutral-600 leading-relaxed">{problem}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">Lösung</p>
          <p className="text-sm text-neutral-600 leading-relaxed">{solution}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">Ergebnis</p>
          <p className="text-sm text-neutral-600 leading-relaxed">{result}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-neutral-100">
        {technologies.map(t => (
          <span key={t} className="badge bg-neutral-100 text-neutral-600">{t}</span>
        ))}
      </div>
    </div>
  )
}

function ProjectsSection() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = (i) => {
    const track = trackRef.current
    if (!track) return
    const clamped = Math.max(0, Math.min(projects.length - 1, i))
    const card = track.children[clamped]
    if (!card) return
    // Mobil rasten die Karten mittig ein (snap-center), ab sm linksbündig (snap-start)
    const isMobile = !window.matchMedia('(min-width: 640px)').matches
    const left = isMobile
      ? card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2
      : card.offsetLeft - track.offsetLeft
    track.scrollTo({ left, behavior: 'smooth' })
  }

  const handleScroll = () => {
    const track = trackRef.current
    if (!track || track.children.length < 2) return
    const step = track.children[1].offsetLeft - track.children[0].offsetLeft
    setActiveIndex(Math.max(0, Math.min(projects.length - 1, Math.round(track.scrollLeft / step))))
  }

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <AnimatedSection className="text-center mb-12">
          <span className="badge badge-primary mb-4">Aus der Praxis</span>
          <h2 className="section-title">Umgesetzte Lösungen</h2>
          <p className="section-subtitle mx-auto">
            Eine Auswahl umgesetzter Projekte — vom Problem über die Umsetzung bis zum
            praktischen Nutzen im Arbeitsalltag.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-4 px-[max(7.5vw,calc((100vw_-_400px)/2))] sm:mx-0 sm:px-0"
          >
            {projects.map(p => (
              <div key={p.title} className="snap-center sm:snap-start shrink-0 w-[85vw] max-w-[400px] sm:w-[400px]">
                <ProjectCard {...p} />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Vorheriges Projekt"
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-600 transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Projekt ${i + 1} anzeigen`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-6 bg-primary-600' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollToIndex(activeIndex + 1)}
              disabled={activeIndex === projects.length - 1}
              aria-label="Nächstes Projekt"
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-600 transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </AnimatedSection>

        <AnimatedSection className="text-center mt-10">
          <Link to="/kontakt" className="btn-outline btn-lg">
            Ähnliches Problem? Projekt besprechen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}


// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Für wen ist das hier eigentlich gedacht?',
    a: 'Ich arbeite am liebsten mit kleinen und mittelständischen Unternehmen, Selbstständigen und lokalen Betrieben zusammen — also genau den Menschen, die ihre IT in guten Händen wissen möchten, ohne eine große Agentur zu beauftragen.',
  },
  {
    q: 'Was kostet die erste Einschätzung?',
    a: 'Gar nichts. Die erste Einschätzung ist vollständig kostenlos und unverbindlich. Ich sehe mir Ihre Anfrage an, gebe ehrliches Feedback — und wenn es nicht passt, sage ich das auch.',
  },
  {
    q: 'Wie schnell melden Sie sich bei einem IT-Problem?',
    a: 'Bei dringenden Problemen bin ich in der Regel innerhalb weniger Stunden erreichbar. Für Kunden mit laufender Betreuung vereinbaren wir konkrete Reaktionszeiten, an die ich mich halte.',
  },
  {
    q: 'Arbeiten Sie auch remote?',
    a: 'Ja, der Großteil meiner Arbeit läuft remote — das spart Zeit und funktioniert sehr gut. Bei Bedarf komme ich aber auch gerne persönlich vorbei. Ich bin deutschlandweit verfügbar.',
  },
  {
    q: 'Sind Ihre Lösungen DSGVO-konform?',
    a: 'Ja, und das ist kein Marketingversprechen. Datenschutz ist für mich Grundvoraussetzung, kein optionales Extra. Alles was ich entwickle und einrichte, wird datenschutzkonform umgesetzt und dokumentiert.',
  },
  {
    q: 'Ich verstehe nicht viel von IT – ist das ein Problem?',
    a: 'Überhaupt nicht — im Gegenteil. Ich erkläre alles auf Augenhöhe, ohne Fachbegriffe die niemand braucht. Mein Ziel ist, dass Sie am Ende verstehen, was ich gemacht habe und warum.',
  },
]

function FAQ() {
  return (
    <section className="relative section-padding bg-neutral-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-50/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Sticky info panel */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <span className="badge badge-primary mb-4">FAQ</span>
              <h2 className="section-title mb-4">Häufige Fragen</h2>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Die wichtigsten Fragen — ehrlich und direkt beantwortet. Falls Ihre Frage nicht dabei ist, melden Sie sich einfach.
              </p>

              <FaqImage />

              <Link to="/kontakt" className="btn-primary">
                Eigene Frage stellen
                <MessageCircle className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Right: FAQ items */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <FAQItem question={faq.q} answer={faq.a} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqImage() {
  const [failed, setFailed] = useState(false)

  if (failed) return null

  return (
    <div className="relative rounded-2xl overflow-hidden mb-8 shadow-lg">
      <img
        src="/images/faq.jpg"
        alt="Häufige Fragen — Q&A"
        className="w-full h-48 object-cover"
        loading="lazy"
        onError={() => setFailed(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white text-sm font-semibold">Fragen & Antworten</p>
        <p className="text-primary-200 text-xs">Ehrlich und direkt beantwortet</p>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`rounded-2xl border overflow-hidden transition-all duration-300 ${open ? 'bg-white border-primary-200 shadow-md' : 'bg-white border-neutral-100 hover:border-primary-100'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left group"
      >
        <span className={`text-sm font-semibold flex-1 transition-colors ${open ? 'text-primary-700' : 'text-neutral-900'}`}>
          {question}
        </span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-all duration-300 ${open ? 'text-primary-600 rotate-180' : 'text-neutral-300'}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? '400px' : '0', opacity: open ? 1 : 0 }}
      >
        <div className="px-5 pb-5 text-sm text-neutral-500 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  )
}

// ── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 p-10 lg:p-16 text-center">
            <BgImage src="/images/webentwicklung.jpg" opacity="opacity-[0.12]" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                Lassen Sie uns über Ihr Projekt sprechen
              </h2>
              <p className="text-primary-200 max-w-xl mx-auto mb-8 text-lg">
                Beschreiben Sie kurz, was Sie benötigen — Sie erhalten eine ehrliche,
                kostenlose erste Einschätzung. Unverbindlich und ohne Verpflichtung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-700 bg-white rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
                >
                  Kostenlose erste Einschätzung
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/leistungen"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border border-white/30 rounded-xl hover:bg-white/10 transition-colors"
                >
                  Leistungen entdecken
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// ── Page Export ───────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <SEOHead
        description="VIO-IT – Individuelle Software, Automatisierung & IT-Lösungen für Unternehmen. Softwareentwicklung, Prozessautomatisierung, Schnittstellen & APIs, Webentwicklung. Viorel Ghiurca, IHK-geprüfter Fachinformatiker. Kostenlose erste Einschätzung."
        canonical="/"
      />
      <Hero />
      <ServicesOverview />
      <ITProblemSection />
      <WhyVioIT />
      <HowWeWork />
      <ProjectsSection />
      <FAQ />
      <CTABanner />
    </>
  )
}
