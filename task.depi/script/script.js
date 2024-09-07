let username=document.getElementById('username');
let password=document.getElementById('password');

document.getElementById('submit').addEventListener("click",function(e){
    e.preventDefault()
   if(username.value !=='' && password.value !=='')
       {
           location.href="exam.html";
       }
else{window.alert('please enter your name and password to start yor exam')}
});


