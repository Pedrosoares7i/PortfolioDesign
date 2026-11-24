import { ArrowUpRight } from 'lucide-react';
import { SITE } from '../data/site';

export default function Contact() {
  const links = [
    { label: 'Behance', href: SITE.contacts.behance, handle: 'Portfólio completo' },
    { label: 'YouTube', href: SITE.contacts.youtube, handle: '@FinceConecta' },
    { label: 'LinkedIn', href: SITE.contacts.linkedin, handle: 'Perfil profissional' },
  ].filter((l) => l.href && l.href !== '[PREENCHER]');

  return (
    <section className="section section--light" id="contato" aria-labelledby="contato-title">
      <div className="container contact-grid">
        <div className="reveal">
          <p className="kicker">09 / Contato</p>
          <h2 className="section-title" id="contato-title">Vamos conversar.</h2>
          <p className="section-lead">
            Para oportunidades, projetos ou conversas sobre design, os canais abaixo estão abertos.
          </p>
        </div>
        <div className="contact-links reveal" aria-label="Links de contato">
          {links.map((l) => (
            <a key={l.label} className="contact-link" href={l.href} target="_blank" rel="noopener noreferrer">
              <div>
                {l.label}
                <div><span>{l.handle}</span></div>
              </div>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
