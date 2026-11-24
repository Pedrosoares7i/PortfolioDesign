import { ArrowDownRight } from 'lucide-react';
import { SITE } from '../data/site';

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-label="Apresentação">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="container">
        <div className="hero-layout">
          <div className="reveal">
            <p className="hero-index">01 / PORTFÓLIO</p>
            <h1>Pedro <span>Soares</span></h1>
            <p className="hero-role">{SITE.role}</p>
            <p className="hero-lead">{SITE.tagline}<br />{SITE.intro}</p>
            <div className="hero-actions">
              <a className="btn btn--primary" href="#projetos">Ver projetos <ArrowDownRight size={16} aria-hidden="true" /></a>
              <a className="btn" href="#contato">Contato</a>
            </div>
          </div>
          <aside className="hero-aside reveal" aria-label="Foto e informações rápidas">
            <img
              className="portrait"
              src="/images/profile/perfil.jpg"
              alt="Foto de perfil de Pedro Soares"
              width="827"
              height="1067"
              decoding="async"
              fetchPriority="high"
            />
            <div className="hero-meta">
              <div>
                <span className="meta-label">Foco</span>
                <span className="meta-value">Comunicação visual</span>
              </div>
              <div>
                <span className="meta-label">Formato</span>
                <span className="meta-value">Social, web e vídeo</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
