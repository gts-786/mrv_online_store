const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()

router.post('/registrations', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)

module.exports = router