const wrapper=document.querySelector('.wrapper');
generatebtn=document.querySelector('.form button');
qrinput=document.querySelector(".form input");
qrimg=document.querySelector(".qr-code img");
generatebtn.addEventListener("click",()=>{
let qrvalue=qrinput.value;
if(!qrvalue) return;
qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
wrapper.classList.add("active");
});