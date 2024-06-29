const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("../utils/rootDir");

router.get("/", (req, res, next)=> {
    res.sendFile(path.join(__dirname, "../public/pages/index.html"));
});

module.exports = router;