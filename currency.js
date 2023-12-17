document.addEventListener('DOMContentLoaded' , function(){
    document.querySelector('form').onsubmit = function(){
    fetch('https://open.er-api.com/v6/latest/USD')
    .then (response => response.json())
            .then (data => {
               
                const currency = document.querySelector("#text1").value.toUpperCase();
                const rate = data.rates[currency];
                if(rate !== undefined)
                {
                document.querySelector("#output").innerHTML = `1 USD is equal to ${rate.toFixed(3)}`;
                }else{
                    document.querySelector("#output").innerHTML = "Invalid input";
                }
                return false;
            });
               
            };
           

});
