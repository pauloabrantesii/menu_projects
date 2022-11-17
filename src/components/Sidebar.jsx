import { HandPointing } from 'phosphor-react'
import { Avatar } from './Avatar';


import styles from './Sidebar.module.css'

export function Sidebar() {
    return(
       <aside className={styles.sidebar}>
           <img className={styles.cover} src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" 
           />

           <div className={styles.profile}>
             <Avatar src="https://github.com/pauloabrantesii.png" />
              
            <strong>Paulo Roberto</strong>
            <span>Web Developer</span>
           </div>


           <footer>
            <a href="https://www.linkedin.com/feed/">

                <HandPointing size={20}/>
                Contato
            </a>
           </footer>
       </aside>
    );
}