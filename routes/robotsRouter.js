const path = require("path");
const express = require('express');
const router = express.Router();
const rootDir = require("../utils/rootDir");
router.get('/robots.txt', (req, res) => {
    res.type('text/plain');
    res.send(`User-agent: *
Disallow: /private/

Sitemap: https://www.esesoftware.com/sitemap.xml`);
});

module.exports = router;
