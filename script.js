// Enter Budget

//let weeklyBudget;
//let newbudget;

document.querySelector("#budget").addEventListener("click", saveBudget);

let weeklyInput = document.querySelector("#newbudget");
let updateWeeklyBudget = document.querySelector("#Weekly-Budget");

let weeklyBudget = 0;

function saveBudget(e)
{
    e.preventDefault();
    //console.log("having fun");
    weeklyBudget = weeklyInput.value;
    console.log(weeklyBudget);
    updateWeeklyBudget.innerText = "$ " + weeklyBudget;
}

document.querySelector("#purchase").addEventListener("click", purchases);

let purchaseName = document.querySelector("#name");
let purchaseDescription = document.querySelector("#description");
let purchasePrice = document.querySelector("#amount");
let purchaseDate = document.querySelector("#date");
let purchaseCategory = document.querySelector("#category");
let purchaseList = document.querySelector("#purchase-list"); 

// Charissa will work on completing this function
function purchases(e){
    e.preventDefault();
    let addPurchase = {
        purchase: purchaseName.value,
        description: purchaseDescription.value,
        amount: purchasePrice.value,
        date: purchaseDate.value,
        category: purchaseCategory.value,
    };
    let addNewPurchase = document.createElement('p'); 
    addNewPurchase.innerText = addPurchase.purchase + ' : $' + addPurchase.amount + " " + addPurchase.date; 
    purchaseList.append(addNewPurchase);
   console.log(addNewPurchase); 

    
}


// Liz will complete the update balance function

// Ashley will start research on the progress bar

// Asia will work on the category table