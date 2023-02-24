import React from 'react'

const userTasks = [
    {
        id: 1,
        text: 'Task 1',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Task 2',
        day: 'Feb 5th at 3:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Task 3',
        day: 'Feb 5th at 3:30pm',
        reminder: true,
    }
]

const Tasks = () => {
  return (
    <div>
        {userTasks.map((task) => 
        (
            <h3 key={task.id}>{task.text}</h3>
        ))}
    </div>
  )
}

export default Tasks