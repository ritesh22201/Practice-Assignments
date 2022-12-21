let cont = document.getElementById('container');
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let button = document.getElementById('btn1');

button.addEventListener('click', () =>{
    box1.style.backgroundColor = 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ')';
})

box2.addEventListener('mousemove', () =>{
    box2.style.backgroundColor = 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ')';
})