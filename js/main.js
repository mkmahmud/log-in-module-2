// Adding value 

const ldep = document.querySelector('#ldep');
const lwith = document.querySelector('#lwith');
let mainBal = document.querySelector('#mainBal');
let maiB = mainBal.value;

let newBal = 0;



const addMoney = document.querySelector('#add');

addMoney.addEventListener('click', function(){
    const addedval = document.querySelector('#addMoney').value;
    

    if(addedval > 0 && addedval < 10000){
        ldep.value = addedval;
        newBal += addedval;
        console.log(newBal)
    }
})