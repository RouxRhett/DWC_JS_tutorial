// varによる再代入
//var nickname = "taro"
//console.log(nickname)
//nickname = "jiro"
//console.log(nickname)

// letによる再宣言
//let nickname = "taro"
//console.log(nickname)
//let nickname = "ichiro"
//console.log(nickname)

// constによる再宣言
//const nickname = "taro"
//console.log(nickname)
//const nickname = "ichiro"
//console.log(nickname)

var str = "webcamp"

function foo() { 
  console.log(str)
  var str = "dmm webcamp"
  console.log(str)
}

foo()