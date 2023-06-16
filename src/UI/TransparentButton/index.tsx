const TransparentButton = ({children}: {children: any}) => (
    <button type='submit' style={{ display: 'flex', border: 'none', justifyContent: 'center', width: '100%', backgroundColor: 'transparent' }}>
        {children}
    </button>
)

export default TransparentButton