import { Link } from 'react-router-dom';
import {
  Sparkles,
  Clock,
  Users,
  CalendarDays,
  Target,
  Trophy,
  ArrowRight,
  QrCode,
  Camera,
} from 'lucide-react';
import { EVENT } from '../data/event.js';

// All images from src/assets — bundled & fingerprinted by Vite
import heroKids from '../assets/aleksandar-andreev-g85rbcz8PPs-unsplash.jpg';
import bowling from '../assets/full-shot-happy-kids-playing-bowling.jpg';
import artsCrafts from '../assets/arts and crafts.avif';
import worship from '../assets/worship.jpg';

const GALLERY = [
  { src: bowling, alt: 'Happy kids playing a bowling game', label: 'Games & Sports' },
  { src: artsCrafts, alt: 'Children making arts and crafts', label: 'Arts & Crafts' },
  { src: worship, alt: 'Children praying together during worship', label: 'Worship & Word' },
];

function Section({ id, icon: Icon, title, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-5 py-8 sm:py-10">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-2xl bg-brand-50 text-brand-600">
          <Icon size={18} />
        </span>
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function Landing() {
  return (
    <div className="min-h-full bg-white text-ink">
      {/* Hero with photo background */}
      <header className="relative overflow-hidden text-white">
        <img
          src={heroKids}
          alt="Children running and playing together outdoors at the Holiday Bible Club"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-800/90 via-brand-700/80 to-brand-600/70" />
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-400/30 blur-3xl" />

        <div className="relative mx-auto w-full max-w-5xl px-5 py-16 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider ring-1 ring-white/25">
            <Sparkles size={14} /> {EVENT.parish}
          </span>
          <p className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            {EVENT.department}
          </p>
          <h1 className="mt-2 font-fun text-5xl font-extrabold leading-[1.05] tracking-tight drop-shadow-sm sm:text-7xl">
            {EVENT.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base font-medium text-white/90 sm:text-lg">{EVENT.tagline}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/select"
              className="inline-flex items-center gap-2 rounded-2xl bg-gold-500 px-5 py-3 text-sm font-extrabold text-ink shadow-cta transition hover:scale-[1.02] hover:bg-gold-400"
            >
              <QrCode size={18} /> Get QR Code
              <ArrowRight size={16} />
            </Link>
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-extrabold text-white ring-1 ring-white/30 transition hover:bg-white/20"
            >
              View Programme
            </a>
          </div>

          {/* Quick facts */}
          <dl className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {EVENT.overview.map((o) => (
              <div key={o.label} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur">
                <dt className="text-xs font-bold uppercase tracking-wider text-white/70">{o.label}</dt>
                <dd className="mt-1 font-display text-base font-semibold">{o.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* Introduction */}
      <Section id="intro" icon={Sparkles} title="Introduction">
        <p className="text-[15px] leading-relaxed text-slate-600">{EVENT.intro}</p>
      </Section>

      {/* Photo gallery — uses the rest of the asset images */}
      <Section id="gallery" icon={Camera} title="Fun & Faith in Action">
        <p className="mb-5 text-[15px] leading-relaxed text-slate-600">
          Four joyful days of worship, learning, games, and creativity for every child.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {GALLERY.map((g) => (
            <figure
              key={g.label}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-card ring-1 ring-slate-200"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <figcaption className="absolute bottom-3 left-3 right-3 font-display text-sm font-semibold text-white drop-shadow">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Core objective */}
      <Section id="objective" icon={Target} title="Core Objective">
        <div className="rounded-3xl border border-brand-100 bg-brand-50/60 p-5">
          <p className="text-[15px] leading-relaxed text-slate-700">{EVENT.objective}</p>
        </div>
      </Section>

      {/* Schedule */}
      <Section id="schedule" icon={CalendarDays} title="Daily Programme Schedule">
        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-card">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-4 py-3 font-bold">Time</th>
                <th className="px-4 py-3 font-bold">Activity</th>
                <th className="hidden px-4 py-3 font-bold sm:table-cell">Description</th>
              </tr>
            </thead>
            <tbody>
              {EVENT.schedule.map((row, i) => (
                <tr key={row.time} className={i % 2 ? 'bg-white' : 'bg-slate-50/40'}>
                  <td className="whitespace-nowrap px-4 py-3 align-top font-bold text-brand-700">
                    {row.time}
                  </td>
                  <td className="px-4 py-3 align-top font-semibold text-ink">
                    {row.activity}
                    <p className="mt-1 text-xs font-normal text-slate-500 sm:hidden">{row.desc}</p>
                  </td>
                  <td className="hidden px-4 py-3 align-top text-slate-600 sm:table-cell">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Scoring */}
      <Section id="scoring" icon={Trophy} title="Team Dynamics & Scoring">
        <p className="mb-4 text-[15px] leading-relaxed text-slate-600">
          A two-team system runs throughout the club. Each child is assigned to a team on arrival,
          encouraging teamwork, accountability, and healthy competition. Points are awarded on:
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {EVENT.scoring.map((s) => (
            <div key={s.name} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-card">
              <h3 className="font-display text-lg font-semibold text-ink">{s.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Teams */}
      <Section id="teams" icon={Users} title="Coordination & Execution Teams">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {EVENT.teams.map((t, i) => (
            <div key={t} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 font-display text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm font-semibold text-ink">{t}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-5xl px-5 pb-16 pt-4">
        <div className="flex flex-col items-center gap-4 rounded-[2rem] bg-gradient-to-br from-brand-700 to-brand-600 px-6 py-10 text-center text-white shadow-cta">
          <Clock size={28} className="text-gold-400" />
          <h2 className="font-fun text-3xl font-extrabold tracking-tight sm:text-4xl">Ready to be part of HBC?</h2>
          <p className="max-w-md text-sm font-medium text-white/85">
            Scan to register your child or to sign up as a volunteer. Choose your QR code on the next screen.
          </p>
          <Link
            to="/select"
            className="inline-flex items-center gap-2 rounded-2xl bg-gold-500 px-6 py-3 text-sm font-extrabold text-ink transition hover:scale-[1.02] hover:bg-gold-400"
          >
            <QrCode size={18} /> Choose your QR Code <ArrowRight size={16} />
          </Link>
        </div>
        <p className="mt-6 text-center text-xs font-semibold text-slate-400">
          {EVENT.parish} · {EVENT.department}
        </p>
      </section>
    </div>
  );
}
