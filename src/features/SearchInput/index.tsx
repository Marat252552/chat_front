import { SearchOutlined } from "@ant-design/icons"
import FilledElement from "../../UI/FilledElement"
import styles from './lib/styles.module.css'


const SearchInput = () => {
    return <>
        <FilledElement>
            <SearchOutlined className={styles.icon} />
            <input
                className={styles.custom_input}
                placeholder='Search'
            />
        </FilledElement>
    </>
}

export default SearchInput