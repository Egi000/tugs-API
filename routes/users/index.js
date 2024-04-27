// router/users.js
const express = require('express');
const { createUsers } = require('../../resolvers/users');

const router = express.Router();

router.post('/', (req,res) => {
    console.log(req.body)
});

// Tambahkan rute GET ke '/users'
router.get('/', (req, res) => {
    // Lakukan logika untuk menampilkan data pengguna
    return res.send('users data');
});

module.exports = router;

