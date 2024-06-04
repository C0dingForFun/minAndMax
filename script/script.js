let numbers = document.querySelector('input')
let button = document.querySelector('button');
let min = document.querySelectorAll('span')[0];
let max = document.querySelectorAll('span')[1];

button.addEventListener('click', ()=>{

    let num = numbers.value.split(',');
    min.innerText = Math.min(...num);
    max.innerText = Math.max(...num);

})