const getGoals = (req, res) => {
    res.status(200).send({message: "goals"});
}

const postGoal = (req, res) => {
    res.status(201).send({message: "Create Goal"});
}

const updateGoal = (req, res) => {
    res.send({message: "Update Goal", id: req.params.id});
}

const deleteGoal = (req, res) => {
    res.send({message: "Delete Goal", id: req.params.id});
}

module.exports = {getGoals, postGoal, updateGoal, deleteGoal};