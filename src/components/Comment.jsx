import { Trash } from 'phosphor-react'
import { ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment(){
    return (
      <div className={styles.comment}>
         <Avatar  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>User</strong>
                        <time title="15 de novembro às 14:34h"  dataTime="2022-11-15">Cerca de 1h atrás</time>
                    </div>

                    <button title="Deletar comentário">
                        <Trash size={20} />
                    </button>
                </header>

                <p>Muito legal!</p>
            </div>

            <footer>
                <button> 
                <ThumbsUp />
                aplaudir <span>20</span>
                </button>
            </footer>
         </div>

      </div>
    )
}