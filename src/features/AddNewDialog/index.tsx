import { PlusOutlined } from "@ant-design/icons"
import FilledElement from "../../UI/FilledElement"
import MainIcon from "../../shared/Icons/MainIcon"


const AddNewDialogButton = () => {
    return <>
        <div style={{ cursor: 'pointer' }}>
            <FilledElement>
                <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <MainIcon Component={PlusOutlined} />
                </div>
            </FilledElement>
        </div>
    </>
}

export default AddNewDialogButton