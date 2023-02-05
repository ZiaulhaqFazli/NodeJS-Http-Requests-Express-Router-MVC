const { render } = require('ejs');
const express = require('express');
const app = express();
const port = 3000;


const blogRoutes = require('./routes/blogRoutes');

//Set the view engine
app.set('view engine', 'ejs');
//Set your views directory in the sencond argument.
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

//Mongoose module
const mongoose = require('mongoose');

//Connection String of Mongo Atlas
const dbURI = "mongodb+srv://ziaulhaq:Galaxy58P@mongocluster.wcymfq3.mongodb.net/node-db?retryWrites=true&w=majority";
//Mongoose connect function
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000, console.log("Server is Started!")))
    .catch((error) => console.log("Error")) ;

mongoose.set('strictQuery', true);

//
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title:" About"});
});

app.use('/blogs', blogRoutes);


app.use((req, res) => {
    res.render('404', { title: "404 Page" });
});