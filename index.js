const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
console.log(`server listening on port ${port}`);

const bodyParser = require('body-parser');
console.log(`server listening on port ${port}`);
const { acceptsLanguages } = require('express/lib/request');
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'))


app.get('/', function(request, response) {
    response.render('bmi_calculator');
});

app.post('/bmi_calculator', urlEncodedParser, function(request, response) {
    height = parseFloat(request.body.height);
    weight = parseFloat(request.body.weight);
    rname = request.body.rname;

    bmi = weight / (height * height);
    console.log("bmi " + bmi)
    console.log("name " + rname)

    // CONDITION FOR BMI
    if (bmi < 19) {
        response.send("<h3>Hi ! " + rname + "," +
            " Your BMI is: " + bmi +
            "<centre><h1>You are Underweight!");
    } else if (19 <= bmi && bmi < 25) {
        response.send("<h3>Hi! " + rname + "," +
            " your BMI is around: " + bmi +
            "<centre><h1>You are Normalweight!");
    } else if (25 <= bmi && bmi < 30) {
        response.send("<h3>Hi! " + rname + "," +
            " your BMI is around: " + bmi +
            "<centre><h1>You are Overweight!");
    } else {
        response.send("<h3>Hi! " + rname + "," +
            " your BMI is: " + bmi +
            "<centre><h1>You are Obese!");
    }
});


app.listen(port);
console.log('server is listening on port ' + port)