import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useState, useRef } from 'react'
import {
  Mail, MapPin, Clock, MessageCircle, User,
  Building2, Phone, Send, CheckCircle2
} from 'lucide-react'
import AnimatedSection from '../components/ui/AnimatedSection'
import SEOHead from '../components/ui/SEOHead'
import BgImage from '../components/ui/BgImage'
import { checkSpam, markSubmitted } from '../lib/spamProtection'

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const needs = [
  'Software entwickeln',
  'Prozess automatisieren',
  'Website',
  'API / Schnittstelle',
  'IT-Problem',
  'Sonstiges',
]

const urgencyOptions = [
  'kurzfristig',
  'innerhalb der nächsten Wochen',
  'noch offen',
]

export default function KontaktPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const honeypotRef = useRef('')

  const onSubmit = async (data) => {
    const spam = checkSpam({ honeypot: honeypotRef.current, formId: 'kontakt' })
    if (spam.blocked) {
      if (spam.reason !== 'bot') toast.error(spam.reason)
      return
    }

    if (!WEB3FORMS_KEY) {
      toast.error('Formular-Versand ist in dieser Umgebung nicht konfiguriert (VITE_WEB3FORMS_KEY fehlt in der .env).')
      return
    }

    const bedarf = Array.isArray(data.bedarf) ? data.bedarf.join(', ') : data.bedarf

    setIsSubmitting(true)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Neue Anfrage: ${bedarf}`,
          from_name: 'VIO-TEC Website',
          name: data.name,
          email: data.email,
          firma: data.firma || '—',
          telefon: data.telefon || '—',
          bedarf,
          dringlichkeit: data.dringlichkeit || 'noch offen',
          nachricht: data.nachricht,
        }),
      })

      const result = await response.json()
      if (result.success) {
        markSubmitted('kontakt')
        setSubmitted(true)
        reset()
        toast.success('Nachricht erfolgreich gesendet!')
      } else {
        throw new Error(result.message || 'Unbekannter Fehler')
      }
    } catch (err) {
      console.error(err)
      toast.error('Fehler beim Senden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an info@vio-tec.de')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEOHead
        title="Kontakt – Kostenlose erste Einschätzung anfragen"
        description="Kontaktieren Sie VIO-TEC – Viorel Ghiurca, IHK-geprüfter Fachinformatiker. Beschreiben Sie Ihr Anliegen zu Softwareentwicklung, Automatisierung, APIs, Webentwicklung oder IT-Problemen und erhalten Sie eine kostenlose erste Einschätzung."
        canonical="/kontakt"
      />

      <div className="relative bg-gradient-to-br from-neutral-950 via-primary-950 to-neutral-900 pt-32 pb-20 overflow-hidden">
        <BgImage src="/images/kontakt-laptop.jpg" />
        <div className="section-container text-center relative z-10">
          <AnimatedSection>
            <span className="badge bg-white/10 text-primary-200 mb-4">Kontakt</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              Wobei kann ich Sie unterstützen?
            </h1>
            <p className="text-primary-200 text-lg max-w-xl mx-auto">
              Beschreiben Sie kurz, was Sie benötigen. Ich prüfe Ihre Anfrage und gebe Ihnen
              eine erste kostenlose Einschätzung — unverbindlich.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <section className="section-padding bg-neutral-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

            {/* Contact Info */}
            <AnimatedSection direction="left" className="lg:col-span-1">
              <div className="space-y-6">
                <ContactCard
                  icon={<Mail className="w-5 h-5 text-primary-600" />}
                  title="E-Mail"
                  content={<a href="mailto:info@vio-tec.de" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">info@vio-tec.de</a>}
                />
                <ContactCard
                  icon={<MapPin className="w-5 h-5 text-primary-600" />}
                  title="Einsatzgebiet"
                  content={<p className="text-sm text-neutral-600">Deutschland – Remote & vor Ort</p>}
                />
                <ContactCard
                  icon={<Clock className="w-5 h-5 text-primary-600" />}
                  title="Erreichbarkeit"
                  content={
                    <div className="text-sm text-neutral-600 space-y-0.5">
                      <p>Mo–Fr: 09:00 – 18:00 Uhr</p>
                      <p className="text-xs text-neutral-400">Für Notfälle nach Vereinbarung</p>
                    </div>
                  }
                />

                <div className="p-5 bg-primary-50 rounded-2xl border border-primary-100">
                  <p className="text-sm font-semibold text-primary-800 mb-2">
                    Schnelle Rückmeldung garantiert
                  </p>
                  <p className="text-xs text-primary-600">
                    Ich melde mich in der Regel innerhalb weniger Stunden bei Ihnen zurück — persönlich und unverbindlich.
                  </p>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="/images/kontakt-laptop.jpg"
                    alt="Laptop am Arbeitsplatz – Kontaktaufnahme per E-Mail"
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/20 to-transparent" />
                </div>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-accent-500" />
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900 mb-2">Anfrage gesendet!</h2>
                  <p className="text-sm text-neutral-500 mb-6">
                    Vielen Dank für Ihre Anfrage. Ich melde mich schnellstmöglich bei Ihnen.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline"
                  >
                    Neue Anfrage senden
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-8">
                  <h2 className="text-xl font-bold text-neutral-900 mb-1">Kostenlose erste Einschätzung</h2>
                  <p className="text-sm text-neutral-500 mb-6">
                    Je konkreter Ihre Beschreibung, desto besser kann ich Ihre Anfrage einschätzen.
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Honeypot */}
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', tabIndex: -1 }}>
                      <label htmlFor="website">Website</label>
                      <input
                        id="website"
                        name="website"
                        type="text"
                        autoComplete="off"
                        tabIndex={-1}
                        onChange={e => { honeypotRef.current = e.target.value }}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="kontakt-name" className="input-label">
                          <User className="w-3.5 h-3.5 inline mr-1.5" />
                          Name *
                        </label>
                        <input
                          id="kontakt-name"
                          {...register('name', { required: 'Pflichtfeld' })}
                          className="input-field"
                          placeholder="Max Mustermann"
                          autoComplete="name"
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1" role="alert">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="kontakt-firma" className="input-label">
                          <Building2 className="w-3.5 h-3.5 inline mr-1.5" />
                          Firma (optional)
                        </label>
                        <input id="kontakt-firma" {...register('firma')} className="input-field" placeholder="Muster GmbH" autoComplete="organization" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="kontakt-email" className="input-label">
                          <Mail className="w-3.5 h-3.5 inline mr-1.5" />
                          E-Mail *
                        </label>
                        <input
                          id="kontakt-email"
                          {...register('email', {
                            required: 'Pflichtfeld',
                            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Ungültige E-Mail' }
                          })}
                          type="email"
                          className="input-field"
                          placeholder="max@firma.de"
                          autoComplete="email"
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1" role="alert">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label htmlFor="kontakt-telefon" className="input-label">
                          <Phone className="w-3.5 h-3.5 inline mr-1.5" />
                          Telefon (optional)
                        </label>
                        <input id="kontakt-telefon" {...register('telefon')} type="tel" className="input-field" placeholder="+49 123 456789" autoComplete="tel" />
                      </div>
                    </div>

                    <fieldset>
                      <legend className="input-label">
                        <MessageCircle className="w-3.5 h-3.5 inline mr-1.5" />
                        Was benötigen Sie? * <span className="font-normal text-neutral-400">(Mehrfachauswahl möglich)</span>
                      </legend>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                        {needs.map(n => (
                          <label
                            key={n}
                            className="flex items-center gap-3 px-4 py-3 bg-neutral-50 border border-neutral-100 rounded-xl cursor-pointer hover:border-primary-200 hover:bg-primary-50/50 transition-colors has-[:checked]:border-primary-300 has-[:checked]:bg-primary-50"
                          >
                            <input
                              type="checkbox"
                              value={n}
                              {...register('bedarf', {
                                validate: v => (v && v.length > 0) || 'Bitte wählen Sie mindestens eine Option',
                              })}
                              className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500 shrink-0"
                            />
                            <span className="text-sm text-neutral-700">{n}</span>
                          </label>
                        ))}
                      </div>
                      {errors.bedarf && <p className="text-xs text-red-500 mt-2" role="alert">{errors.bedarf.message}</p>}
                    </fieldset>

                    <div>
                      <label htmlFor="kontakt-nachricht" className="input-label">Was soll gelöst werden? *</label>
                      <textarea
                        id="kontakt-nachricht"
                        {...register('nachricht', { required: 'Pflichtfeld', minLength: { value: 20, message: 'Bitte etwas mehr beschreiben' } })}
                        rows={5}
                        className="input-field resize-none"
                        placeholder="Beschreiben Sie kurz, welches Problem Sie lösen möchten oder was Ihre Anwendung können soll."
                      />
                      {errors.nachricht && <p className="text-xs text-red-500 mt-1" role="alert">{errors.nachricht.message}</p>}
                    </div>

                    <fieldset>
                      <legend className="input-label">Wie dringend ist das Projekt?</legend>
                      <div className="flex flex-col sm:flex-row gap-2 mt-1">
                        {urgencyOptions.map(u => (
                          <label
                            key={u}
                            className="flex items-center gap-2.5 px-4 py-3 bg-neutral-50 border border-neutral-100 rounded-xl cursor-pointer hover:border-primary-200 hover:bg-primary-50/50 transition-colors has-[:checked]:border-primary-300 has-[:checked]:bg-primary-50 sm:flex-1"
                          >
                            <input
                              type="radio"
                              value={u}
                              {...register('dringlichkeit')}
                              className="w-4 h-4 border-neutral-300 text-primary-600 focus:ring-primary-500 shrink-0"
                            />
                            <span className="text-sm text-neutral-700">{u}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    {/* DSGVO */}
                    <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          {...register('dsgvo', { required: 'Zustimmung erforderlich' })}
                          className="w-4 h-4 mt-0.5 rounded border-neutral-300 text-primary-600 focus:ring-primary-500 shrink-0"
                        />
                        <span className="text-xs text-neutral-600 leading-relaxed">
                          Ich stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage gemäß der{' '}
                          <Link to="/datenschutz" className="text-primary-600 hover:underline" target="_blank">
                            Datenschutzerklärung
                          </Link>{' '}
                          zu. Die Daten werden nicht an Dritte weitergegeben. *
                        </span>
                      </label>
                      {errors.dsgvo && <p className="text-xs text-red-500 mt-2">{errors.dsgvo.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center btn-lg disabled:opacity-60"
                    >
                      {isSubmitting ? 'Wird gesendet…' : 'Anfrage senden'}
                      {!isSubmitting && <Send className="w-4 h-4" />}
                    </button>
                  </form>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactCard({ icon, title, content }) {
  return (
    <div className="bg-white rounded-2xl border border-neutral-100 shadow-card p-5 flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-1">{title}</p>
        {content}
      </div>
    </div>
  )
}
