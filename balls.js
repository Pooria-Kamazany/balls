
// --- largeBox = 4 ->a
// --- smallBox = 2 ->b
// --- balls = 19 ->x

// ----First Plan----
// let x=19;
// let a = 0;
// let b = 0;

// if(x<=5){
//     a++;
//     x-5;
// }else if(x<5){
//     b++;
//     x-1;
// }
// console.log(x);
// console.log(a);
// console.log(b);




// ----Second Plan----
// let x =19;
// let a = 4;
// let b = 2;
// x =() =>{
//     while (x<19 && x>=5) {
//         x-5;
//         a++;

//     }
//     if(x>0 && x<=5){
//         x--;
//         b++;

//     }
// }
// console.log(x);
// console.log(a);
// console.log(b);


// ----Third Plan----
// let x =19;
// let a = 4;
// let b = 2;
// if ( x>=5) {
//     x-5;
//     a-1;
//     console.log(a);
// } else if(x<5){
//     x-1;
//     b-1;
//     console.log(b);
// }else{
//     console.log("-1");
// }



// ----Fourth Plan----
// let a = 4
// for( let x =19 ;x>=5 && x>0 ;x-5 ){
//     console.log(x);
// }

