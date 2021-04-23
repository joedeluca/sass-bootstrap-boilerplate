const express = require('express')
const app = express()
const path = require("path")
const port = 8080

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));

const blogRoutes = require("./routes/blog");
app.use(blogRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})