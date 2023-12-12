const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalModel')

const getGoals = asyncHandler(async(req,res) =>{
    const goals = await Goal.find()
    res.json(goals)
})

const getGoalById = asyncHandler(async(req, res) => {
    const goalId = req.params.id;
    const goal = await Goal.findById(goalId);
    if(!goal){
        res.json({ message: 'Goal not found' });
            return;
    }
    res.json(goal);
});

const getGoalsByAsc = asyncHandler(async (req, res) => {
    let data = await Goal.find({}).sort({text:1})
    res.send({data:data})

});

const setGoals = asyncHandler(async(req,res) => {
    const goal = await Goal.create({
    text: req.body.text
    })
    res.json(goal)
})

const updateGoals = asyncHandler(async(req,res) => {
    const goal = await Goal.findById(req.params.id,)
    if(!goal){
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{
        new : true
    })
    res.json(updatedGoal)
})

const deleteGoals = asyncHandler(async(req,res) => {
    const goal = await Goal.findById(req.params.id,)
    if(!goal){
        throw new Error('Goal not found')
    }
    await goal.deleteOne()
    res.json({message : `Delete goal ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
    getGoalById,
    getGoalsByAsc
}