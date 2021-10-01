// import functions and grab DOM elements
import { add, subt, mult, div, pyth, int, mod } from './calculations.js';





const input1 = document.getElementById('firstInput');
const input2 = document.getElementById('secondInput');
const button = document.getElementById('compute');
const answeradd = document.getElementById('answerAdd');
const input1s = document.getElementById('firstInputs');
const input2s = document.getElementById('secondInputs');
const buttons = document.getElementById('computes');
const answersub = document.getElementById('answerSub');
const input1m = document.getElementById('firstInputm');
const input2m = document.getElementById('secondInputm');
const buttonm = document.getElementById('computem');
const answermult = document.getElementById('answerMul');
const input1d = document.getElementById('firstInputd');
const input2d = document.getElementById('secondInputd');
const buttond = document.getElementById('computed');
const answerdiv = document.getElementById('answerDiv');
const input1p = document.getElementById('firstInputp');
const input2p = document.getElementById('secondInputp');
const buttonp = document.getElementById('computep');
const answerpyt = document.getElementById('answerPyt');
const input1i = document.getElementById('firstInputi');
const input2i = document.getElementById('secondInputi');
const buttoni = document.getElementById('computei');
const answerint = document.getElementById('answerInt');
const input1mo = document.getElementById('firstInputmo');
const input2mo = document.getElementById('secondInputmo');
const buttonmo = document.getElementById('computemo');
const answermod = document.getElementById('answerMod');








//console.log(input2, input1, button, answeradd)
button.addEventListener ('click', ()=>{
    //let final = (input1 + input2);
    //answeradd.numberContent = final;
    //function addinputs(input1)
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const result = add(value1, value2);
  answeradd.textContent = result;

});

buttons.addEventListener('click', ()=> {

  const value1s = Number(input1s.value);
  const value2s = Number(input2s.value);
  const results = subt(value1s, value2s);
  answersub.textContent = results;
});
buttonm.addEventListener('click', ()=> {

  const value1m = Number(input1m.value);
  const value2m = Number(input2m.value);
  const resultm = mult(value1m, value2m);
  answermult.textContent = resultm;
})
buttond.addEventListener('click', ()=> {

  const value1d = Number(input1d.value);
  const value2d = Number(input2d.value);
  const resultd = div(value1d, value2d);
  answerdiv.textContent = resultd;
})
buttoni.addEventListener('click', ()=> {

  const value1i = Number(input1i.value);
  const value2i = Number(input2i.value);
  const resulti = int(value1i, value2i);
  answerint.textContent = resulti;
})


buttonp.addEventListener('click', ()=> {

  const value1p = Number(input1p.value);
  const value2p = Number(input2p.value);
  const resultp = pyth(value1p, value2p);
  answerpyt.textContent = resultp;
})
buttonmo.addEventListener('click', ()=> {

  const value1mo = Number(input1mo.value);
  const value2mo = Number(input2mo.value);
  const resultmo = mod(value1mo, value2mo);
  answermod.textContent = resultmo;
})




const addButton = document.getElementById('compute');
const subButton = document.getElementById('computes');
const mulButton = document.getElementById('computem');
const divButton = document.getElementById('computed');
const pythButton = document.getElementById('computep');
const intButton = document.getElementById('computei');
const modButton = document.getElementById('computemo');

const noise = document.getElementById('rick-rolled');





addButton.addEventListener('click', ()=> {

    noise.play()


})
subButton.addEventListener('click', ()=> {

  noise.play()


})
mulButton.addEventListener('click', ()=> {

  noise.play()


})
divButton.addEventListener('click', ()=> {

  noise.play()


})
modButton.addEventListener('click', ()=> {

  noise.play()


})
pythButton.addEventListener('click', ()=> {

  noise.play()


})
intButton.addEventListener('click', ()=> {

  noise.play()


})
