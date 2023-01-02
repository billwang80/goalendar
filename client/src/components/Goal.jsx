import React, { useState } from 'react'

import GoalForm from './GoalForm'

import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function Goal({ goals, completeGoal, removeGoal, updateGoal, date }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    date: ''
  })

  const submitUpdate = value => {
    updateGoal(edit.id, value, date)
    setEdit({
      id: null,
      value: '',
      date: null
    })
  }

  if (edit.id) {
    return <GoalForm edit={edit} onSubmit={submitUpdate} date={date} />
  }

  return (
    goals.map((goal, index) => (
      <div 
        className={goal.isComplete ? 'goal-row complete' : 'goal-row'} 
        key={index}
      >
        <div key={goal.id} onClick={() => completeGoal(goal.id)}>
          {goal.text}
        </div>
        <div className="icons">
          <EditIcon 
            onClick={() => setEdit({ id: goal.id, value: goal.text, date: goal.date })}
            className='edit-icon'
          />
          <HighlightOffIcon 
            onClick={() => removeGoal(goal.id)}
            className='delete-icon'
          />
        </div>
      </div>
    ))
  )
}

export default Goal