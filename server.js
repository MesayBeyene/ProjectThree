var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
var translate = require("yandex-translate")(
  "trnsl.1.1.20190829T040235Z.890db9d479f85b75.1b22e9727b69710bd1383f08aefedc29257a1853"
);
app.post("/data", function(req, res) {
  console.log(req.body);
  translate.translate(req.body.id, { to: "am" }, function(err, result) {
    console.log(result.text);
    res.json({ dog: result.text });
  });
});

app.listen(8080, () => {
  console.log("server is running");
});

// translate.detect(
//   "Граждане Российской Федерации имеют право собираться мирно без оружия, проводить собрания, митинги и демонстрации, шествия и пикетирование",
//   function(err, res) {
//     // res.lang -> 'ru'
//   }
// );
