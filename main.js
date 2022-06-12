// const iconen = document.getElementById('icoon1')

let groeien = function(){
    icoon1.style.width='4rem';
}
let krimpen = function(){
    icoon1.style.width='3rem'
}

icoon1.onmouseover = groeien;
icoon1.onmouseout = krimpen;


















// // accessing the elements with same classname
// const elements = document.querySelectorAll('.my-box');

// // adding the event listener by looping
// elements.forEach(element => {
//    element.addEventListner('click', (e)=>{
//      console.log('someone hit me');
//    });
// });