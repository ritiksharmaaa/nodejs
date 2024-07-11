const express = require("express")
const { generateShortUrl } = require('../controller/shorturl.controller')

const router = express.Router()

router.route('/:id').get()
router.route('/analytic/:id').get()

router.post('/' , generateShortUrl)

module.exports = router ;