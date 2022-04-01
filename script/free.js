document.querySelector("form").addEventListener("submit", paidfun);
var paidarr = JSON.parse(localStorage.getItem("paidlocal")) || [];
function paidfun(){
    event.preventDefault();
    var name = document.querySelector("#name").value ;
    var number = document.querySelector("#number").value ;
    var select = document.querySelector(".s").value ;

    var paidobj = {
        name : name,
        number : number,
        select : s ,
    };
    paidarr.push(paidobj);
    // console.log(paidarr)
    localStorage.s("paidlocal", JSON.stringify("paidarr"));

}
document.querySelector(".add").addEventListener("click", function(){
    alert("Payment Successful");
    // window.location.href= "complete.html";
})

function myfunction(){
    alert("Let's Enjoy Amazon Prime Video")
    window.location.href= "complete.html";
}