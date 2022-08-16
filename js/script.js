// Geting Value 
const login = document.querySelector('#login');


login.addEventListener('click', function(){
    
const email = document.querySelector('#email').value;
const pass = document.querySelector('#pass').value;

if(email === 'mk@gmail.com' && pass === '9090'){
    window.location.href = 'main.html';
}else{
   alert('Please Type correct information');
}

});

