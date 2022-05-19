import styles from './navbar.module.css'

export default function  Navbar (){
    return (
        <div className={ styles.navbar }>
          <div className={ styles.message}>
            <h3 className={ styles.align }>Message</h3>
            <div className={ `${styles.align} ${ styles.search}` }>
              search message
            </div>
          </div>

          <div className={ `${styles.align} ${styles.lang}` }>
            English
          </div>
        </div>
    )
}