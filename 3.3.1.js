function logObject(obj) {
    for (let item in obj) {
        if (obj.hasOwnProperty(item)) {
            console.log(item, obj[item])
        }
    }
}

console.log(logObject({a: 1, b: 2, c: 3}))