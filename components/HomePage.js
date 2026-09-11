'use client';

import { useState } from 'react';
import { content } from '../lib/content';

const locales = ['en', 'ar', 'tr'];
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '905537400972';
const whatsappHref = `https://wa.me/${whatsappNumber}`;
const instagramHref = 'https://www.instagram.com/dentarova/';

export default function HomePage({ locale }) {
  const lang = locales.includes(locale) ? locale : 'en';
  const t = content[lang];
  const rtl = lang === 'ar';
  const [menu, setMenu] = useState(false);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const switchLocale = (next) => {
    window.location.href = `/${next}`;
  };

  async function submit(e) {
    e.preventDefault();
    setLoading(true); setStatus('');
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    payload.locale = lang;

    try {
      const res = await fetch('/api/leads', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      setStatus(t.success);
      e.currentTarget.reset();
      if (whatsappNumber) {
        const text = encodeURIComponent(`${t.whatsappIntro}\n\n${payload.clinic}\n${payload.location}\n${payload.contact}`);
        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
      }
    } catch {
      setStatus(t.error);
    } finally { setLoading(false); }
  }

  return <main dir={rtl ? 'rtl' : 'ltr'} className="site" id="top">
    <header className="nav"><div className="container navInner">
      <a className="logo" href="#top"><img src="/logo.png" alt="Dentarova" className="logoImg" /></a>
      <button className="menuBtn" onClick={() => setMenu(!menu)} aria-label="Menu">☰</button>
      <nav className={menu ? 'navLinks open' : 'navLinks'}>
        {t.nav.map((n,i)=><a key={n} href={['#process','#services','#why','#faq','#contact'][i]} onClick={()=>setMenu(false)}>{n}</a>)}
      </nav>
      <div className="lang" aria-label="Language selector">
        {locales.map(x => <button key={x} className={lang===x?'active':''} onClick={()=>switchLocale(x)}>{x.toUpperCase()}</button>)}
      </div>
      <a className="navCta" href="#contact">{t.primary} <span>↗</span></a>
    </div></header>

    <section className="hero"><div className="container heroGrid">
      <div className="heroCopy"><div className="eyebrow"><i/> {t.heroEyebrow}</div><h1>{t.heroTitle}</h1><p>{t.heroText}</p>
        <div className="heroBtns"><a className="btn primary" href="#contact">{t.primary} <span>↗</span></a><a className="btn ghost" href="#process">{t.secondary} <span>↓</span></a></div>
        <div className="miniTrust"><div className="avatars"><b>+</b><b>+</b><b>+</b></div><span>{t.trust}</span></div>
      </div>
      <div className="heroVisual"><div className="glow"/><div className="dashboard"><div className="dashTop"><span>GROWTH / 2026</span><span className="live">● LIVE</span></div><div className="chart"><div className="chartLine"/><div className="chartDots"><i/><i/><i/><i/><i/></div></div><div className="dashStats"><div><small>LEADS</small><strong>+284%</strong></div><div><small>BOOKINGS</small><strong>+167%</strong></div></div></div><div className="floatCard one"><span>●</span><div><small>Qualified leads</small><strong>+42 this week</strong></div></div><div className="floatCard two"><span>✓</span><div><small>Appointments</small><strong>18 booked</strong></div></div><span className="dashNote">{t.dashboardNote}</span></div>
    </div></section>

    <section className="statement"><div className="container"><div className="statementGrid"><div className="sectionTag">01 / THE PROBLEM</div><div><h2>{t.problemTitle}</h2><p>{t.problemText}</p></div></div><div className="fourCards">{t.cards.map(c=><div className="feature" key={c[0]}><small>{c[0]}</small><h3>{c[1]}</h3><p>{c[2]}</p><span className="arrow">↗</span></div>)}</div></div></section>

    <section id="services" className="services"><div className="container"><div className="sectionHead"><div className="sectionTag">02 / SERVICES</div><h2>{t.servicesTitle}</h2></div><div className="serviceGrid">{t.services.map((s,i)=><div className="service" key={s}><span>0{i+1}</span><h3>{s}</h3><b>↗</b></div>)}</div></div></section>

    <section id="process" className="process"><div className="container"><div className="sectionHead"><div className="sectionTag">03 / PROCESS</div><h2>{t.processTitle}</h2></div><div className="processGrid">{t.process.map(p=><div className="processCard" key={p[0]}><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p></div>)}</div></div></section>

    <section id="why" className="why"><div className="container whyGrid"><div><div className="sectionTag">04 / WHY US</div><h2>{t.whyTitle}</h2><p>{t.whyText}</p></div><div className="whyList">{t.why.map(w=><div className="whyItem" key={w[0]}><h3>{w[0]}</h3><p>{w[1]}</p></div>)}</div></div></section>

    <section id="results" className="results"><div className="container resultsGrid"><div><div className="sectionTag">05 / MEASUREMENT</div><h2>{t.resultsTitle}</h2><p>{t.resultsText}</p><a className="textLink" href="#contact">{t.primary} ↗</a></div><div className="metricGrid">{t.metrics.map(m=><div className="metric" key={m[0]}><strong>{m[0]}</strong><span>{m[1]}</span></div>)}</div></div></section>

    <section id="faq" className="faq"><div className="container"><div className="sectionHead"><div className="sectionTag">06 / FAQ</div><h2>{t.faqTitle}</h2></div><div className="faqGrid">{t.faq.map(f=><div className="faqItem" key={f[0]}><h3>{f[0]}</h3><p>{f[1]}</p></div>)}</div></div></section>

    <section id="contact" className="contact"><div className="container contactGrid"><div className="contactCopy"><div className="eyebrow"><i/> DENTAROVA</div><h2>{t.ctaTitle}</h2><p>{t.ctaText}</p><div className="contactLine"><span>✦</span> {t.freeNote}</div><div className="directContact"><a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp ↗</a><a href={`mailto:${t.contactEmail}`}>Email ↗</a><a href={instagramHref} target="_blank" rel="noreferrer">Instagram ↗</a></div></div>
      <form className="form" onSubmit={submit}><h3>{t.formTitle}</h3>
        <input name="clinic" placeholder={t.fields[0]} required />
        <input name="location" placeholder={t.fields[1]} required />
        <input name="website" placeholder={t.fields[2]} />
        <input name="contact" placeholder={t.fields[3]} required />
        <input name="budget" placeholder={t.fields[4]} />
        <button className="btn primary" type="submit" disabled={loading}>{loading ? t.sending : t.submit} <span>↗</span></button>
        {status && <p className="formStatus" role="status">{status}</p>}
      </form>
    </div></section>

    <footer><div className="container footerInner"><a className="logo" href="#top"><span>DENTAROVA</span></a><p>{t.footer}</p><span>© 2026</span></div></footer>

    <a className="waFloat" href={whatsappHref} target="_blank" rel="noreferrer" aria-label={t.whatsappFloat}><span>{t.whatsappFloat}</span></a>
  </main>;
}
