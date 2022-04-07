const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT ||  5000;

// express
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routers
const goalRouter = require('./routes/goalRoutes');

app.use('/api/goals', goalRouter);


app.listen(port, () => console.log(`Server started on port ${port}`));