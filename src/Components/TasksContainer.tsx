import {Itask} from '../App'
import style from './Style/TasksContainer.module.css'
import { Tasknotfound } from './Tasknotfound'
import { Tasks } from './Tasks'


// const tasks : Itask[] = [
//     {
//     id: 1,
//     status: false,
//     task: "tesk 1" 
//     },
//    {
//     id: 1,
//     status: true,
//     task: "tesk 2"
//     }
// ]

interface Itaskprops{
    hadtask: boolean
    tasks: Itask[]
}


export function TasksContainer({hadtask, tasks}: Itaskprops){
    
     
    


    return (
        <div className={style.container}>
            <div className={style.header}>
                <p>Tarefa criada <span>0</span></p>
                <p>Concluídas <span>0</span></p>
            </div>
            <div className={style.main}>
                { 
                    hadtask == true ? <Tasknotfound/> : tasks.map(task =>{
                    return <Tasks
                                key={task.id} 
                                id={task.id} 
                                status={task.status} 
                                task={task.task} 
                            />
                    })
            
            }     
        
        
                
            </div>
        </div>
    )
}