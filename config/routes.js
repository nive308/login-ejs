const express = require('express')
const router = express.Router()

// const  {authenticateUser}  = require('../app/middlewares/authentication')
const userController = require('../app/controllers/userController')

router.get('/users/register', userController.list)
router.post('/users/login', userController.create)
router.get('/users/:id',userController.show)
router.put('/users/:id',userController.update)
router.delete('/users/:id',userController.destroy)

module.exports = router