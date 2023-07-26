import { Header } from './Components/Header'
import { NewTask } from './Components/NewTask'
import { TasksContainer } from './Components/TasksContainer'
import './globals.css'
import { useLocalStorage } from  'usehooks-ts'

export interface Itask{
    
  id: number,
  status: boolean,
  task: string,
}

  export function App() {
    

  const [tasks, setTask] = useLocalStorage<Itask[]>('tasks', [])
  

  const hadtask = tasks.length == 0  

  function handleNewTask(newtask : Itask) {
    
    const withNewTask = [...tasks, newtask]
    
    withNewTask.sort((a,b) => {
      if(a.status < b.status){
        return -1
      } else{
        return 0
      }
    })
    
    setTask(withNewTask)
  }

  function handleStatus(taskstatus : Itask){
    const listWithNewStatus = tasks.filter(tasks => {
      return tasks.id !== taskstatus.id
    })

    listWithNewStatus.push(taskstatus)

    listWithNewStatus.sort((a,b) => {
      if(a.status < b.status){
        return -1
      } else{
        return 0
      }
    })

    setTask(listWithNewStatus)

  }

  function handleDeleteTask(deleteTask : Itask){
  
    const listWithoutTask = tasks.filter(tasks => {
      return tasks.id !== deleteTask.id
    })

    setTask(listWithoutTask)

  }

  return (
   <div >
    <Header />
    <NewTask handle={handleNewTask} />
    <TasksContainer hadtask={hadtask} tasks={tasks} status={handleStatus} deleteTask={handleDeleteTask}/>
   </div>  
  )
}
