let name = document.querySelector('.your_name')
let orderNumber = document.querySelector('.order_number')
let totalEmail = document.querySelector(".total_email")
let totalPhone = document.querySelector('.total_phone')
let close = document.querySelector('.close');
close.onclick = function () {
    window.location.href = "index.html";
}
let YourName = localStorage.getItem('name');
YourName = JSON.parse(YourName);
name.textContent = YourName;
let YourNumber = localStorage.getItem('')

let TotalEmail = localStorage.getItem('email');
TotalEmail = JSON.parse(TotalEmail);
console.log(typeof TotalEmail)
totalEmail.textContent = TotalEmail;

let TotalPhone = localStorage.getItem('phone');
TotaPhone = JSON.parse(TotalPhone);

totalPhone.textContent = TotalPhone;
