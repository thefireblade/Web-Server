const express = require("express")
let router = express.Router();


router.get("/", (req, res) => {
    res.render("pages/home");
});

module.exports = router;