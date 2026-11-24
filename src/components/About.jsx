import { SITE } from '../data/site';

export default function About() {
  return (
    <section className="section" id="sobre" aria-labelledby="sobre-title">
      <div className="container about-grid">
        <div className="reveal">
          <p className="kicker">02 / Sobre</p>
          <h2 className="section-title" id="sobre-title">Contexto e direção.</h2>
          <div className="about-text">
            {SITE.about.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
        <aside className="about-panel reveal" aria-label="Áreas de interesse">
          <h3>Áreas de interesse</h3>
          <ul className="about-list">
            <li>Design gráfico</li>
            <li>Comunicação visual</li>
            <li>Social media</li>
            <li>Web design</li>
            <li>Edição de vídeo</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
