const express = require('express');
const app = express();
const port = 4000;
const dbSetup = require('./database/setup');

// REQUIRE ROUTES
const bookRoutes = require('./routes/boookRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

// SETUP DB
dbSetup();

app.use('/auth', authRoutes)
app.use(bookRoutes)

app.listen(port, ()=>console.log(`app listening on port ${port}`));