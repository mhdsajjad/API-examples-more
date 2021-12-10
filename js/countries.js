// const loadCountries = () => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then (res => res.json())
//     .then (data => displayCountries(data) )
// }

// loadCountries()


// const displayCountries = countries => {
//     // const CountriseDiv = document.getElementById('countries');
//     // for (const country of countries) {
//     //     console.log(country.name);
//     //     const li = document.createElement('li')
//     //     li.innerText =`$('country')`;
//     //     CountriseDiv.appendChild(li);
//     // }
//     const CountriseDiv = document.getElementById('countries');
//     countries.forEach(country => {
//         console.log(country);
//         const h2 = document.createElement('h2');
//         h2.innerText = country.name;
//         CountriseDiv.appendChild(h2);
//     });
// }

const loadCountries = () =>{
    fetch('https://restcountries.com/v2/all')
    .then (res => res.json())
    .then(data => displayCountries(data));
}

loadCountries ()
const displayCountries = countries => {
    // console.log(countries);
    // for (const country of countries){
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h2>${country.name}</h2>
            <h3>${country.capital} </h3>
            <h4>${country.region}</h4>
            <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div);
        

    });
}

const loadCountryByName = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then (res => res.json())
    .then (data => displayCountriesDetail(data[0]));
}

const displayCountriesDetail = country =>{
    // console.log(country)
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h2>${country.name.common}</h2>
    <h4>${country.region}</h4>
    <p>population: ${country.population}</p>
    <img src="${country.flags.png}">
    `;
}