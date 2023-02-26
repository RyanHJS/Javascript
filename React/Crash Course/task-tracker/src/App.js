import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import React, { useState, useEffect } from 'react'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  // Show add task or hide
  const [toggleShowAddTask, setShowAddTask] = useState(false)

  // Define a global userTasks variable
  const [userTasks, setTasks] = useState([])

  useEffect(() => {

    getTasks()
  }, [])
  /* 
  useState in React is designed to create a new object with updated values whenever state is changed.
  If we modify the reminder property of an object in userTasks directly, without creating a new object, 
  React may not detect the change and may not re-render the component.
  */

  // Get tasks from server
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }

  // Fetch all tasks 
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    setTasks(userTasks.filter((task) => task.id !== id))
  }

  // Fetch single task
  const fetchSingleTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  // Toggle reminder
  const toggleReminder = async (id) => {

    const taskToToggle = await fetchSingleTask(id)
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(userTasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

  // Add task
  const addTask = async (task) => {
    // const id = userTasks.length + 1
    // const newTask = {id, ...task}
    // setTasks([...userTasks, newTask])

    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...userTasks, data])
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header
          taskToggle={() => setShowAddTask(!toggleShowAddTask)}
          toggleShowAddTask={toggleShowAddTask}
        />
        <Routes>
          <Route path='/' element={<>
            {toggleShowAddTask && (<AddTask onAdd={addTask} />)}
            {userTasks.length > 0 ? (
              <Tasks userTasks={userTasks} onDelete={deleteTask} onToggle={toggleReminder} />
            ) : (
              'Nothing to show here'
            )}
          </>} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

