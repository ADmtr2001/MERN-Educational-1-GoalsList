const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT ||  5000;

connectDB();

// express
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routers
const goalRouter = require('./routes/goalRoutes');
const userRouter = require('./routes/userRoutes');

app.use('/api/goals', goalRouter);
app.use('/api/users', userRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));