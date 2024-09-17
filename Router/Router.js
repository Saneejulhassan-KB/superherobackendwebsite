const express = require('express')
const router = new express.Router()
const grievanceController = require('../Controller/grievanceController')




router.post('/grievance-submit', grievanceController.submit)

router.get('/grievance-submit' , grievanceController.getGrievance)

router.delete('/grievance-submit/:id', grievanceController.deleteGrievance)

module.exports = router