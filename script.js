//1. forを使ったループ処理を作ってください。
for (var i = 10; i <= 100; i++){
  console.log("創業" + i + "周年");
};

//2. for inを使ったループ処理を作ってください。
var obj = {
  name: '翔太',
  age: 33,
  home: '湘南'
}
for(index in obj){
  console.log(obj[index]);
};

//3. for ofを使ったループ処理を作ってください。
var array = ['赤', '青', '黄', '緑'];
for(var color of array) {
  console.log(color);
}