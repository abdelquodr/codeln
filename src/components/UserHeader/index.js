import styles from './userheader.module.css'

export default function UserHeader(){
    return (
     <div className={ styles.userHeader }>
        <ul className={ styles.userType }>
          <li className={ styles.isActive }>All</li>
          <li>Teams</li>
          <li>Personal</li>
        </ul>
      </div>
    )
}