// メイン部分
let alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す
alert(alertString);

// 作成した関数
function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}

let promptStr = prompt('何か好きな文字を入力してください。');

alert(promptStr);

let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

alert('あなたの選んだ手は' + user_hand + 'です。');