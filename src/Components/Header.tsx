import logo from '../assets/rocket.svg'
import style from './Style/Header.module.css'

export function Header() {
    return(
        <header className={style.header}>
            <div className={style.container}>
                <img src={logo} alt='logo'/>
                <h1 className={style.to}>to</h1>
                <h1 className={style.do}>do</h1>
            </div>
        </header>
    )
        
    

}