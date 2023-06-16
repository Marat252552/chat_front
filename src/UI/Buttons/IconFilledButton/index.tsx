import FilledElement from '../../FilledElement'
import TransparentButton from '../../TransparentButtonContainer'


const IconFilledButton = ({IconComponent}: {IconComponent: any}) => (
    <TransparentButton>
        <FilledElement
            style={{ backgroundColor: 'white', cursor: 'pointer', width: '100%', display: 'flex', justifyContent: 'center' }}>
            {IconComponent}
        </FilledElement>
    </TransparentButton>
)

export default IconFilledButton