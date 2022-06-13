let icoon1 = document.getElementById('icoon1');
let tekstBijIcoon1 = document.getElementById('tekst-bij-icoon1')
let verschijn1 = function(){
    tekstBijIcoon1.style.display = 'block'
}
let verdwijn1 = function(){
    tekstBijIcoon1.style.display = 'none'
}
icoon1.onmouseover = verschijn1;
icoon1.onmouseout = verdwijn1;


