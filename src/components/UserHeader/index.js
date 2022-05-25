import { useState } from 'react'
import styles from './userheader.module.css'

export default function UserHeader(){

    const active = {
      all: { isActive: true },
      teams: { isActive: false },
      personal: { isActive: false}
    }

    // state
    const [ isActive, setIsActive ] = useState(active)

    // handler
    const handleClick = (e) => {
      const name = e.target.innerText;
        switch (name){
          case "All":
            setIsActive(prev => ({...prev, all: { isActive: true },teams: { isActive: false },
              personal: { isActive: false} }));
              break;
          case 'Teams':
            setIsActive(prev => ({ ...prev, teams: { isActive: true }, all: { isActive: false,
              personal: { isActive: false} } }));
              break;
          case 'Personal':
            setIsActive(prev => ({ ...prev, personal: { isActive: true}, all: { isActive: false }, teams: { isActive: false },
               }));
              break;
           default:
             return
        }
    }

    const { all, teams, personal } = isActive;
    // console.log(isActive)

    return (
     <div className={ styles.userHeader }>
        <ul className={ styles.userType }>
          <li className={ all.isActive && styles.isActive } onClick={ handleClick } >All</li>
          <li className={ teams.isActive && styles.isActive } onClick={ handleClick } >Teams</li>
          <li className={ personal.isActive && styles.isActive } onClick={ handleClick } >Personal</li>
        </ul>
      </div>
    )
}