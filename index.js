const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('pages/index')
})
app.get('/sami', (req, res) => {
    res.render('pages/sami')
})

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
  });