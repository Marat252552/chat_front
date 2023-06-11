const Style = {
    fontFamily: "Space Grotesk",
    fontSize: "15px",
    color: 'var(--star_text-color)'
}

const StarText = ({children}: {children: string}) => (
    <span style={Style}>{children}</span>
)

export default StarText