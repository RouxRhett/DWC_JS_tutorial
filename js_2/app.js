//変数の宣言
let hello = 'Hello World';
//変数の呼び出し
alert(hello);

//四則演算
// 足し算
alert(4 + 3);
// 引き算
alert(8 - 5);
// 掛け算
alert(2 * 6);
// 割り算
alert(10 / 2);

//結合用の変数宣言
let str1 = 'Hello';
let str2 = 'World!!';
//文字列を結合
alert(str1 + str2);

//
let orange = 100;
let apple = 120;
//条件分岐。
//オレンジよりりんごの方が多い時
if(orange < apple){
  alert('みかんの値段がりんごより安い');
//オレンジとりんごが同じ時
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}

//繰り返し用変数
let max = 100;
let num = 1;
let count = 0;
//do文,条件に関わらず１回だけ

//while文,numがmaxに達するまで
while(num < max){
  num = num * 2;
  count = count + 1;
}
alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');