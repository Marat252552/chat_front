import FilledElement from "../FilledElement"
import TransparentInput from "../TransparentInput"


const FilledInput = (props: any) => {
    return <>
        <FilledElement>
            <TransparentInput 
                {...props}
            />
        </FilledElement>
    </>
}

export default FilledInput