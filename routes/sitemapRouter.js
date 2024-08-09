const path = require("path");
const express = require('express');
const router = express.Router();
const rootDir = require("../utils/rootDir");
router.get('/', (req, res) => {
    const urls = [
        { loc: 'https://www.esesoftware.com/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: 1.0 },
        { loc: 'https://www.esesoftware.com/about', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://www.esesoftware.com/services/web-services/creating-static-web-site', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://www.esesoftware.com/services/web-services/creating-dynamic-web-app', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://www.esesoftware.com/services/web-services/web-hosting-services', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://www.esesoftware.com/services/web-services/ui-ux-development', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://www.esesoftware.com/services/web-services/restructuring', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://www.esesoftware.com/services/gcp/redistribution-with-ae', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://www.esesoftware.com/services/gcp/redistribution-with-cr', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://www.esesoftware.com/project', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://www.esesoftware.com/project/web-project', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://www.esesoftware.com/project/web-project/static-web', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://www.esesoftware.com/project/web-project/dynamic-web', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        // Diğer URL'leri buraya ekleyin
        ];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    urls.forEach(url => {
        sitemap += `  <url>\n`;
        sitemap += `    <loc>${url.loc}</loc>\n`;
        sitemap += `    <lastmod>${url.lastmod}</lastmod>\n`;
        sitemap += `    <changefreq>${url.changefreq}</changefreq>\n`;
        sitemap += `    <priority>${url.priority}</priority>\n`;
        sitemap += `  </url>\n`;
    });
    sitemap += `</urlset>`;

    res.type('application/xml');
    res.send(sitemap);
});

module.exports = router;
