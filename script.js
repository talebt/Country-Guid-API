let searchBtn = document.getElementById("search-btn");
let country = document .getElementById("country");
searchBtn.addEventListener("click", ()=>{
    let countryName= country.value;

    let finalURL= `https://restcountries.com/v3.1/name/${country}?fullText=true
    `;
    console.log(finalURL);

})