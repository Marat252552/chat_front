import { RedoOutlined } from "@ant-design/icons"
import MainText from "../../shared/Texts/MainText"
import styles from './lib/styles.module.css'
import MainIcon from "../../shared/Icons/MainIcon"
import MainButton from "../../UI/Buttons/MainButton"


const ClearChatButton = () => {
    return <MainButton>
        <div className={styles.container}>
            <MainIcon Component={RedoOutlined} />
            <MainText>Clear chat</MainText>
        </div>
    </MainButton>

}

export default ClearChatButton