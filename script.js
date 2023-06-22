// Good Luck 💪🏾
function ZeroAndOne (changes){
    for(let i in changes){
        if(changes[i] === "Zero"){
            console.log("0")
        }else if(changes[i] === "One" ){
            console.log("1")
        }
    }


}

console.log(ZeroAndOne(["one","Zero","Zero","One"])) //➞ "001"
console.log(ZeroAndOne(["Zero", "ONE", "one", "Zero"])) //➞ "00"
