const steps = [
  { n: '01', title: 'Pesquisa', desc: 'Entender contexto, objetivo, público e referências antes de iniciar a composição.' },
  { n: '02', title: 'Conceito', desc: 'Definir a direção visual e a mensagem principal que a peça precisa comunicar.' },
  { n: '03', title: 'Desenvolvimento', desc: 'Construir a composição com atenção à hierarquia, contraste e legibilidade.' },
  { n: '04', title: 'Refinamento', desc: 'Ajustar detalhes visuais, consistência e clareza da comunicação.' },
  { n: '05', title: 'Entrega', desc: 'Preparar o material final para o formato e contexto de uso pretendido.' },
];

export default function Process() {
  return (
    <section className="section section--light" id="processo" aria-labelledby="processo-title">
      <div className="container">
        <div className="reveal">
          <p className="kicker">07 / Processo criativo</p>
          <h2 className="section-title wide" id="processo-title">Método de trabalho.</h2>
          <p className="section-lead" style={{ marginBottom: '2.5rem' }}>
            Um processo simples e objetivo, orientado por comunicação visual e decisões conscientes.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((s) => (
            <article className="process-step reveal" key={s.n}>
              <span className="process-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
