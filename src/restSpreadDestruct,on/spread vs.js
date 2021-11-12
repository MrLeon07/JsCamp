let showProducts = function(id,...products){
    console.log(id)
    console.log(products)
}
// Spread
//showProducts(10,["elma","armut","karpuz"])
let point = [2,6,6,8,8,9,90,999]

console.log(Math.max(...point))
console.log(..."ABDC",..."ASDFASDF",..."asdfsa",..."asasdlkföşasdfasdfasdfasdf")

// destructuring

let populations = [20000,4000000,800000]
let [small,medium,high] = populations
console.log(small)
console.log(medium)
console.log(high)











