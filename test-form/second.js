let back = document.querySelector('.back');
let totalSum = document.querySelector('.total_sum');
let tw = document.querySelector('.total_width');
let th = document.querySelector('.total_height')
let f_i = document.querySelector(".name_input")
let s_i = document.querySelector(".email_input")
let t_i = document.querySelector(".telephone_input")
let btn = document.querySelector('.info_submit');

f_i.oninput = function () {
    s_i.disabled = false;
}
s_i.oninput = function () {
    t_i.disabled = false;
}
t_i.oninput = function () {
    btn.disabled = false;
    btn.classList.add('btn_active')
    fv = f_i.value;
    sv = s_i.value;
    tv = t_i.value;
    localStorage.setItem('name', JSON.stringify(fv));
    localStorage.setItem('email', JSON.stringify(sv));
    localStorage.setItem('phone', JSON.stringify(tv));

}







btn.onmouseover = function () {
    btn.classList.remove('btn_active');
    btn.classList.add('btn_hover')
}
btn.onmouseout = function () {
    btn.classList.remove('btn_hover');
    btn.classList.remove('btn_pressed')
    btn.classList.add('btn_active');
}
btn.onmousedown = function () {
    btn.classList.remove('btn_active');
    btn.classList.remove("btn_hover");
    btn.classList.add('btn_pressed')
}
btn.onmouseup = function () {
    btn.classList.remove("btn_pressed")
    btn.classList.remove("btn_hover");
    btn.classList.add('btn_active')
}
back.onclick = function () {
    window.location.href = "index.html";
}

let Sum = localStorage.getItem('totalSum');
Sum = JSON.parse(Sum);
totalSum.textContent = Sum;
let widthFence = localStorage.getItem('wv')
widthFence = JSON.parse(widthFence);
tw.textContent = widthFence;
let heightFence = localStorage.getItem('hv')
heightFence = JSON.parse(heightFence);
tw.textContent = heightFence;