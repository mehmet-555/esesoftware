const path = require("path");
const express = require('express');
const router = express.Router();
const rootDir = require("../utils/rootDir");
router.get('/', (req, res) => {
    res.type('text/plain');
    res.send(`User-agent: *
Disallow: /private/

Sitemap: https://esesoftware.com/sitemap.xml`);
});

module.exports = router;
