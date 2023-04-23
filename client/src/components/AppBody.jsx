import React, { useState } from 'react'

import { format, isSameDay, differenceInDays } from 'date-fns';

import Calendar from './Calendar'
import GoalList from './GoalList'
import ProgressionList from './ProgressionList';

const AppBody = () => {
  const [date, setDate] = useState(new Date())
  const [gGoals, setGGoals] = useState([]) // global goals
  /*
    progressions only save the ones that are completed
    progressions are an object of objects with key = goalId
  */
  // const [progressions, setProgressions] = useState([]) 
  const [progressions, setProgressions] = useState({})

  const updateDate = (newDate) => {
    setDate(newDate)
  }

  const updateGoals = (newGoals) => {
    setGGoals(newGoals)
  }

  const isSameOrBefore = (date1, date2) => {
    return differenceInDays(date1, date2) <= 0;
  }

  console.log()
  console.log("test", progressions)
  console.log(Object.keys(progressions).length)

  const updateProgressions = (newProgression) => {
    let newProgressions = {}
    if (newProgression[newProgression.key].isComplete) {
      newProgressions = { ...progressions, ...newProgression }
    } else {
      newProgressions = { ...progressions }
      delete newProgressions[newProgression.key]
    }
    delete newProgressions.key
    setProgressions(newProgressions)
    console.log("main progress", progressions)
  }

  const progressionProp = gGoals.filter(goal => (isSameOrBefore(date, goal.date))).map(
    goal => (goal.id + '/' + format(date, 'yyyy/dd/MM') in progressions ? 
      {
        id: goal.id + '/' + format(date, 'yyyy/dd/MM'),
        // id: goal.id,
        text: goal.text,
        date: date,
        isComplete: true
      } 
      : 
      {
        id: goal.id + '/' + format(date, 'yyyy/dd/MM'),
        // id: goal.id,
        text: goal.text,
        date: date,
        isComplete: false
      }
    )
  )

  return (
    <div>
      <Calendar 
        setDate={updateDate} 
      />
      <GoalList 
        goals={gGoals.filter(goal => (isSameDay(goal.date, date)))}
        updateGoals={updateGoals}
        gGoals={gGoals}
        date={date} 
      />
      <ProgressionList 
        progressions={progressionProp}
        updateProgressions={updateProgressions}
      />
    </div>
  )
};

export default AppBody;
