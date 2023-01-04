import React, { useState } from 'react'

import isSameDay from 'date-fns/isSameDay';

import Calendar from './Calendar'
import GoalList from './GoalList'

const AppBody = () => {
  const [date, setDate] = useState(new Date())
  const [gGoals, setGGoals] = useState([]) // global goals

  const updateDate = (newDate) => {
    setDate(newDate)
  }

  const updateGoals = (newGoals) => {
    setGGoals(newGoals)
  }

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
    </div>
  )
};

export default AppBody;
