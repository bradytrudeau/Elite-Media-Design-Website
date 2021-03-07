const { default: Axios } = require('axios');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.get('/categories', (req, res) => {
  
  Axios({
    method: 'GET',
    url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
  
  }).then(response => {
      console.log('got back data', response.data);
      res.send(response.data);
    }).catch(err => {
      console.error(err);
  
      res.sendStatus(500);
    });
  });

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("build"));

  // Express will serve up the front-end index.html file if it doesn't recognize the route
  app.get("*", (req, res) =>
    res.sendFile(path.resolve("build", "index.html"))
  );
}

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});