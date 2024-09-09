// function problem  2 

// function  checkName(userName) {
//     let lastLetter = userName.slice(-1);
//     for(let testLetter of letter) {
        
//         if(lastLetter === testLetter){
//             console.log("hello world");
//         }
//         else{
//             console.log("Hi");
//         }

//         // console.log(testLetter);
//     }
//     // console.log(lastLetter);


// }

// let letter = ["a", "y", "i", "e", "o", "u", "w"]
// let userName = "Madhupur";
// let result = checkName(userName);
// console.log(result);

function checkName(name){
    let lastLetter = name.slice(-1).toLowerCase();

    let result = false;
    let checkArray = ['a', 'y', 'e', 'o', 'i', 'u', 'w']
    for(let char of checkArray){
        if(char === lastLetter){
            result = true;
        }
    }
    return result ? "Good Name": "Bad Name";
}

console.log(checkName("Hrido"));