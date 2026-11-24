import { ExternalLink } from 'lucide-react';
import { featuredProjects } from '../data/projects';

export default function CaseStudies() {
  return (
    <section className="section" id="estudos" aria-labelledby="estudos-title">
      <div className="container">
        <div className="reveal">
          <p className="kicker">04 / Estudos de caso</p>
          <h2 className="section-title wide" id="estudos-title">Processo por trás das peças.</h2>
          <p className="section-lead" style={{ marginBottom: '3rem' }}>
            Cada estudo de caso resume contexto, objetivo, decisões de design, ferramentas e aprendizado, com base nas informações confirmadas.
          </p>
        </div>

        {featuredProjects.map((p) => (
          <article className="case reveal" id={`case-${p.id}`} key={p.id} aria-labelledby={`case-title-${p.id}`}>
            <div className="case-head">
              <div>
                <p className="project-index" style={{ marginBottom: '.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '.78rem' }}>{p.index} / {p.type}</p>
                <h3 className="case-title" id={`case-title-${p.id}`}>{p.title}</h3>
              </div>
              <div className="case-details">
                <div className="detail-block">
                  <h3>Contexto</h3>
                  <p>{p.context}</p>
                </div>
                <div className="detail-block">
                  <h3>Objetivo</h3>
                  <p>{p.objective}</p>
                </div>
                <div className="detail-block">
                  <h3>Decisões de design</h3>
                  <ul>{p.decisions.map((d) => <li key={d}>{d}</li>)}</ul>
                </div>
                <div className="detail-block">
                  <h3>Ferramentas e aprendizado</h3>
                  <p><strong style={{ color: 'var(--text)' }}>Ferramentas:</strong> {p.tools.filter((t) => !t.includes('confirmar')).join(', ') || '[confirmar com Pedro]'}</p>
                  <p style={{ marginTop: '.75rem' }}><strong style={{ color: 'var(--text)' }}>Aprendizado:</strong> {p.learning}</p>
                </div>
              </div>
            </div>

            <div className={`case-images ${p.images.length > 1 ? 'multi' : ''}`}>
              {p.images.map((src, i) => (
                <figure className="case-figure" key={src}>
                  <img
                    src={src}
                    alt={`${p.title} — peça ${i + 1}`}
                    width={p.dims[i][0]}
                    height={p.dims[i][1]}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>{p.title} / {String(i + 1).padStart(2, '0')}</figcaption>
                </figure>
              ))}
            </div>

            <div className="case-links">
              <a className="btn" href={p.behance} target="_blank" rel="noopener noreferrer">
                Ver no Behance <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
