// Write a solution to find the character that has the highest number of occurrences within a certain string, ignoring
// case. If there is more than one character with equal highest occurrences, return the character that appeared first
// within the string.
// For example:
// Input: "Character"
// Output: c

function findMostFrequent(string) {
    if (string === '') return 'Empty input string.'
    string = string.toLowerCase()
    arr = [] // [order]
    map = {} // {c:1,b:5}
    for (let i = 0; i < string.length; i++) {
        if (arr.includes(string[i])) {
            map[string[i]] += 1
        } else {
            arr.push(string[i])
            map[string[i]] = 1
        }
    }
    let max = 0
    for (const key in map) {
        if (Object.hasOwnProperty.call(map, key)) {
            if (map[key] > max) {
                max = map[key]
            }
        }
    }
    let resArr = []
    for (const key in map) {
        if (Object.hasOwnProperty.call(map, key)) {
            if (map[key] === max) {
                resArr.push(key)
            }
        }
    }
    if (resArr.length === 1) {
        return resArr[0]
    }
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        if (res.includes(arr[i])) {
            res = arr[i]
            break
        }
    }
    return res
}
console.log(findMostFrequent(''))
