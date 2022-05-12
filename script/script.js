import printCard from "../modules/printPokemon.js";
import printSearchedCard from "../modules/printSearchedPokemon.js";
import search from "../modules/search.js";

const main = document.getElementById("main");
const form = document.getElementById("form");

const url = 'https://pokeapi.co/api/v2/pokemon/';
let valor = 1;
let pokemon;
const nameResults = [];

const fetchData = async () => {
    while (valor < 50) {
        valor++;

        try {

            const res = await fetch(url + valor);
            const data = await res.json();

            // console.log(data);

            pokemon = {
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                nombre: data.name,
                experiencia: data.base_experience,
                hp: data.stats[0].base_stat,
                ataque: data.stats[1].base_stat,
                defensa: data.stats[2].base_stat,
                especial: data.stats[3].base_stat,
            };

            nameResults.push(data);
            
            printCard(pokemon, main);
        } catch (error) {
            console.log(error);
        }

    }
};

document.addEventListener("DOMContentLoaded", () => {
    fetchData();
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const value = document.getElementById('search').value;

    printSearchedCard(search(value, nameResults, main) , main);
});
