// var register = JSON.parse(localStorage.getItem("usercreds"));
// console.log(register);

// document.querySelector("#form").addEventListener("submit", checkuser);
// var form = document.querySelector("#form");
// function checkuser(){
// event.preventDefault();

// console.log(form.email.value);

// var email = form.email.value ;
// var pass = form.pass.value ;

// var find = false ;

// for(var i=0; i<register.length; i++){
//     if(register[i].email == email && register[i].pass == pass){
//         find = true ;
//         break;
//     }
// }
// if(find == true){
//     alert("Congratulation! Sign-In Successful");
//     window.location.href= "index.html"
// }
// else{
//     alert("Login Failed");
// }
// }


document.querySelector("#form").addEventListener("submit", signupfun);
var primedata = JSON.parse(localStorage.getItem("usercreds"))|| []
function signupfun(){
    event.preventDefault();
    var name = document.querySelector("#name").value ;
    var email = document.querySelector("#email").value ;
    var pass = document.querySelector("#pass").value ;
    var repass = document.querySelector("#repass").value ;

   var storeobj ={
       name : name,
       email : email,
       pass : pass,
       repass : repass,
   }
    
  


   primedata.push(storeobj);
   localStorage.setItem("usercreds", JSON.stringify(primedata));


}//    console.log(primeobj);
document.querySelector("#submit5").addEventListener("click", function(){
    alert("Congrats! Your Account Created Succesfully");
    window.location.href = "signin.html";
});



















