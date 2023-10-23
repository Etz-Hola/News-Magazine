const express = require('express')
const app = express() 
const bodyParser =  require('body-parser')

const PORT = process.env.PORT || 5000

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/css'))

app.use(bodyParser.urlencoded({extended: true}))

//Templating engines
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Routers
const newsRouter = require('./src/routes/news')
app.use('/', newsRouter)
app.use('/article', newsRouter)



app.listen(PORT, () => console.log(`WOW ✔^_____^ App running on PORT ${PORT} 🤳👌`))