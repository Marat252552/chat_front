import { RedoOutlined } from "@ant-design/icons"
import FilledElement from "../../UI/FilledElement"
import styles from './lib/styles.module.css'


const ClearAllChats = () => {
    return <>
        <FilledElement>
            <RedoOutlined className={styles.icon}/>
            <span className={styles.text}>Clear chats</span>
        </FilledElement>
    </>
}

export default ClearAllChats