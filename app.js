// import functions and grab DOM elements
import { add, subt, mult, div } from'./calculations.js';





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

const addButton = document.getElementById('compute');
const subButton = document.getElementById('computes');
const mulButton = document.getElementById('computm');
const divButton = document.getElementById('computd');
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