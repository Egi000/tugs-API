const knex = require('../../databases');
const {check, validationResult } = require('express-validator')

module.exports = {
    createUsers: async (req,res) => {
        const {username,nrp} = req.body
        await check('username').isString().notEmpty().run(req)
        await check('nrp').isString().notEmpty().isLength({min:10,max:10}).run(req)
        const result = validationResult(req)
        if(!result.isEmpty()) return res.status(400).json({error: result.array()})
        const users = await knex('users').insert({
            nrp,username 
        })
        if (username.length == 0) return res.status(400).json({message: 'gagal menambahkan data users'})
        return res.status(200).json({message: 'berhasil menambahkan data users'})
    }
}