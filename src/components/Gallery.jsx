import { ExternalLink } from 'lucide-react';
import { galleryProjects } from '../data/projects';

export default function Gallery() {
  return (
    <section className="section section--light" id="galeria" aria-labelledby="galeria-title">
      <div className="container">
        <div className="reveal">
          <p className="kicker">05 / Galeria complementar</p>
          <h2 className="section-title wide" id="galeria-title">Mais projetos.</h2>
          <p className="section-lead" style={{ marginBottom: '2.5rem' }}>
            Trabalhos adicionais que complementam a seleção principal, mantendo a mesma transparência sobre contexto e tipo de projeto.
          </p>
        </div>
        <div className="gallery-grid">
          {galleryProjects.map((p) => (
            <article className="gallery-item reveal" key={p.id}>
              <div className="gallery-media" style={{ aspectRatio: `${p.dims[0][0]} / ${p.dims[0][1]}` }}>
                <img src={p.cover} alt={`Projeto ${p.title}`} width={p.dims[0][0]} height={p.dims[0][1]} loading="lazy" decoding="async" />
              </div>
              <div className="gallery-body">
                <div className="project-top">
                  <span className="project-index">{p.index}</span>
                  <span className="project-cat">{p.category}</span>
                </div>
                <h3>{p.title}</h3>
                <div className="project-meta">
                  <span className="tag">{p.type}</span>
                  {p.tools.filter((t) => !t.includes('confirmar')).map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <p>{p.context}</p>
                <a className="project-link" href={p.behance} target="_blank" rel="noopener noreferrer">
                  Behance <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
