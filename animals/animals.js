import { animals } from '../data.js';

const animalName = document.getElementById('animal-name');
const animalImage = document.getElementById('animal-image');
const animalSays = document.getElementById('animal-says');

function findById(id, data) {
    return data.find((item) => item.id === id);
}
