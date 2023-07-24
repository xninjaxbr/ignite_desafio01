import { Itask } from '../App'
import style from './Style/Tasks.module.css'

interface Iproptask{    
    id: number,
    status: boolean,
    task: string,
    onChangeStatus(status : Itask) : void,
    onDelete(task: Itask) : void
}


export function Tasks ({id, status, task, onChangeStatus, onDelete } : Iproptask){
    const statusClass = status ? style.checked : style.checkbox
    const statusp = status ? style.checkedP : ''
    
    const newStatus = !status

    function deleteTask(){
        onDelete({id: id, status: status, task: task})
    }

    function changeTask(){
        onChangeStatus({id: id, status: newStatus, task: task})
    }

return (
    <div className={style.main}>
        <div className={`${statusClass}`} onClick={changeTask}></div>
        <p className={statusp}>{task}</p>
        <button className={style.delete}><span className="material-symbols-outlined" onClick={deleteTask}>delete</span></button>
    </div>
)

}