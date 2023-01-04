import React from 'react'

/*
  Progressions designs:
  Design 1: save progression as goalId. checked, date
  {
    goalId: goalId
    checked: boolean
    date: date obj
  }
  pros: save storage space, no duplicate data, better memory performance
  can filter required goals by progressions 
  
  Design 2: save goalId, value, date, checked
  {
    id: id,
    value: string,
    goal_date: date obj,
    checked: boolean
    date: date obj (date of checked)
  }
  pros: scalable, simpler implementation

  Conclusion:
  - progression should be an object of objects
  {
    key: goal_id, 
    date: {
      value: string,
      date: date obj
    }
  }
*/

const Progression = ({ progressions, completeProgression }) => {
  return (
    progressions.map((progression, index) => (
      <div
        className={progression.isComplete ? 'progression-row progression-complete' : 'progression-row'} 
        key={index}
      >
        <div key={progression.id} onClick={() => completeProgression(progression.id)}>
          {progression.text}
        </div>
      </div>
    ))
  )
}

export default Progression