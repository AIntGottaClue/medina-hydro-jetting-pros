import { siteConfig as c } from '../data/siteConfig';
export const GET = () => new Response(`User-agent: *\nAllow: /\n\nSitemap: ${c.origin}/sitemap.xml\n`);
