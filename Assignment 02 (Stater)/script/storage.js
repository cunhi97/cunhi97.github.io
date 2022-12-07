'use strict';

let petArr = JSON.parse(getFromStorage('petArr'));
//Neu chua co petArr trong localStorage thi se gan mang rong
if(petArr==null) petArr=[];

let breedArr = JSON.parse(getFromStorage('breedArr'));
//Neu chua co petArr trong localStorage thi se gan mang rong
if(breedArr==null) breedArr=[];

console.log(breedArr,petArr);

function saveToStorage(key, petArr) {
    localStorage.setItem(key, JSON.stringify(petArr));
}

function getFromStorage(key) {
    return localStorage.getItem(key);
}