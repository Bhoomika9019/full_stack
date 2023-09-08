let ok = [12,21]
console.log(ok)
console.log(ok[0])
console.log(ok[1])
ok.push (6)
console.log(ok)
ok.pop()
console.log(ok)
console.log(ok[1]+ok[0])
for(let i = 0; i < 500; i++){
    console.log(i)
    if( i == 50){
        console.log("chosen 50")
        continue
    }
}