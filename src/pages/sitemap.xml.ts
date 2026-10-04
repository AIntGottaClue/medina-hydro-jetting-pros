import { siteConfig as c } from '../data/siteConfig';
import { areas, services } from '../data/content';
const paths = ['', 'hydro-jetting/', 'services/', ...services.slice(1).map((s) => s.path), 'process/', 'service-areas/', ...areas.map((a) => `service-areas/${a.slug}/`), 'faq/', 'contact/'];
export const GET = () => new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${c.origin}/${p}</loc></url>`).join('\n')}\n</urlset>\n`, { headers: { 'Content-Type': 'application/xml' } });
