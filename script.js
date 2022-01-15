'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data) {
  const html = `
  <article class="country">
  <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
            <p class="country__row"><span>💰</span>${data.currencies.name}</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// let getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     //   console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     //Get the country neighbourhood
//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     //azax for country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       // console.log(this.responseText);
//       //because here what we found is not array because we search by code nd code for country is very unique so we use data2 in place of [data2]
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2);
//     });
//   });
// };
// getCountryData('india');
// getCountryData('portugal');
// getCountryData('portugal');
// getCountryData('portugal');
// getCountryData('portugal');
// getCountryData('portugal');
// getCountryData('usa');

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.com/v3.1/name/india`);
// console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};
getCountryData('india');
