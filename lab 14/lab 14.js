'use strict'
const renderCountry = function(data) {
    const html = `
      <article class="country">
         <img class="country__img" src="${data.flag}" />
         <div class="country__data">
           <h3 class="country__name">${data.name}</h3>
         <h4 class="country__region">${data.region}</h4>
           <p class="country__row"><span>👫</span>${(
             +data.population / 1000000
           ).toFixed(1)} people</p>
           <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
           <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
         </div>
       </article>
       `;
         countriesContainer.insertAdjacentHTML('beforeend', html);
         countriesContainer.style.opacity = 1;
       };
  
function whereAmI(Lat, Lng) {
    fetch(`https://geocode.xyz/${Lat},${Lng}?geoit=json`)
    

    .then(function(response) {
        console.log(response);
    if(!response.ok) throw new Error(`Error code : ${response.status}`);
    return response.json();
})

.then(function(data) {
    console.log(data);
    console.log(`You are in ${data.city}, ${data.country} `);
    return fetch(`https://restcountries.com/v2/name/${data.country}`)
})
.then(function(response) {
  if(!response.ok) throw new Error(`Error code : ${response.status}`)
})
.then(function(data) {
  renderCountry(data[0])
})
.catch((err) => console.log(`ERROR: ${err.message}`))
console,log(whereAmI)
}
