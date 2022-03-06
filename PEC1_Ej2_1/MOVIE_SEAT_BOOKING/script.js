const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

const text = document.getElementById('text'); //nuevo

//Llamando la moneda
const currencySelect = document.getElementById('currency');

//llamado del precio de la pelicula

populateUI();


let ticketPrice = +movieSelect.value; //variable no constante


function selectionCurrency(){

    let actualCurrency = currencySelect.value;


    fetch(`https://v6.exchangerate-api.com/v6/ed4db7af990eefa738df0f61/latest/USD`)
        .then(res => res.json())      
            
        .then(data => {
                
            const rate = data.conversion_rates[actualCurrency];

            movieSelect.innerHTML = "";

            let movie1 = document.createElement('option');

            movie1.value = (10 * rate).toFixed(1); 

            movie1.innerText = `Avenger: Endgame (${movie1.value} ${actualCurrency})` 

            let movie2 = document.createElement('option');

            movie2.value = (12 * rate).toFixed(1); 

            movie2.innerText = `Joker (${movie2.value} ${actualCurrency})`            

            let movie3 = document.createElement('option');

            movie3.value = (8 * rate).toFixed(1); 

            movie3.innerText = `Toy story (${movie3.value} ${actualCurrency})`            

            let movie4 = document.createElement('option');

            movie4.value = (9 * rate).toFixed(1); 

            movie4.innerText = `The lion king (${movie4.value} ${actualCurrency})`            

            let movies = [movie1, movie2, movie3, movie4];

            movies.forEach(element => {
                movieSelect.appendChild(element);
            });
            
            updateSeletedCount();

            text.innerText = actualCurrency;


        });


}

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
    total.innerText = (selectedSeatsCount * ticketPrice).toFixed(1);
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

    selectionCurrency();
    
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

