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
    hadtask: boolean,
    tasks: Itask[],
    status(tasks : Itask) : void,
    deleteTask(deleteTask : Itask) :  void,
}


export function TasksContainer({hadtask, tasks, status ,  deleteTask } : Itaskprops){
    
    
    const numberOfTasks = tasks.length

    const completeTasks = tasks.filter(tasks => {
        return tasks.status === true
    })



    return (
        <div className={style.container}>
            <div className={style.header}>
                <p>Tarefa criada <span>{numberOfTasks}</span></p>
                <p>Concluídas <span>{completeTasks.length}</span></p>
            </div>
            <div >
                { 
                    hadtask == true ? <Tasknotfound/> : tasks.map(task =>{
                    return <Tasks
                                key={task.id} 
                                id={task.id} 
                                status={task.status} 
                                task={task.task} 
                                onChangeStatus={status}
                                onDelete={deleteTask}
                            />
                    })
            
            }     
        
        
                
            </div>
        </div>
    )
}