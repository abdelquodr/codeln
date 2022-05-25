import styles from './user.module.css'

export default function User(){
    return (
        <div className={ styles.user }>
            <div className={ styles.userPics }>

            </div>
            <div className={ styles.userMessage }>
                <h4>Jessica Adword</h4>
                <p>Hi, guys can you help me on this one? I do really need help.</p>
            </div>
            <div className={ styles.timer } >
                <p>
                    <span>20 min ago</span>
                </p>
                <div className={ styles.missedMessage }>
                5
                </div>
            </div>
        </div>
    )
}