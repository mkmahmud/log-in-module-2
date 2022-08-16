// Adding value 

const ldep = document.querySelector('#ldep');
const lwith = document.querySelector('#lwith');




const addMoney = document.querySelector('#add');

addMoney.addEventListener('click', function(){
    const addedvalm = document.querySelector('#addMoney');
    const addedval = parseInt(document.querySelector('#addMoney').value);
    
    
    if(addedval > 0 && addedval < 10000){

        let mainBal = document.querySelector('#mainBal');
        let maiB = parseInt(mainBal.value);
        ldep.value = addedval;
        mainBal.value = maiB + addedval;
        addedvalm.value = ' ';
    }
});


const withdraw = document.querySelector('#withdraw');

withdraw.addEventListener('click', function(){

    const withdrawMoneym = document.querySelector('#withdrawMoney');
    const withdrawMoney = parseInt(document.querySelector('#withdrawMoney').value);

    

    let mainBal = document.querySelector('#mainBal');
    let maiB = parseInt(mainBal.value);

    if(withdrawMoney < maiB  ){
        lwith.value = withdrawMoney;
        mainBal.value = maiB - withdrawMoney;

        withdrawMoneym.value = '';
    }

})