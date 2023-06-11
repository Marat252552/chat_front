import { RedoOutlined } from "@ant-design/icons"
import FilledElement from "../../UI/FilledElement"
import styles from './lib/styles.module.css'
import MainIcon from "../../shared/Icons/MainIcon"


const ClearAllChats = () => {
    return <>
        <FilledElement>
            <MainIcon Component={RedoOutlined}/>
            <span className={styles.text}>Clear chats</span>
        </FilledElement>
    </>
}

export default ClearAllChats