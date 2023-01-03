import React, { useState } from 'react'

import Goal from './Goal';
import GoalForm from './GoalForm'

const GoalList = ({ goals, updateGoals, gGoals, date }) => {

  const addGoal = goal => {
    if (!goal.text || /^\s*$/.test(goal.text)) {
      return
    }

    updateGoals([goal, ...gGoals])
  }

  const updateGoal = (goalId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    updateGoals(gGoals.map(goal => (goal.id === goalId ? newValue : goal)))
  }

  const removeGoal = id => {
    const removeArrGlobal = gGoals.filter(goal => goal.id !== id)

    updateGoals(removeArrGlobal)
  }

  const completeGoal = id => {
    let updatedGGoals = gGoals.map(goal => {
      if (goal.id === id) {
        goal.isComplete = !goal.isComplete
      }
      return goal
    })
    
    updateGoals(updatedGGoals)
  }

  return (
    <div>
      <h1>Goals for the Day</h1>
      <GoalForm onSubmit={addGoal} date={date} />
      <Goal
        goals={goals}
        completeGoal={completeGoal}
        removeGoal={removeGoal}
        updateGoal={updateGoal}
        date={date}
      />
    </div>
  )
};

export default GoalList;
