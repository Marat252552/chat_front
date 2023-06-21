import userSlice from '../../../state/Reducers/UserReducer'
import { useAppDispatch } from '../../../state/hooks'
import loggedAPI from '../../api/actions/loggedAPI'
import loggedCheck from '../../processes/loggedCheck'
import styles from './lib/styles.module.css'


const MainPageTemplate = ({ children }: { children: any }) => {

    return <div className={styles.max_width_container}>
        <div className={styles.wrapper}>
            {children}
        </div>
    </div>
}


export default MainPageTemplate