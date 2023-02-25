import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import React, { useState } from 'react'


function App() {

  // Show add task or hide
  const [toggleShowAddTask, setShowAddTask] = useState(false)

  // Define a global userTasks variable
  const [userTasks, setTasks] = useState([
    {
      id: 1,
      text: 'Text 1',
      day: 'Feb 5th at 2:30 PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Text 2',
      day: 'Feb 5th at 3:30 PM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Text 3',
      day: 'Feb 5th at 3:30 PM',
      reminder: true,
    },
  ])

/* 
useState in React is designed to create a new object with updated values whenever state is changed.
If we modify the reminder property of an object in userTasks directly, without creating a new object, 
React may not detect the change and may not re-render the component.
*/

  // Delete task
  const deleteTask = (id) => {
    setTasks(userTasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(userTasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // Add task
  const addTask = (task) => {
    const id = userTasks.length + 1
    const newTask = {id, ...task}
    setTasks([...userTasks, newTask])
  }
  return (
    <div className="container">
      <Header taskToggle={() => setShowAddTask(!toggleShowAddTask)} toggleShowAddTask={toggleShowAddTask}/>
      {toggleShowAddTask ? (<AddTask onAdd={addTask}/>) : ''}
      {userTasks.length > 0 ? (
        <Tasks userTasks={userTasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        ) : (
          'Nothing to show here'
          )}
    </div>
  );
}

export default App;

