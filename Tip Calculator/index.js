const billInput = document.getElementById("bill");

const tipInput = document.getElementById("tip");

const btnEl = document.getElementById("calculate");

const totalResult = document.getElementById("total");

const calculateTotal = () =>{
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const total = billValue * (1+tipValue/100)

    totalResult.innerText = total.toFixed(2);
};

btnEl.addEventListener("click",calculateTotal);