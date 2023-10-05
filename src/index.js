// Code here
/* function apiClient(){
    const API_BASE_URL = "http://localhost:9090";
    const headers = {
        "Content-Type": "application/json"
    }

    const handleResonse = response => {
        if(response.status === 200){
            return response.json();
        }
        throw new Error(response.statusText);
    }
    
    return {
        get(path){
            console.log(`${API_BASE_URL}${path}`)
             return fetch(`${API_BASE_URL}${path}`, {headers}).then(handleResonse);
        },

        post(path, body){
            return fetch(`${API_BASE_URL}${path}`, {
                method: "POST",
                body: JSON.parse(body),
                headers
            }).then(handleResonse);
        },

        patch(path, body){
            return fetch(`${API_BASE_URL}${path}`, {
                method: "PATCH",
                body: JSON.parse(body),
                headers
            }).then(handleResonse);
        },

        delete(path){
            return fetch(`${API_BASE_URL}${path}`, {
                method: "DELETE".
                headers
            }).then(handleResonse);
        }
    }
} */

import apiCLient from "./apiCLient.js";

function beerListItem(beer){
    return `<li data-id="${beer.id}">${beer.name}</li>`;
}

function selectBeer(beer){
    document.querySelector('#beer-name').innerHTML = beer.name;
    document.querySelector('#beer-image').src = beer.image_url;

    const beerDesciption = document.querySelector('#beer-description');
    beerDesciption.innerHTML = beer.description;

    const beerForm = document.querySelector('#description-form');

    const reviews = document.querySelector('#review-list');
    reviews.innerHTML = beer.reviews.map(review=>`<li>${review}</li>`);

    const reviewForm = document.querySelector('#review-form');
}

apiCLient.get('/beers').then(beers=>{
    const beerList = document.querySelector('#beer-list')
    beerList.innerHTML = beers.map(beerListItem).join('');
    beerList.querySelectorAll('li').forEach(beerItem=>{
        beerItem.addEventListener("click", (evt)=>{
            const id = Number(evt.target.dataset.id);
            const beer = beers.find(beer=>beer.id === id);
            if(beer) selectBeer(beer);
        })
    })
    selectBeer(beers[0]);
});

