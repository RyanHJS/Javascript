import Task from './Task'
// Statet is immutable

const Tasks = ({userTasks, onDelete, onToggle}) => {
  return (
    <div>
        {userTasks.map((task) => 
        (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </div>
  )
}

export default Tasks