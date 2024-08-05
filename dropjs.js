const dropDown=document.querySelector('#tabs');
const Hidden=document.querySelector('.hidden');
const Box1=document.querySelector('.box1');
const Box2=document.querySelector('.box2');
const Box3=document.querySelector('.box3');
Box1.classList.add('hide');
Box2.classList.add('hide');
Box3.classList.add('hide');

dropDown.addEventListener('change',() => {
    const selectedOption = dropDown.options[dropDown.selectedIndex].value;
    if(selectedOption=='shanky'){
        showShanky();
    }
    else if(selectedOption=='lamba'){
        showLamba();
    }
    // else if(selectedOption=='aman'){
    //     showAman();       
    // }
    else{
        selectedOption=='aman';
        showAman();
    }
    // else{
    //     hideAllBoxes();
    // }
})

function showShanky(){
    Box1.classList.remove('hide');
    Box2.classList.add('hide');
    Box3.classList.add('hide');
    Hidden.classList.add('hide'); 
}

function showLamba(){
    Box1.classList.add('hide');
    Box2.classList.remove('hide');
    Box3.classList.add('hide');
    Hidden.classList.add('hide'); 
}

function showAman(){
    Box1.classList.add('hide');
    Box2.classList.add('hide');
    Box3.classList.remove('hide');
    Hidden.classList.add('hide'); 
}

// function hideAllBoxes(){
//     Box1.classList.add('hide');
//     Box2.classList.add('hide');
//     Box3.classList.add('hide');  
// }