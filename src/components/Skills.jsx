const groups = [
  {
    title: 'Ferramentas',
    items: ['Canva', 'Figma', 'Photopea', 'Ferramentas de edição de vídeo'],
  },
  {
    title: 'Competências',
    items: ['Hierarquia visual', 'Composição', 'Comunicação visual', 'Social media', 'Web design', 'Edição de vídeo', 'Atenção à legibilidade', 'Organização visual'],
  },
];

export default function Skills() {
  return (
    <section className="section" id="habilidades" aria-labelledby="habilidades-title">
      <div className="container">
        <div className="reveal">
          <p className="kicker">08 / Ferramentas e habilidades</p>
          <h2 className="section-title wide" id="habilidades-title">Base técnica e visual.</h2>
        </div>
        <div className="skills-grid">
          {groups.map((g) => (
            <div className="skill-group reveal" key={g.title}>
              <h3>{g.title}</h3>
              <div className="skill-tags">
                {g.items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
