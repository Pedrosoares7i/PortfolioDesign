import { ArrowUpRight } from 'lucide-react';
import { featuredProjects } from '../data/projects';

export default function Projects() {
  return (
    <section className="section section--light" id="projetos" aria-labelledby="projetos-title">
      <div className="container">
        <div className="reveal">
          <p className="kicker">03 / Projetos selecionados</p>
          <h2 className="section-title wide" id="projetos-title">Trabalhos em destaque.</h2>
          <p className="section-lead" style={{ marginBottom: '2.5rem' }}>
            Seleção de projetos autorais e exercícios de redesign, com foco no raciocínio de comunicação, hierarquia e organização visual.
          </p>
        </div>
        <div className="project-list">
          {featuredProjects.map((p) => (
            <article className="project-card reveal" key={p.id}>
              <div className="project-media" style={{ aspectRatio: `${p.dims[0][0]} / ${p.dims[0][1]}` }}>
                <img src={p.cover} alt={`Capa do projeto ${p.title}`} width={p.dims[0][0]} height={p.dims[0][1]} loading="lazy" decoding="async" />
              </div>
              <div className="project-body">
                <div className="project-top">
                  <span className="project-index">{p.index}</span>
                  <span className="project-cat">{p.category}</span>
                </div>
                <h3>{p.title}</h3>
                <div className="project-meta">
                  <span className="tag">{p.type}</span>
                  {p.tools.filter((t) => !t.includes('confirmar')).map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
                <p className="project-desc">{p.context}</p>
                <a className="project-link" href={`#case-${p.id}`}>
                  Ver estudo de caso <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
