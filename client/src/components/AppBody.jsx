import React, { useState, useEffect } from 'react'

import { isSameDay, differenceInDays } from 'date-fns';

import Calendar from './Calendar'
import GoalList from './GoalList'
import ProgressionList from './ProgressionList';

const AppBody = () => {
  const [date, setDate] = useState(new Date())
  const [gGoals, setGGoals] = useState([]) // global goals
  const [dateGoals, setDateGoals] = useState([]) // pass filtered goals to child
  const [progressions, setProgressions] = useState([]) // pass filtered progressions to child

  const updateDate = (newDate) => {
    setDate(newDate)
    setDateGoals(gGoals.filter(goal => (isSameDay(goal.date, newDate))))
  }

  const updateGoals = (newGoals) => {
    setGGoals(newGoals)
    setDateGoals(newGoals.filter(goal => (isSameDay(goal.date, date))))
  }

  const isSameOrBefore = (date1, date2) => {
    return differenceInDays(date1, date2) <= 0;
  }

  // problem right now
  // progressions will not save when new date is selected
  // SHOULD I: 
  // save all progressions in a new state? similar to gGoals
  // 
  const updateProgressions = () => {
    const filteredGoals = gGoals.filter(goal => (isSameOrBefore(date, goal.date)))
    setProgressions(filteredGoals.map(goal => ({
      id: goal.id,
      text: goal.text,
      date: date
    })))
  }

  return (
    <div>
      <Calendar 
        setDate={updateDate} 
      />
      <GoalList 
        goals={dateGoals}
        updateGoals={updateGoals}
        gGoals={gGoals}
        date={date} 
      />
    </div>
  )
};

export default AppBody;
