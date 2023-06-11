import { SearchOutlined } from '@ant-design/icons'
import styles from './lib/styles.module.css'


const SearchInput = () => {
    return <div className={styles.container}>
        <SearchOutlined style={{color: 'white'}}/>
        <input className={styles.customInput}/>
    </div>
}

export default SearchInput