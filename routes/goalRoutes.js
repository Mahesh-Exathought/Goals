const express = require('express')
const router = express.Router()
const { getGoals , setGoals, updateGoals, deleteGoals, getGoalById, getGoalsByAsc} = require('../controllers/goalController')

// get goals in ascending order of text
router.get('/asc', getGoalsByAsc)

router.get('/', getGoals)

//get goals by id
router.get('/:id', getGoalById)

router.post('/', setGoals)
router.put('/:id',updateGoals )
router.delete('/:id', deleteGoals)

module.exports = router