var e = document.getElementById('namePoke');
var pokeSelect = e.options[e.selectedIndex];
const url = "https://pokeapi.co/api/v2/pokemon/";
var urlToFetch = url.concat(pokeSelect.value);

var idPokemon = "";
var nomePokemon = "";
var tipoPokemon = "";
var pesoPokemon = "";

fetch(urlToFetch)
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error('Failed retrieving information', err);
    });

async function pegarNomePokemon(nome) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    const pokemon = await response.json();
    return pokemon;
}

//Link para buscar os Types em outro lugar... pode usar o ID caso necessário
//Alguns ID geram erro nesse link
async function pegarTypePokemon(type) {
    const response = await fetch(`https://pokeapi.co/api/v2/encounter-condition/${type}`);
    const pokemon = await response.json();
    return pokemon;
}

pegarNomePokemon(pokeSelect.value)
    .then(pokemon => nomePokemon = (pokemon.name));
pegarNomePokemon(pokeSelect.value)
    .then(pokemon => console.log(pokemon.name));

pegarNomePokemon(pokeSelect.value)
    .then(pokemon => idPokemon = (pokemon.id));
pegarNomePokemon(pokeSelect.value)
    .then(pokemon => console.log(pokemon.id));

//Para pegar os Types usa o ID e o location_area_encounters
pegarNomePokemon(pokeSelect.value)
    .then(pokemon => tipoPokemon = (pokemon.location_area_encounters));
pegarNomePokemon(pokeSelect.value)
    .then(pokemon => console.log(pokemon.location_area_encounters));

pegarNomePokemon(pokeSelect.value)
    .then(pokemon => pesoPokemon = (pokemon.weight));
pegarNomePokemon(pokeSelect.value)
    .then(pokemon => console.log(pokemon.weight));


function incluirPokemon() {
    document.getElementById("idPokemon").innerHTML = idPokemon;
    document.getElementById("nomePokemon").innerHTML = nomePokemon;
    document.getElementById("tipoPokemon").innerHTML = tipoPokemon;
    document.getElementById("pesoPokemon").innerHTML = pesoPokemon;
}