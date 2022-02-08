import { animals } from '../data.js';

const animalName = document.getElementById('animal-name');
const animalImage = document.getElementById('animal-image');
const animalSays = document.getElementById('animal-says');

function findById(id, data) {
    return data.find((item) => item.id === id);
}

const params = new URLSearchParams(window.location.search);
const animal = findById(params.get('id'), animals);
animalName.textContent = animal.name;
animalImage.src = `../assets/${animal.type}.svg`;
animalSays.textContent = animal.says;
