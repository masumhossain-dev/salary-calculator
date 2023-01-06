function amounts (fieldId){
   const valueField = document.getElementById(fieldId).value;
   const valueConvert = parseInt(valueField);
   return valueConvert;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
   // total income 
   const totalIncome = amounts('income-field')
   const foodCost = amounts('food-cost')
   const rentCost = amounts('rent-cost')
   const clothsCost = amounts('cloths-cost')


   const totalCost = foodCost + rentCost + clothsCost;
   const totalExpenses = document.getElementById('total-expenses');
   totalExpenses.innerText = totalCost;

   const balance = totalIncome - totalCost;
   const currentBalance = document.getElementById('current-balance');
   currentBalance.innerText = balance;
})

document.getElementById('savings-btn').addEventListener('click', function(){
   const currentBalance = document.getElementById('current-balance').innerText;
   const balance = parseInt(currentBalance);

   const savePercentage = amounts("savings-amount-field");

   const savingsCalculate = (balance/100)*savePercentage;

   document.getElementById('saving-amount').innerText = savingsCalculate;

   const remainingBalance = Math.round(balance - savingsCalculate);

   document.getElementById('remaining-balance').innerText = remainingBalance;
   
})
  
