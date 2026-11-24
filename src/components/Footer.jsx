import { SITE } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {SITE.name}</span>
        <span>Design com intenção / Comunicação visual</span>
      </div>
    </footer>
  );
}
