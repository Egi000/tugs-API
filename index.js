// app.js (file utama)
const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

const userRouter = require('./src/routes/users');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/user', userRouter);

// Menambahkan rute GET untuk halaman beranda
app.get('/', (req, res) => {
    return res.send('hello');
});

app.listen(process.env.PORT, () => {
    console.log(`server berjalan di http://localhost:${process.env.PORT}`);
});

module.exports = app;
