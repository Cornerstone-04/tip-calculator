const foodPrice = document.querySelector('.price');
const foodTip = document.querySelector('.tip');
const numOfPeople = document.querySelector('.Num');
const clearAll = document.querySelector('.clearBtn');

function Calc(){
    let tip = (foodPrice.valueAsNumber) * (foodTip.value / 100);
    let totalAmount = (foodPrice.valueAsNumber) + (tip);
    let tipPerPerson = tip / numOfPeople.value;
    let totalPerPerson = totalAmount / numOfPeople.value;
   
    
    if (foodPrice.valueAsNumber=="" || foodTip.value=="" || numOfPeople.value=="") {
            document.querySelector('h2').textContent = "Please input all fields correctly.";
            document.querySelector('h2').style.textAlign = "center";
      } else{
            document.querySelector('.par1').innerHTML = "Tip:";
            document.querySelector('.par5').innerHTML = "$" + tip;

            document.querySelector('.par2').innerHTML = "Total Amount:";
            document.querySelector('.par6').innerHTML = "$" + totalAmount;

            document.querySelector('.par3').innerHTML = "Tip Per Person:";
            document.querySelector('.par7').innerHTML = "$" + tipPerPerson;

            document.querySelector('.par4').innerHTML = "Total Per Person:";
            document.querySelector('.par8').innerHTML = "$" + totalPerPerson;

            document.querySelector('h2').innerHTML = "RESULT";
            document.querySelector('h2').style.backgroundColor = "#518428";
            document.querySelector('h2').style.color = "#ffffff";
            document.querySelector('h2').style.padding = "10px";
      }
}

let inputs = document.querySelectorAll('input');

clearAll.addEventListener('click', () =>{
    inputs.forEach(input => input.value = '');

    document.querySelector('h2').innerHTML = '';
    document.querySelector('h2').style = '';

    document.querySelector('.par1').innerHTML = '';
    document.querySelector('.par5').innerHTML = '';

    document.querySelector('.par2').innerHTML = '';
    document.querySelector('.par6').innerHTML = '';

    document.querySelector('.par3').innerHTML = '';
    document.querySelector('.par7').innerHTML = '';
    
    document.querySelector('.par4').innerHTML = '';
    document.querySelector('.par8').innerHTML = '';
});