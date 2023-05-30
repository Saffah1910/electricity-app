//this function should allow the user to select an amount of money and buy a certain amount of units
//in the function topUpElectricity i will have conditional statements that will add the amount of units to the var unitsAvailable depending and how much money is selected
//useAppliance function will deduct units from the counter depending on what appliance is selected(use conditional statemnts)
//if the user selcts an advance it will add 21 units and the amount must add to counter which we return in advanceTaken function
//totalAmountSpent function will add all the money used and return the amount so i must create a variable that will count all the money
//totalUnitsBought should return the counter for the amount of units available.

function Electricity() {

    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10,
        'Kettle': 5,
        'TV': 3,
        'Fridge': 13
    };
    var totalMoney = 0;
    var unitsAvailable = 0;
    var unitsBought = 0;
    let taken = false;


    function topUpElectricity(amount) {

        if (amount === 10) {
            unitsAvailable += 7;
            totalMoney += 10;
            unitsBought += 7;
        };
        if (amount === 20) {
            unitsAvailable += 14;
            totalMoney += 20;
            unitsBought += 14;
        };
        if (amount === 50) {
            unitsAvailable += 35;
            totalMoney += 50;
            unitsBought += 35;
        };
        //if the user selects advance then then it should add 21 to the units
        if (amount === 'advance' && taken === false) {

            unitsAvailable += 21;

            totalMoney - 30;
            unitsBought += 21;
            taken = true
        }

    }

    function getUnitsAvailable() {
        return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {

        if (unitsAvailable >= 10 && appliance === "Stove") {
            unitsAvailable -= 10;
            return true

        }
        if (unitsAvailable >= 5 && appliance === "Kettle") {
            unitsAvailable -= 5;
            return true
        }
        if (unitsAvailable >= 3 && appliance === "TV") {
            unitsAvailable -= 3;
            return true;
        }
        if (unitsAvailable >= 13 && appliance === "Fridge") {
            unitsAvailable -= 13;
            return true
        }
        else {
            return false
        }
    }
    function advanceTaken() {
        if (taken === true) {
            return true

        }
        else {
            return false
        }

    }

    function totalAmountSpent() {
        return totalMoney

    }

    function totalUnitsBought() {
        return unitsBought
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
}