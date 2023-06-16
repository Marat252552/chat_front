let getShortenedValue = (value: string, maxLength: number) => {
    let shortened_name = value.slice(0, maxLength)
    let result
    if(shortened_name.length === 12) {
        result = shortened_name + ' ...'
    } else {
        result = shortened_name
    }
    return result
}

export default getShortenedValue