import style from './Style/Tasknotfound.module.css'

export function Tasknotfound(){
    return (
        
        <div className={style.empty}>
           <span className="material-symbols-outlined">assignment</span>
            <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>                
              </div>  
        </div>
        
    )
}