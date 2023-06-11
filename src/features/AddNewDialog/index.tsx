import { PlusOutlined } from "@ant-design/icons"
import FilledElement from "../../UI/FilledElement"
import styles from './lib/styles.module.css'


const AddNewDialogButton = () => {
    return <>
        <div style={{cursor: 'pointer'}}>
            <FilledElement>
                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'cetner' }}>
                    <PlusOutlined className={styles.icon}/>
                </div>
            </FilledElement>
        </div>

    </>
}

export default AddNewDialogButton