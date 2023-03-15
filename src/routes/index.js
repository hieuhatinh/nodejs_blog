function route(app) {
  app.get("/news", (req, res) => {
    // console.log(req.query.q);
    res.render("news");
  });

  app.get("/search", (req, res) => {
    // console.log(req.query);
    res.render("search");
  });

  app.post("/search", (req, res) => {
    console.log(req.body);

    res.send("");
  });
}

module.exports = route;
