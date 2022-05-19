import styles from './messageroom.module.css'

export default function MessageRoom(){
    return (
        <div className={ styles.messageRoom }>
            <div className={ styles.messageBox }>
                <p>
                    Thanks for   yor feedback. Shahl I
                    will consider the topic you have suggested.
                    Thanks you for  the good idea
                </p>
                <span>14:46</span>
            </div>
        </div>
    )
}