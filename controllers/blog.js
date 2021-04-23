exports.getHome = async (req, res) => {
    res.render("index", {
        path: "/",
        pageTitle: "Home",
    });
};
exports.getPage = (req, res) => {
    var url = req.params.url;
    res.render(url, {
        path: url,
        pageTitle: url,
    });
};