const router = require('express').Router()

router.use('/api', require('./movieRoutes.js'))
router.use('/api', require('./songRoutes.js'))
router.use(require('./viewRoutes.js'))

module.exports = router
