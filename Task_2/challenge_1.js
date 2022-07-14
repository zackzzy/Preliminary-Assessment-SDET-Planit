// Challenge 1:
// Get the nth number in the fibonacci sequence given n
// Alternatively given a number F, print out whether it's a fibonacci number and what the closest index n in the fibonacci sequence is.

function getFibSeq(n) {
    if(n===1 || n===2){
        return 1
    }

    return getFibSeq(n-1)+getFibSeq(n-2)
}

// console.log(getFibSeq(1))

function findCloseIndex(f) {
    var n=1
    while (f>=getFibSeq(n)){
        n++
    }

    if(f === getFibSeq(n-1)){
        return f + ' is a fibonacci number. The index in the fibonacci sequence is ' + (n-1) + '.'
    } else if(f > getFibSeq(n+1)/2) {
        return f + ' is not a fibonacci, and the closest index in the fibonacci sequence is ' + n + '.'
    } else {
        return f + ' is not a fibonacci, and the closest index in the fibonacci sequence is ' + (n-1) + '.'
    }

}

// console.log(findCloseIndex(54))