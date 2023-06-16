import FilledElement from '../../FilledElement'
import TransparentButton from '../../TransparentButtonContainer'


const IconOutlinedButton = ({IconComponent}: {IconComponent: any}) => (
    <TransparentButton>
        <FilledElement
            style={{ border: 'solid 2px white', cursor: 'pointer', width: '100%', display: 'flex', justifyContent: 'center' }}>
            {IconComponent}
        </FilledElement>
    </TransparentButton>
)

export default IconOutlinedButton