let email = document.getElementById("email");
let pass = document.getElementById("pass");
let btn  = document.querySelector(".btn");

btn.addEventListener("click",function(){
    console.log(email.value);
    console.log(pass.value)
})
