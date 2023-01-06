document.getElementById('calculate-btn').addEventListener('click', function(){
   const incomeField = document.getElementById('income-field');
   const incomeFieldValue = incomeField.value;
   const incomeFieldValueStr = parseInt(incomeFieldValue);

   const foodCost = document.getElementById('food-cost');
   const foodCostValue = foodCost.value;
   const foodCostValueStr = parseInt(foodCostValue);


   const rentCost = document.getElementById('rent-cost');
   const rentCostValue = rentCost.value;
   const rentCostValueStr = parseInt(rentCostValue);
   
   
   const clothsCost = document.getElementById('cloths-cost');
   const clothsCostValue = clothsCost.value;
   const clothsCostValueStr = parseInt(clothsCostValue);

   const totalCost = foodCostValueStr + rentCostValueStr + clothsCostValueStr;
   const totalExpenses = document.getElementById('total-expenses');
   totalExpenses.innerText = totalCost;

   var balance = incomeFieldValueStr - totalCost;
   const currentBalance = document.getElementById('current-balance');
   currentBalance.innerText = balance;
})

document.getElementById('savings-btn').addEventListener('click', function(){
   const percent = document.getElementById("savings-amount-field").value;
   const percentStr = parseInt(percent);

   const savingsCalculate = (balance/100)*percentStr;
     
   document.getElementById("value1").value = (num / 100) * percent;
})
  
