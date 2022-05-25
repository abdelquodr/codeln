import styles from './sidebar.module.css'
import listItem from './sidebar.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf} from "@fortawesome/free-solid-svg-icons";

export default function  Sidebar (){
    return (
        <div className={ styles.sidebar }>
            <div className={ styles.logoDiv }>
                <div className={ styles.logo} >
                    <FontAwesomeIcon className={ styles.logoIcon} icon={ faLeaf } size="3x" />
                </div>
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

            <div className={ styles.bottomContainer }>
                <div className={ `${styles.flexOut}  ${styles.marginIn}` } >
                    <h3>estimo</h3> <div className={ styles.pro }>PRO</div>
                </div>
                <hr className={ `${styles.line}  ${styles.liner}` } />
                <div className={`${styles.flexOut} ${styles.profileFlex}`} >
                    <div className={ styles.flexOut }>
                        <div className={ styles.profilePics }>

                        </div>
                        <p>Axel Laryn</p>
                    </div>
                    <div className={styles.flexOut} >
                        <div className={ styles.num }>9</div>
                        <FontAwesomeIcon className={ styles.icon }icon={ faLeaf } />
                    </div>

                </div>
            </div>
        </div>
    )
}