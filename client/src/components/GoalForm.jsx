import React, { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

function GoalForm(props) {
  const [input, setInput] = useState('')

  const inputRef = useRef(null)

  // focus the input field
  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: uuidv4(),
      text: input,
      date: props.date
    })

    setInput('')
  }

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="New Goal" 
        value={input} 
        name="text" 
        className='goal-input' 
        onChange={handleChange}
        ref={inputRef}
      />
      <button className='goal-button'>Add Goal</button>
    </form>
  )
}

export default GoalForm
