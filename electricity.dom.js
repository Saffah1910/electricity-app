// DOM element(s) references
let topupRadioBtn = document.querySelector(".topup");
let advanceRadioBtn = document.querySelector(".advance");
let topUpbtn = document.querySelector(".topupNow");
let unitsAvailable = document.querySelector(".unitsAvailable");
let totalUnits = document.querySelector(".totalUnits");
let totalAmount = document.querySelector(".totalAmount");
let advanceTaken = document.querySelector(".advanceTaken");
let usage = document.querySelector(".usage");
let applianceBtn = document.querySelector(".useNow");
// Factory Function instance 
const electricity = Electricity();
// DOM events here 

topUpbtn.addEventListener("click", function () {
//alert("hi")
   // var checkedRadioBtn = document.querySelector("input[name='buyElectricity']:checked");

        electricity.topUpElectricity(topupRadioBtn.value);

        unitsAvailable.innerHTML = electricity.getUnitsAvailable();
  
});
