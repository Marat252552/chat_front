import {forwardRef} from 'react'
import FilledElement from '../FilledElement'
import TransparentInput from '../TransparentInput'


const FilledInput = forwardRef((props: any, ref: any) => {
    return <>
        <FilledElement>
            <TransparentInput 
                ref={ref}
                {...props}
            />
        </FilledElement>
    </>
})

export default FilledInput