import { SearchOutlined } from "@ant-design/icons"
import FilledElement from "../../UI/FilledElement"
import MainIcon from "../../shared/Icons/MainIcon"
import TransparentInput from "../../UI/TransparentInput"


const SearchInput = () => {
    return <>
        <FilledElement>
            <MainIcon Component={SearchOutlined}/>
            <TransparentInput 
                placeholder='Search'
            />
        </FilledElement>
    </>
}

export default SearchInput