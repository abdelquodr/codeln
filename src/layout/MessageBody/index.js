import { MessageRoom } from '../../components'
import { UsersType } from '../'

import styles from './messagebody.module.css'

export default function MessageBody(){
    return(
        <div className={ styles.messageBody }>
          <UsersType />
          <MessageRoom />
        </div>
    )
}