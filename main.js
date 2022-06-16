let icoon1 = document.getElementById('icoon1');
let icoon2 = document.getElementById('icoon2');
let icoon3 = document.getElementById('icoon3');
let icoon4 = document.getElementById('icoon4');
let icoon5 = document.getElementById('icoon5');
let icoon6 = document.getElementById('icoon6');
let icoon7 = document.getElementById('icoon7'); 
let iconen = document.getElementsByClassName('top');
let teksten = document.getElementsByClassName('uitleg-bij-icoon');

let hoverOverIcoon = function(index){
    for (let i = 0; i<iconen.length; i++){
        if (i == index){
            iconen[i].style.display = 'block';
            teksten[i].style.display = 'block';
        } else {
            iconen[i].style.display = 'none';
            teksten[i].style.display = 'none';
        }
    }
}



icoon1.onmouseover = hoverOverIcoon(0);
icoon2.onmouseover = hoverOverIcoon(1);
icoon3.onmouseover = hoverOverIcoon(2);
icoon4.onmouseover = hoverOverIcoon(3);
icoon5.onmouseover = hoverOverIcoon(4);
icoon6.onmouseover = hoverOverIcoon(5);
icoon7.onmouseover = hoverOverIcoon(6);






 