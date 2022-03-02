const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

const loader = document.querySelector("#loading"); // codigo nuevo

// fetch exchange rate and update the dom

function calculate(){

    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

   
    displayLoading(); // ingresar a la funcion que llama la animacion

    fetch(`https://v6.exchangerate-api.com/v6/ed4db7af990eefa738df0f61/latest/${currency_one}`)
        .then(res => {
            
            if(res.status >= 400 || res == null){
                return res.json()
                    .catch(errResData => {
                        const error = new Error('something went wrong')
                        error.data = errResData
                        throw error;
                    })
            }
            return res.json();})
        
            
        .then(data => {
                
            const rate = data.conversion_rates[currency_two];
                //console.log(rate);
            rateEl.innerText =`1 ${currency_one} = ${rate} ${currency_two}`;

            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
            hideLoading(); //finaliza la animacion una vez se hizo el llamado
        });

    
    //console.log(currency_one, currency_two);

}

//Event listeners

currencyEl_one.addEventListener('change',calculate );
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate );
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})

calculate();

// showing loading
function displayLoading() {
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 10000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
}
