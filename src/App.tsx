import { Header } from './Components/Header'
import { NewTask } from './Components/NewTask'
import { TasksContainer } from './Components/TasksContainer'
import './globals.css'
import { useState } from 'react'

export interface Itask{
    
  id: number,
  status: boolean,
  task: string,
}

  export function App() {
    
  const [tasks, setTask] = useState<Itask[]>([])

  const hadtask = tasks.length == 0  

  function handleNewTask(newtask : Itask) {
    
    console.log(newtask)
    setTask( [...tasks, newtask])
    console.log(newtask)
      
  }

  return (
   <div >
    <Header />
    <NewTask handle={handleNewTask} />
    <TasksContainer hadtask={hadtask} tasks={tasks}/>
   </div>  
  )
}
