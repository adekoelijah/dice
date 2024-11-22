// let x;
// let y;
// let z;
let count;
document.getElementById('rollBtn').onclick = function(){
    x = Math.floor(Math.random()*6+1);
    y = Math.floor(Math.random()*6+1);
    z = Math.floor(Math.random()*6+1);

   count = x+y+z

    document.getElementById('xlable').innerHTML = x;
    document.getElementById('ylable').innerHTML = y;
    document.getElementById('zlable').innerHTML = z;
    document.getElementById('count').innerHTML = count;
}
let x;
let y;
let z;
document.getElementById('resetBtn').onclick = function(){
    x = '';
    y ='';
    z = '';
    count ='';

    document.getElementById('xlable').innerHTML = x;
    document.getElementById('ylable').innerHTML = y;
    document.getElementById('zlable').innerHTML = z;
    document.getElementById('count').innerHTML = count;
}



document.getElementById('submittButton').onclick = function(){
    a = document.getElementById('aTextBox').value;
    a = Number(a);

    b = document.getElementById('bTextBox').value;
    b = Number(b);

    c = Math.sqrt(a**2+b**2)
   /*  c = Math.sqrt(Math(a,2)+ Math(b,2)); */
    document.getElementById('clable').innerHTML ='Side C :'  +c; 

}
