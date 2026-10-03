import { siteConfig as c } from '../data/siteConfig';
import { areas, services } from '../data/content';
export const GET = () => new Response(`# ${c.brand}\n\n> High-pressure hydro jetting, residential drain cleaning, commercial grease line jetting, and sewer camera inspection in Medina, Ohio.\n\n## Services\n${services.map((s) => `- ${s.name}: ${c.origin}/${s.path}`).join('\n')}\n\n## Service areas\n${areas.map((a) => `- ${a.name}, Ohio: ${c.origin}/service-areas/${a.slug}/`).join('\n')}\n\n## Contact\n- Phone: ${c.phoneDisplay}\n- ${c.origin}/contact/\n`);
