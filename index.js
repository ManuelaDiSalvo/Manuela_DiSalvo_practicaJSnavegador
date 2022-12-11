var products = new Object;
var expenses = 0;
var totalbudget = 0;
var balance = 0;


function setTotalBudget(){
  totalbudget = document.getElementById("total-amount").value;
  balance = totalbudget;
  document.getElementById("amount").innerHTML = totalbudget;
  document.getElementById("balance-amount").innerHTML = balance;
}

function insert(){
  var ctg =  document.getElementById("category-title").value;
  var amt =  document.getElementById("user-amount").value;
  products[ctg]=amt;
  expenses = expenses + parseInt(amt);
  balance = balance - parseInt(amt);
  print();
  ;
}

function del(name){
  var temp = new Object;
  for(var key in products)
  {
      if(key !== name) temp[key] = products[key];
      else {
        expenses = expenses-parseInt(products[key]);
        balance = totalbudget - expenses;
      }
    }
  products = temp;
  document.getElementById(name).remove();
  document.getElementById("expenditure-value").innerHTML = expenses;
  window.alert("Ho rimosso "+name+" con successo");
  document.getElementById("amount").innerHTML = totalbudget;
  document.getElementById("balance-amount").innerHTML = balance;
}

function print()
{
  var html = '';
    for(var key in products){
    var value = products[key];
    html += '<span id="'+key+'">' +key+' - '+value+'€ '+' <input type="button" value="delete" class="submit"  onclick="del(\'' + key + '\')"></span> </br>';
 }
  document.getElementById("list").innerHTML = html;
  document.getElementById("expenditure-value").innerHTML = expenses;
  document.getElementById("amount").innerHTML = totalbudget;
  document.getElementById("balance-amount").innerHTML = balance;
}