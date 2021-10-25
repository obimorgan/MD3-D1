//01
function sumOfTwoIntergers (int1, int2) {
    if (int1 === int2) {
        return (int1 + int2) * 3
    }
    else {
        return (int1 = int2)
    }
}

//02
function checkTwoInt (int1, int2) {
    if ((int1 === 50 || int2 === 5) || (int1 + int2 === 50)) {
        return true
    } else {
        return false
    }
}
// console.log(checkTwoInt(50, 2))

//03
function removeChar (str, removeCharPosition) {
    let newStr= '' 
    return newStr += str.slice(removeCharPosition)
}
console.log(removeChar('Hello', 1))

//04
function theLargest (int1, int2, int3) {
    let largestInt = 0
    if (int1 > int2) {
        largestInt = int1
    }else {
        largestInt = int2
    }if ( largestInt < int3) {
        largestInt = int3
    }
    return largestInt
}
console.log(theLargest(34, 2, 3))

//05
function checkNum (num1, num2) {
    if ((num1 >= 40 && num1 <= 60)
    || (num1 >= 70 && num1 <=100)
    && (num2 >= 40 && num2 <= 60)
    || (num2 >= 70 && num2 <=100)) {
        return true
    } else {
        return false
    }
}
console.log(checkNum(25, 61))

//06
function createNewStr (str, numOfCopies) {
    let newStr = ' '
    let strtoArray = str.split(' ')
    newStr = strtoArray.slice(0).join()
    return newStr.repeat(numOfCopies)
}
console.log(createNewStr('i love pop corn', 2))

//07
function displayCityName (str) {
    if (str.charAt(1) === 'l' 
    && str.charAt(2) === 'o'
    && str.charAt(3) === 's' ||
    str.charAt(1) === 'n' 
    && str.charAt(2) === 'e'
    && str.charAt(3) === 'w') {
        return true
    } else {
        return false
    }
}
console.log(displayCityName('los angeles'))

//08
function sumOf (int1, int2, int3) {
    // let arrayToPass = ['in1', 'int2', 'int3']
    sumOfArrays = ''
    return sumOfArrays += (int1 + int2 + int3)
}
console.log(sumOf(1, 2, 3))

//09
// const numbers = [2, 9] 
// function contains1or3 (arr) {
//     for (i = 0; i < arr[i].length; i++) {
//         if (arr[i] === 1 || arr[i] === 3) {
//             return true
//         }
//         else false
//     }
// }   
// console.log(contains1or3(numbers))

function contains1or3 (arr) {
    if (arr.includes(1) || arr.includes(3)) {
        return true
    } else {
        return false
    }
}
// s

//10
function contains1or3 (arr) {
    if (!arr.includes(1) || !arr.includes(3)) {
        return true
    } else {
        return false
    }
}
console.log(contains1or3([7, 5]))

//11
// let arr =['abc', 'abcd', 'abcde']
function longestStr (arrOfstr) {

    let longestStr = arrOfstr[0].length

    arrOfstr.map(x => longestStr = Math.max(longestStr, x.length))

    result = arrOfstr.filter(x => x.length === longestStr)

    return result
}
console.log(longestStr(['abc', 'abcd', 'abcde']))

//12
function whatTypeOfAngle(angle) {
    let typeOfAngle = ''
    if (angle >= 0 && angle <= 90) {
        return typeOfAngle = 'acute'
    }else if (angle >= 90 && angle <= 180) {
        return typeOfAngle = 'obtuse'
    } else if (angle === 180) {
        return typeOfAngle = 'straight'
    }else if (angle === 90) {
        return typeOfAngle = 'right'
    }
}
console.log(whatTypeOfAngle(90))