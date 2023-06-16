
const Style = {
    fontFamily: "Montserrat",
    fontSize: "14px",
    color: 'var(--text-color)'
}

const MainText = ({children}: {children: string}) => (
    <span style={Style}>{children}</span>
)

export default MainText