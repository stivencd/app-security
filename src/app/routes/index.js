const express = require('express')
const router = express.Router()
router.use('/auth', require('./auth.routes'))

router.get('/status', (req, res)=>{
    res.send('OK')
});

router.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Not found' })
})

module.exports = router