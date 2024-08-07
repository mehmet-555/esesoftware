const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("../utils/rootDir");

router.get("/", (req, res, next)=> {
    res.sendFile(path.join(__dirname, "../public/pages/index.html"));
});
router.post("/contact", (req, res, next) => {
    
});


module.exports = router;