let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');

let reset = document.querySelector('.reset')

box1.onclick = function(){
    if(box1.checked === true)
    {
        box1.disabled= 'true';
    }
}

box2.onclick = function(){
    if(box2.checked === true)
    {
        box2.disabled= 'true';
    }
}

box3.onclick = function(){
    if(box3.checked === true)
    {
        box3.disabled= 'true';
    }
}

reset.onclick = function(){
    box1.disabled= false;
    box1.checked = false;

    box2.disabled= false;
    box2.checked = false;


    box3.disabled= false;
    box3.checked = false;
}

