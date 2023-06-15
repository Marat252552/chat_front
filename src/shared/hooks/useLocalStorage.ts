import {useState, useEffect} from 'react'

let PREFIX = 'whats-app-'

const useLocalStorage = (id: string, initialValue?: any) => {
    let prefixedId = PREFIX + id
    const [value, setValue] = useState(() => {
        let item = localStorage.getItem(prefixedId)
        if(item) return item
        if(typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })
    
    useEffect(() => {
        localStorage.setItem(prefixedId, value)
    }, [id, value])

    return [value, setValue]
}

export default useLocalStorage