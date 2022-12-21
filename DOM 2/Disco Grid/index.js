let box = document.getElementById('box');

for(let i = 1; i<=500; i++){
    let childbox = document.createElement('div');
    box.append(childbox);
    box.addEventListener('mousemove', () =>{
        let num = Math.round(Math.random()*500);
        childbox.style.backgroundColor = 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ')';
        childbox.innerText = num;
    })
}




