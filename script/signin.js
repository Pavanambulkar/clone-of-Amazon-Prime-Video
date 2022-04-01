var register = JSON.parse(localStorage.getItem("usercreds"));
console.log(register);

document.querySelector("#form").addEventListener("submit", checkuser);
var form = document.querySelector("#form");
function checkuser(){
event.preventDefault();

console.log(form.email.value);

var email = form.email.value ;
var pass = form.pass.value ;

var find = false ;

for(var i=0; i<register.length; i++){
    if(register[i].email == email && register[i].pass == pass){
        find = true ;
        break;
    }
}
if(find == true){
    alert("Congratulation! Sign-In Successful");
    window.location.href= "complete.html"
}
else{
    alert("Login Failed");
}
}