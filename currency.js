document.addEventListener('DOMContentLoaded' , function(){
    document.querySelector('button').onclick = function(){
    fetch('https://open.er-api.com/v6/latest/USD')
    .then (response => response.json())
            .then (data => {
                var currency = document.getElementById("text1").value.toUpperCase();
                var rate = data.rates[currency];
                if(rate !== undefined)
                {
                document.getElementById("output").textContent = `1 USD is equal to ${rate.toFixed(3)}`;
                }else{
                    document.getElementById("output").textContent = "Invalid input";
                }
                return false;
            });
               
            };
           

});
