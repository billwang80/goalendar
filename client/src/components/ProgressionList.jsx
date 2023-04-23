import React from 'react'

import Progression from './Progression'

const ProgressionList = ({ progressions, updateProgressions }) => {

  console.log("progressions", progressions)
  const completeProgression = progressionId => {
    let newProgression = progressions.filter(progression => progressionId === progression.id)[0]
    newProgression.isComplete = !newProgression.isComplete
    let addProgression = { key: progressionId }
    addProgression[progressionId] = {
      text: newProgression.text,
      date: newProgression.date,
      isComplete: newProgression.isComplete
    }
    updateProgressions(addProgression)
  }

  return (
    <div>
      <h1>Progress</h1>
      <Progression 
        progressions={progressions}
        completeProgression={completeProgression}
      />
    </div>
  )
}

export default ProgressionList