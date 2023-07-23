import style from './Style/Tasks.module.css'

interface Iproptask{    
    id: number,
    status: boolean,
    task: string,
}


export function Tasks ({id, status, task} : Iproptask){
    const statusClass = status ? style.checked : style.checkbox
    const statusp = status ? style.checkedP : ''
    

return (
    <div className={style.main}>
        <div className={`${statusClass}`} ></div>
        <p className={statusp}>{task}</p>
        <button className={style.delete}><span className="material-symbols-outlined">delete</span></button>
    </div>
)

}