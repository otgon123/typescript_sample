var message:string = "Hello!";
console.log(message);

//type inference - 型推論
var id = 1;
var email = "test@test.com";
var isActive = true;
var none;

//type definition - 型定義
var id:number = 1;
var email:string = "test@test.com";
var isActive:boolean = true;
var none:any;


// var id;
// var email;
// var isActive;
// var none;


// id = "YSE";
// email = 1000;
// isActive = "OK";
// none = 1000;
// none = "YSE";

console.log(id, typeof id)
console.log(email, typeof email)
console.log(isActive, typeof isActive)
console.log(none, typeof none)