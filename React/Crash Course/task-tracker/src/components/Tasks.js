import Task from './Task'
// Statet is immutable

const Tasks = ({userTasks, onDelete, onToggle}) => {
  return (
    <>
        {userTasks.map((task) => 
        (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </>
  )
}

export default Tasks