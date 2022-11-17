import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'


export function Post(){

    return (
            
        <article className={styles.post}>
            <header>
               <div className={styles.author}>
                <Avatar hasBorder src="https://github.com/pauloabrantesii.png" />
              <div className={styles.authorInfo}>
                <strong>Paulo Roberto</strong> 
                <span>Web Dveloper</span>
                </div>
               </div>

              <time title="15 de novembro às 14:34h"  dataTime="2022-11-15">Publicado há 1h</time>
         </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz na NLW COPA 2022, evento da Rocketseat. O nome do projeto é NLW-COPA-2022🚀</p>
            <p>👉 {' '} <a href="">Copa Nlw</a> </p>
            <p>
                <a href="">#novoprojeto</a>{' '}
                <a href="">#nlw </a>{' '}
                <a href="">#rocketseat </a>{' '}
            </p>
            </div> 

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
            
            <textarea
            placeholder="Deixe um comentário"
            />


         <footer>
            <button type="submit">Publicar</button>
         </footer>    
            </form>
            
           <div className={styles.commentList}>

            <Comment />
            

           </div>
        </article>
     )
  }

