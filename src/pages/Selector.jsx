import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import { HandHeart, ClipboardCheck, ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { EVENT, QR_LINKS } from '../data/event.js';

const OPTIONS = [
  {
    key: 'registration',
    label: 'Registration',
    sub: 'For parents / guardians',
    desc: "Register your child (aged 6 – 12) for the Holiday Bible Club.",
    icon: ClipboardCheck,
    url: QR_LINKS.registration,
    accent: 'from-brand-600 to-brand-800',
    ring: 'ring-brand-200',
    chip: 'bg-brand-50 text-brand-700',
  },
  {
    key: 'volunteer',
    label: 'Volunteer',
    sub: 'For parents, youths & teenagers',
    desc: 'Sign up to serve on one of the HBC coordination teams.',
    icon: HandHeart,
    url: QR_LINKS.volunteer,
    accent: 'from-gold-500 to-gold-600',
    ring: 'ring-gold-400/40',
    chip: 'bg-gold-400/15 text-gold-600',
  },
];

export default function Selector() {
  const [selected, setSelected] = useState(null);
  const qrRef = useRef(null);
  const active = OPTIONS.find((o) => o.key === selected) || null;

  const downloadQr = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `HBC-${active.key}-qrcode.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="min-h-full bg-slate-50 text-ink">
      <div className="mx-auto w-full max-w-4xl px-5 py-10 sm:py-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-brand-700"
        >
          <ArrowLeft size={16} /> Back to event
        </Link>

        <div className="mt-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
            {EVENT.parish} · {EVENT.department}
          </p>
          <h1 className="mt-2 font-fun text-4xl font-extrabold tracking-tight sm:text-5xl">
            Select your QR Code
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-500">
            Choose what you'd like to do for the {EVENT.title}, then scan or download the QR code.
          </p>
        </div>

        {/* Option cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {OPTIONS.map((opt) => {
            const Icon = opt.icon;
            const isActive = selected === opt.key;
            return (
              <button
                key={opt.key}
                type="button"
                onClick={() => setSelected(opt.key)}
                aria-pressed={isActive}
                className={`group relative overflow-hidden rounded-3xl border bg-white p-6 text-left shadow-card transition ${
                  isActive
                    ? `border-transparent ring-2 ${opt.ring}`
                    : 'border-slate-200 hover:-translate-y-0.5 hover:shadow-lg'
                }`}
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${opt.accent} text-white shadow`}
                >
                  <Icon size={22} />
                </span>
                <span className={`mt-4 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${opt.chip}`}>
                  {opt.sub}
                </span>
                <h2 className="mt-2 font-display text-xl font-bold tracking-tight">QR Code for {opt.label}</h2>
                <p className="mt-1 text-sm text-slate-500">{opt.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-700">
                  {isActive ? 'Showing QR below' : 'Show QR code'}
                </span>
              </button>
            );
          })}
        </div>

        {/* QR display */}
        {active && (
          <div className="mt-8 flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              {EVENT.title}
            </p>
            <h3 className="mt-1 font-fun text-2xl font-extrabold tracking-tight">QR Code for {active.label}</h3>
            <p className="mt-1 text-sm text-slate-500">Scan with a phone camera to open the form.</p>

            <div ref={qrRef} className="mt-6 rounded-2xl bg-white p-4 ring-1 ring-slate-200">
              <QRCodeCanvas
                value={active.url}
                size={232}
                level="M"
                marginSize={2}
                fgColor="#0B1220"
                bgColor="#FFFFFF"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={downloadQr}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-cta transition hover:bg-brand-700"
              >
                <Download size={16} /> Download PNG
              </button>
              <a
                href={active.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                <ExternalLink size={16} /> Open link
              </a>
            </div>
            <p className="mt-4 max-w-xs break-all text-center text-xs text-slate-400">{active.url}</p>
          </div>
        )}
      </div>
    </div>
  );
}
