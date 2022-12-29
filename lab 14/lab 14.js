"use strict";
// const renderCountry = function (data) {
//   const html = `
//       <article class="country">
//          <img class="country__img" src="${data.flag}" />
//          <div class="country__data">
//            <h3 class="country__name">${data.name}</h3>
//          <h4 class="country__region">${data.region}</h4>
//            <p class="country__row"><span>👫</span>${(
//              +data.population / 1000000
//            ).toFixed(1)} people</p>
//            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//          </div>
//        </article>
//        `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// function whereAmI(Lat, Lng) {
//   fetch(`https://geocode.xyz/${Lat},${Lng}?geoit=json`)
//     .then(res => {
//       console.log(response); // response nhận dữ liệu phản hồi
//       if (!res.ok) throw new Error(`Error code : ${res.status}`);
//       console.log(response);
//       return res.json();
//     })

//     .then(function (data) {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country} `);
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(function (response) {
//       if (!response.ok) throw new Error(`Error code : ${response.status}`);
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//     })
//     .catch((err) => console.log(`ERROR: ${err.message}`));
// }
// whereAmI(52.508, 13.381);

// console.log(Lat, Lng);

// const renderCountry = function (data) {
//   console.log(data);
//   const html = `
//     <article class="country">
//        <img class="country__img" src="${data.flag}" />
//        <div class="country__data">
//          <h3 class="country__name">${data.name}</h3>
//        <h4 class="country__region">${data.region}</h4>
//          <p class="country__row"><span>👫</span>${(
//            +data.population / 1000000
//          ).toFixed(1)} people</p>
//          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//        </div>
//      </article>
//      `;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   console.log(country);
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}, true`);
//   console.log(request.open);
//   request.send();
//   console.log(request.send);
//   console.log(request);
//   request.addEventListener("load", function () {
//     const [data] = request.responseText;
//     console.log(JSON.parse(request.responseText).country);
//     // const [data] = JSON.parse(this.responseText);
//     // console.log(data);

//     // Render country 1
//     renderCountry(data);
//     // Get neighbour country (2)
//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//   });
// };

// getCountryAndNeighbour("portugal");

const whereAmI = function (lat, lng) {
  fetch(
    `https://geocode.xyz/${lat},${lng}?json=1&auth=618859930786815785719x2774`
  )
    .then((res) => {
      console.log(res);
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      console.log(data.country);
      return fetch(
        `https://restcountries.eu/rest/v2/name/${data.country}618859930786815785719x2774`
      );
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then((data) => console.log(data)) //renderCountry(data[0]))
    .catch((err) => console.error(`${err.message} 💥`));
};
whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
const renderCountry = function (data) {
  const html = `
        <article class="country">
           <img class="country__img" src="${data.flag}" />
           <div class="country__data">
             <h3 class="country__name">${data.name}</h3>
           <h4 class="country__region">${data.region}</h4>
             <p class="country__row"><span>👫</span>${(
               +data.population / 1000000
             ).toFixed(1)} people</p>
             <p class="country__row"><span>🗣️</span>${
               data.languages[0].name
             }</p>
             <p class="country__row"><span>💰</span>${
               data.currencies[0].name
             }</p>
           </div>
         </article>
         `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
