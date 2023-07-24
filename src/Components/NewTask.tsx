import { useState, ChangeEvent, FormEvent } from 'react'
import style from './Style/NewTask.module.css'
import {Itask} from '../App'

interface INewTaskprops{
    handle: (task: Itask) => void;
}


export function NewTask({handle}: INewTaskprops ) {

    const [inputtask, setinputtask] = useState('')
    const [idTask, setidtask] = useState(0)
    function handleSubmit(event: FormEvent){
        event.preventDefault()
        if(inputtask != ''){
        handle({
            id: idTask + 1 ,
            status: false,
            task: inputtask
        })

        setidtask(idTask +1)
        setinputtask('')
    }else{
        alert('Campo obrigatório')
    }
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>){
        setinputtask(event.target.value);
    }



    return (
        <form onSubmit={handleSubmit} className={style.main}>
          <input className={style.taskInput} onChange={handleChange}  placeholder='Adicione uma nova tarefa' required value={inputtask}/>
          <button type="submit" className={style.taskButton}>Criar <span className="material-symbols-outlined">
            add_circle
            </span></button>
        </form>
    )   

}