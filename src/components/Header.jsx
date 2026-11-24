import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV, SITE } from '../data/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('#inicio');

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href).filter((h) => h.startsWith('#'));
    const sections = ids.map((id) => document.querySelector(id)).filter(Boolean);
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: [0.1, 0.3] },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <div className="nav-wrap">
        <a className="brand" href="#inicio" onClick={close} aria-label="Ir para o início">
          <span className="brand-dot" aria-hidden="true" />
          {SITE.name}
        </a>
        <nav aria-label="Principal" className="nav-links">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={active === item.href ? 'active' : ''}>
              {item.label}
            </a>
          ))}
        </nav>
        <button className="menu-btn" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen((v) => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <nav id="mobile-nav" className={`mobile-nav ${open ? 'open' : ''}`} aria-label="Menu mobile">
        {NAV.map((item) => (
          <a key={item.href} href={item.href} className={active === item.href ? 'active' : ''} onClick={close}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
