const Style = {
    fontFamily: "Montserrat",
    fontSize: "14px",
    color: 'var(--middle-text-color)'
}

const MiddleText = ({children}: {children: string}) => (
    <span style={Style}>{children}</span>
)

export default MiddleText