import { User, UserHeader } from '../../components'

export default function UsersType(){
    return (
        <div className="users">
           <UserHeader />

            <div className="user-list">
              <User />
            </div>
        </div>
    )
}