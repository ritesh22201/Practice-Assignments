function main() {
    let counter = document.querySelector('h1');
    let inc = document.getElementById('inc');
    let dec = document.querySelector('#dec');
    let reset = document.querySelector('#reset');

    let count = 0;

    inc.addEventListener('click', () => {
        count = count + 1;
        counter.innerText = count;
    })

    dec.addEventListener('click', () => {
        count = count - 1;
        counter.innerText = count;
    })

    reset.addEventListener('click', () => {
        count = 0;
        counter.innerText = count;
    })

    counter.innerText = count;

}

main();