exports.getHome = async (req, res) => {
    console.log("hi")
    res.render("index", {
        path: "/",
        pageTitle: "Blah",
    });
};
exports.getPage = (req, res) => {
    var url = req.params.url;
    res.render(url, {
        path: url,
        pageTitle: url,
    });
};