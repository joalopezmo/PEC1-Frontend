const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

//Llamando la moneda
const currencySelect = document.getElementById('currency');

//llamado del precio de la pelicula
let targetPrice = document.getElementById("movie").getElementsByClassName("moviePrice");


populateUI();


let ticketPrice = +movieSelect.value; //variable no constante
/*
let actualCurrency = currencySelect.value;

console.log(actualCurrency);

/*
function selectionCurrency(){

    //revisar currency

    fetch(`https://v6.exchangerate-api.com/v6/ed4db7af990eefa738df0f61/latest/${actualCurrency}`)
        .then(res => res.json())      
            
        .then(data => {
                
            const rate = data.conversion_rates['USD'];
            console.log(rate);
           //rateEl.innerText =`1 ${currency_one} = ${rate} ${currency_two}`;

           let ChangePrice = (ticketPrice * rate).toFixed(2);

           targetPrice.innerText = ChangePrice;

           ticketPrice = targetPrice;
            
            
        });






}*/

function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSeletedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected'); //espacio separado de la clase para hacer distincion entre elementos hijos y padres

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat, index) =>{
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');

            }
        });
    };

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null){
        movieSelect.selectedIndex = selectedMovieIndex;

    }

}

currencySelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value; //agregarle el mas es como si hicieramos el parse int, para convertir el valor interno de la variable en numero
    setMovieData(e.target.selectedIndex, e.target.value);
   
    updateSeletedCount();

})


movieSelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value; //agregarle el mas es como si hicieramos el parse int, para convertir el valor interno de la variable en numero
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSeletedCount();
})


container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat')  && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected');

        updateSeletedCount();
    };
} )


updateSeletedCount();

