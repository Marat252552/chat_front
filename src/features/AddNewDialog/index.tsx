import { CloseOutlined, PlusOutlined } from "@ant-design/icons"
import FilledElement from "../../UI/FilledElement"
import MainIcon from "../../shared/Icons/MainIcon"
import styles from './lib/styles.module.css'
import { useState } from 'react'
import SearchInput from "../SearchInput"


const AddNewDialogButton = () => {

    let [active, setActive] = useState(true)

    let closeHiddenModule = () => {
        setActive(false)
    }

    let AddDialog = () => {
        setActive(prev => !prev)
    }

    return <>
        <div className={styles.button}>
            <div className={styles.container}>
                {active && <>
                    <div className={styles.hidden_module}>
                        <SearchInput />
                        <FilledElement
                            onClick={closeHiddenModule}
                            style={{ backgroundColor: 'var(--danger-color)', cursor: 'pointer' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <MainIcon Component={CloseOutlined} />
                            </div>
                        </FilledElement>
                    </div>

                </>}
                <FilledElement
                    onClick={AddDialog}
                    style={(active) ? { backgroundColor: 'var(--success-color)', cursor: 'pointer' } : { cursor: 'pointer' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <MainIcon Component={PlusOutlined} />
                    </div>
                </FilledElement>
            </div>

        </div>
    </>
}

export default AddNewDialogButton