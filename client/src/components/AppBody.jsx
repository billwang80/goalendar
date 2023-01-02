import React, { useState, useEffect } from 'react'

import isSameDay from 'date-fns/isSameDay';

import Calendar from './Calendar'
import GoalList from './GoalList'

const AppBody = () => {
  const [date, setDate] = useState(new Date())
  const [gGoals, setGGoals] = useState([]) // global goals
  const [dateGoals, setDateGoals] = useState([]) // pass filtered goals to child

  const updateDate = (newDate) => {
    setDate(newDate)
    setDateGoals(gGoals.filter(goal => (isSameDay(goal.date, newDate))))
  }

  const updateGoals = (newGoals) => {
    setGGoals(newGoals)
    setDateGoals(newGoals.filter(goal => (isSameDay(goal.date, date))))
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
