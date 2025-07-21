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