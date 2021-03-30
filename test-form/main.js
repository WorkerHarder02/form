let f_i = document.querySelector('.input_first');
let s_i = document.querySelector('.input_second')
let select = document.querySelector(".select")
let label = document.querySelector('#label')
let check = document.querySelector("#check");
let gt1 = document.querySelector('.green_tick_1');
let gt2 = document.querySelector('.green_tick_2')
let frm = document.querySelector('#frm')
let next = document.querySelector('#next');
let t_s = document.querySelector('.total_sum');
let widthFence = document.querySelector('.input_first')
let heightFence = document.querySelector('.input_second');




f_i.oninput = function () {
    s_i.disabled = false;
    gt1.classList.add('green')


}
s_i.oninput = function () {
    select.disabled = false;
    gt2.classList.add('green')
}
let d

select.onchange = function () {



    d = ((heightFence.value * widthFence.value) * select.value);
    t_s.textContent = d;
}
let max = ((heightFence.value + widthFence.value) * select.value)
check.onchange = function () {
    hv = heightFence.value;
    wv = widthFence.value;
    next.classList.add('next_active')
    next.disabled = false
    localStorage.setItem("totalSum", JSON.stringify(d));
    localStorage.setItem('hv', JSON.stringify(hv));
    localStorage.setItem("wv", JSON.stringify(wv));
   
}
next.onmouseover = function () {
    next.classList.remove('next_active');
    next.classList.add('next_hover')

}
next.onmouseout = function () {
    next.classList.remove('next_hover');

    next.classList.add('next_active')
}
next.onmousedown = function () {
    next.classList.remove('next_active');
    next.classList.remove('next_hover');
    next.classList.add('next_pressed');
}

