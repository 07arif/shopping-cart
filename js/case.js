/*
1.add eventlistner to the case plus button
2.get the value inside the case number field (input field)
3.convert the new case number 
4.caculate the new case number
5.set the value to the case number field
*/

function updateCaseNumber(isIncrease) {

    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;

    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}


function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('case-btn-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);
});

document.getElementById('case-number-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(newCaseNumber);
})