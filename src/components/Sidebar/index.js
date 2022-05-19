import styles from './sidebar.module.css'
import listItem from './sidebar.json'

export default function  Sidebar (){
    return (
        <div className={ styles.sidebar }>
            <div className={ styles.logoDiv }>
                <div className={ styles.logo} ></div>
                <h2 className={ styles.logoName}>#fikristudio</h2>
            </div>

            <div className={ styles.sideMenu}>
            <ul className={ styles.menuItems }>
                { listItem.menuItem.map((item, ind) => <li key={ ind + item.id }className={ styles.item }> {item.name} </li> ) }
            </ul>
            <hr className={ styles.line } />
            <ul className={ styles.menuItems }>
                { listItem.supportItem.map((item, ind) => <li key={ ind + item.id }className={ styles.item }> {item.name} </li> ) }
            </ul>
            </div>
        </div>
    )
}