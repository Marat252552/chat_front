const iconStyle = {
    color: 'var(--text-color)',
    fontSize: '13px'
}

const MainIcon = ({ Component }: { Component: any }) => (
    <Component style={iconStyle} />
)

export default MainIcon