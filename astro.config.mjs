import { defineConfig } from 'astro/config';
export default defineConfig({ output: 'static', base: '/medina-hydro-jetting-pros/', redirects: {
    '/service-areas/brunswick': '/medina-hydro-jetting-pros/service-areas/',
    '/service-areas/wadsworth': '/medina-hydro-jetting-pros/service-areas/',
    '/service-areas/montville-township': '/medina-hydro-jetting-pros/service-areas/',
    '/service-areas/granger-township': '/medina-hydro-jetting-pros/service-areas/',
    '/service-areas/litchfield': '/medina-hydro-jetting-pros/service-areas/',
    '/service-areas/chippewa-lake': '/medina-hydro-jetting-pros/service-areas/',
    '/service-areas/seville': '/medina-hydro-jetting-pros/service-areas/',
    '/service-areas/valley-city': '/medina-hydro-jetting-pros/service-areas/'
  }, trailingSlash: 'always' });
