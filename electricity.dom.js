//// DOM element(s) references
//let topupRadioBtn = document.querySelector(".topup");
//let advanceRadioBtn = document.querySelector(".advance");
let topUpbtn = document.querySelector(".topupNow");
let unitsAvailable = document.querySelector(".unitsAvailable");
let totalUnits = document.querySelector(".totalUnits");
let totalAmount = document.querySelector(".totalAmount");
let advanceTaken = document.querySelector(".advanceTaken");
let usage = document.querySelector(".usage");
let applianceBtn = document.querySelector(".useNow");
// Factory Function instance 
const electricity = Electricity();

// if (!localStorage["money"] && !localStorage["units"] && !localStorage["bought"]) {
//     localStorage["money"] = electricity.totalAmountSpent();
//     localStorage["units"] = electricity.getUnitsAvailable();
//     localStorage["bought"] = electricity.totalUnitsBought();

// }

// if (localStorage["money"] && localStorage["units"] && localStorage["bought"]) {
//     electricity.storage();
//     totalAmount.innerHTML = localStorage["money"];
//     unitsAvailable.innerHTML = localStorage["units"];
//     totalUnits.innerHTML = localStorage["bought"]
// }
// DOM events here 

topUpbtn.addEventListener("click", function () {
    //alert("hi")
    var topupRadioBtn = document.querySelector("input[name='buyElectricity']:checked");

    //console.log(topupRadioBtn.value);
    electricity.topUpElectricity(topupRadioBtn.value);
    //  console.log(topupRadioBtn.value);
    unitsAvailable.innerHTML = electricity.getUnitsAvailable();

    totalUnits.innerHTML = electricity.totalUnitsBought();
    totalAmount.innerHTML = electricity.totalAmountSpent();


    var advanceRadioBtn = document.querySelector("input[value='advance']:checked");
    electricity.topUpElectricity(advanceRadioBtn);
    totalAmount.innerHTML = electricity.totalAmountSpent();



});
applianceBtn.addEventListener("click", function () {
    //   alert("hi");
    var usage = document.querySelector("input[name='useElectricity']:checked");

    electricity.useAppliance(usage.value);
    unitsAvailable.innerHTML = electricity.getUnitsAvailable();
    totalUnits.innerHTML = electricity.totalUnitsBought();



});

