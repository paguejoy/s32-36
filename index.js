
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4000;


const courseRoutes = require("./routes/courseRoutes");

mongoose.connect('mongodb+srv://admin:admin@cluster0.0ej3f.mongodb.net/course-booking?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log(`Connected to Database`));


/*Middlewares*/
app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.use("/api/courses", courseRoutes);




app.listen(PORT, () => console.log(`Server running at port ${PORT}`))

