function propObject(string, obj) {
    return (string in obj)
}


console.log(propObject('a', {a: 1, b: 2}))