const input = document.getElementById('input')
const input2 = document.getElementById('input2')
let val = ""
let b = '0'




let bShow = document.querySelectorAll('.btn');
for (let i = 0; i < bShow.length; i++) {
    bShow[i].onclick = function () {
        let bal = bShow[i].textContent
            val = val + bal
            input.value = val;
            b = val
        }


}
let b2Show = document.querySelectorAll('.btn_m');
for (let i = 0; i < b2Show.length; i++) {
    b2Show[i].onclick = function () {
        let znak = b2Show[i].textContent
        val = val + " " + znak + " "
        input.value = val
        b = val


    }
}

const x = document.getElementById('rovno');
x.onclick = function() {
    try {
        if (b === '0' ){
            input.value = '0';
            input2.value = '0';
            b = input.value

        }
        else {
            b = input.value
            input.value = eval(b);
            input2.value = b + " = " + eval(b)
        }
    }catch (err){
        b = 0
        input.value = eval(b);
        input2.value = `ERROR`
    }

    val = eval(b)



};

const c = document.getElementById('btn_c');
c.onclick = function() {
    val = ''
    b = ''
    input.value = val
};
