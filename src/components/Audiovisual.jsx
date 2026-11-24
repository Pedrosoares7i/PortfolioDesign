import { useState } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { FINCE_CHANNEL, videos } from '../data/videos';

function VideoEmbed({ video, featured = false }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
  const embed = `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <article className={`av-video ${featured ? 'av-video--featured' : ''}`}>
      <div className="av-frame">
        {playing ? (
          <iframe
            src={embed}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="av-poster"
            onClick={() => setPlaying(true)}
            aria-label={`Reproduzir ${video.title}`}
          >
            <img src={thumb} alt="" width="480" height="360" loading="lazy" decoding="async" />
            <span className="av-poster-overlay" aria-hidden="true" />
            <span className="av-play" aria-hidden="true">
              <Play size={featured ? 28 : 22} fill="currentColor" strokeWidth={1.5} />
            </span>
          </button>
        )}
      </div>
      <div className="av-video-meta">
        <p className="av-video-title">
          <span className="av-video-index">{featured ? '01' : video.title === 'Vídeo 02' ? '02' : '03'}</span>
          {video.title}
        </p>
        <p className="av-video-role">{video.role}</p>
      </div>
    </article>
  );
}

export default function Audiovisual() {
  const [featured, ...rest] = videos;

  return (
    <section className="section" id="audiovisual" aria-labelledby="av-title">
      <div className="container">
        <div className="av-head reveal">
          <div>
            <p className="kicker">06 / Audiovisual</p>
            <h2 className="section-title" id="av-title">Edição e vídeo.</h2>
          </div>
          <p className="section-lead">
            Trabalhos em audiovisual no canal Fince Conecta. Abaixo, vídeos com participação de Pedro na edição.
          </p>
        </div>

        <div className="av-layout reveal">
          {featured && <VideoEmbed video={featured} featured />}
          {rest.length > 0 && (
            <div className="av-side">
              {rest.map((video) => (
                <VideoEmbed key={video.id} video={video} />
              ))}
            </div>
          )}
        </div>

        <div className="av-channel reveal">
          <a className="project-link" href={FINCE_CHANNEL} target="_blank" rel="noopener noreferrer">
            Ver mais vídeos no canal <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
