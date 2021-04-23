const express = require("express");
const router = express.Router();
const blog = require("../controllers/blog");

router.get("/", blog.getHome);

router.get("/:url", blog.getPage);

module.exports = router;