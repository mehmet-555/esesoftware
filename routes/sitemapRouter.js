const path = require("path");
const express = require('express');
const router = express.Router();
const rootDir = require("../utils/rootDir");

router.get('/', (req, res) => {
    const urls = [
        { loc: 'https://esesoftware.com/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: 1.0 },
        { loc: 'https://esesoftware.com/about', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://esesoftware.com/services/web-services/creating-static-web-site', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://esesoftware.com/services/web-services/creating-dynamic-web-app', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://esesoftware.com/services/web-services/web-hosting-services', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://esesoftware.com/services/web-services/ui-ux-development', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://esesoftware.com/services/web-services/restructuring', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://esesoftware.com/services/gcp/redistribution-with-ae', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://esesoftware.com/services/gcp/redistribution-with-cr', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://esesoftware.com/project', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://esesoftware.com/project/web-project', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://esesoftware.com/project/web-project/static-web', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
        { loc: 'https://esesoftware.com/project/web-project/dynamic-web', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: 0.8 },
    
    ];

    // Video URL'lerinin dinamikolarak  yazılımı
    const videos = [
        {
            loc: 'https://esesoftware.com/videos/iStock-1995393129.mp4',
            title: 'Esesoftware',
            description: 'Esesoftware zengin içerik video.',
            thumbnail: 'https://esesoftware.com/videos/thumbnail-iStock-1995393129.jpg',
            uploadDate: '2024-08-06',
            duration: 'PT11S', // 11 saniye
        },
        
    ];

    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n`;

    // Statik URL'ler için XML oluşturma
    urls.forEach(url => {
        sitemap += `  <url>\n`;
        sitemap += `    <loc>${url.loc}</loc>\n`;
        sitemap += `    <lastmod>${url.lastmod}</lastmod>\n`;
        sitemap += `    <changefreq>${url.changefreq}</changefreq>\n`;
        sitemap += `    <priority>${url.priority}</priority>\n`;

        // İlgili URL'ye video ekleme
        videos.forEach(video => {
            if (video.loc.includes(url.loc)) {
                sitemap += `    <video:video>\n`;
                sitemap += `      <video:thumbnail_loc>${video.thumbnail}</video:thumbnail_loc>\n`;
                sitemap += `      <video:title>${video.title}</video:title>\n`;
                sitemap += `      <video:description>${video.description}</video:description>\n`;
                sitemap += `      <video:content_loc>${video.loc}</video:content_loc>\n`;
                sitemap += `      <video:upload_date>${video.uploadDate}</video:upload_date>\n`;
                sitemap += `      <video:duration>${video.duration}</video:duration>\n`;
                sitemap += `    </video:video>\n`;
            }
        });

        sitemap += `  </url>\n`;
    });

    sitemap += `</urlset>`;

    res.type('application/xml');
    res.send(sitemap);
});

module.exports = router;
