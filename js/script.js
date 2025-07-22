//date Types
var str ="youssef";
var num = 21;
var bool = true;
var unde =  undefined ;
var nul =null ;
console.log(str , num ,bool , unde ,nul);

//Arithmetic Operators
var x = 20
var y = 10
console.log( x +  y ) ;
console.log( x *  y );
console.log( x -  y );
console.log( x /  y );
console.log( x %  y );
console.log( x ** y );
x ++;
y --;
console.log(x , y);

//Comparison Operators
var a = 10;
var b = "10" ;
console.log( b == a );
console.log( b === a );
console.log( b > 6  );
console.log( b < 6  );
console.log( b !== a);

//if

var age =30;
if ( age < 3 ) {
    console.log("child");


}else if (age >= 18  && age >= 30 ) {
    console.log("adult");


}else if (age >= 31 && age >= 60 ) {
    console.log("senior");
    

}else {
    console.log("Age is incorrect");
    
}

//switch

var day =4;
switch (day) {
    case 1:
        console.log("Saturday");
        break;
        case 2:
            console.log("Sunday");
            break
            case 3:
                console.log("Monday");
              break
              case 4:
                console.log("Tuesday");
                 break
              case 5:
                console.log("Wednesday");
                   break
              case 6:
                console.log("Thursday");
                   break
              case 17:
                console.log(" Friday");
                break
}

//loops 

//for 

var y = 1
for ( y = 1 ; y <= 10 ; y++ ){
console.log("Youssef");
}

// while

var o =1
while ( o < 10) {
    console.log("Badr");
    o++
}

//functions   

 function average ( a, b, c ,d ) {
    var avg =( a + b + c + d )  / 4;
  return avg ;
}
var result = average (100 ,200 ,300 ,400)
console.log(result);
///////

// Object
var user={

  firstName:"youssef",
  lastName:"badr",
  age:25,

addreess:{

   country :"egypt",
   city  :"Fayoum",

}
}

console.log(user.lastName);

console.log(user.addreess.city);
//=======================================
//arrays
var studentsAr=["ali" , "ahmed", "mohamed" , "youusef"]
console.table(studentsAr)

studentsAr.push("salah");
console.log(studentsAr);

studentsAr.shift()
console.log(studentsAr);

studentsAr.splice(0,2)
console.log(studentsAr);
// //============================

//select elment

var elments=document.getElementsByClassName("test1" [2])
var elments2=document.getElementById("test2")
var elments3=document.getElementsByName("text")
console.log(elments,elments2,elments3);

var elment4_query=document.querySelectorAll(".parent")

//click
var elment5_query=document.querySelector("#child")
function seyhello(userName) {
  console.log("hello", userName);
}
for (var i = 0  ;i<elment4_query.length  ;i++)
elment4_query[i].addEventListener("click",function(){

 hello("youssef")}
)




