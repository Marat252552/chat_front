import { SearchOutlined } from "@ant-design/icons"
import FilledElement from "../../UI/FilledElement"
import styles from './lib/styles.module.css'
import MainIcon from "../../shared/Icons/MainIcon"


const SearchInput = () => {
    return <>
        <FilledElement>
            <MainIcon Component={SearchOutlined}/>
            <input
                className={styles.custom_input}
                placeholder='Search'
            />
        </FilledElement>
    </>
}

export default SearchInput