import { User, UserHeader } from '../../components'
import styles from './userType.module.css'

export default function UsersType(){
    return (
        <div className="users">
           <UserHeader />

            <div className={ styles.userList }>
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
              <User />
            </div>
        </div>
    )
}