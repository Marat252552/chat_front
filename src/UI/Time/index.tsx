import MainText from '../../shared/Texts/MainText'
import styles from './lib/styles.module.css'


const Time = ({date}: {date: Date}) => {

    let getMinutes = () => {
        let minutes = date.getMinutes()
        let stringMinutes = ''
        if(minutes < 10) {
            stringMinutes = `0${minutes}`
        } else {
            stringMinutes = `${minutes}`
        }
        return stringMinutes
    }    

    return (
        <div className={styles.time_module}>
            <MainText>{`${date.getHours()}:${getMinutes()}`}</MainText>
        </div>
  )
}

export default Time