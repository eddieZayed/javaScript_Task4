var exchangeForm = document.querySelector(".exchangeForm");

exchangeForm.onsubmit = function(e){
    e.preventDefault();

    var elements = e.target.elements;
    var amount = elements[0].value;
    var selectedCurrency = elements[1].value;

    
    var result;
    if(selectedCurrency === 'dollar'){
        result = 3.5 * amount;
    }
    else if(selectedCurrency === 'dinar'){
        result = 5 * amount;
    }
    else
    {
        result=amount;
    }

  document.querySelector(".result").textContent=`${amount} ${selectedCurrency} = ${result} NIS`;
    
}