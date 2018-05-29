//DOM ELEMENTS
const spritePara = document.getElementById("sprite");
const mainStatsPara = document.getElementById("mainStats");
const namePara = document.getElementById("name");
const hpPara = document.getElementById("hpBar");
const weightPara = document.getElementById("weight");
const searchPoke = document.getElementById("searchPoke");
const shinyButton = document.getElementById("button");
let elem;
let pokeName = "";

///POKEMON API VARIABLES
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
let url;

function searchPokemon() {
    pokeName = searchPoke.value; 
    if(pokeName.trim() == "") {
        alert("Enter a pokemon!"); 
    } else {
    url = baseURL + pokeName.toLowerCase();
    fetch(url)
    .then(response => {
        return response.json()
    }).then(data => {
        fillTable(data);
    })
    }
}

function fillTable(pokeObj) {
    while (hpPara.firstChild) {
        hpPara.removeChild(hpPara.firstChild);
    }
    while (namePara.firstChild) {
        namePara.removeChild(namePara.firstChild);
    }
    while (weightPara.firstChild) {
        weightPara.removeChild(weightPara.firstChild);
    }
    while (spritePara.firstChild) {
        spritePara.removeChild(spritePara.firstChild);
    }
    while (mainStatsPara.firstChild) {
        mainStatsPara.removeChild(mainStatsPara.firstChild);
    }
    while (shinyButton.firstChild) {
        shinyButton.removeChild(shinyButton.firstChild);
    }
    
    spritePara.insertAdjacentHTML("beforeend", `<img src=${pokeObj.sprites.front_default} />`);
    hpPara.insertAdjacentHTML("beforeend", pokeObj.stats[5].base_stat + '/' + pokeObj.stats[5].base_stat);
    mainStatsPara.insertAdjacentHTML("beforeend", "<u>ID#:</u> " + pokeObj.id + '<br>'+
    "<u>Speed:</u> " + capFirstName(pokeObj.stats[0].base_stat)  + '<br>' +
    "<u>Attack:</u> " + capFirstName(pokeObj.stats[4].base_stat) + '<br>' + 
    "<u>Defense:</u> " + capFirstName(pokeObj.stats[3].base_stat) + '<br>' +
    "<u>HP:</u> " + capFirstName(pokeObj.stats[5].base_stat) + '<br>' + 
    "<u>Special Attack:</u> " + capFirstName(pokeObj.stats[2].base_stat) + '<br>' + 
    "<u>Special Defense:</u> " + capFirstName(pokeObj.stats[1].base_stat));
    namePara.insertAdjacentHTML("beforeend", 'Pokemon: ' + '<b>' + capFirstName(pokeObj.name) + '</b>' );
    weightPara.insertAdjacentHTML("beforeend", pokeObj.height + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +pokeObj.weight);
    switch (pokeObj.types.length) {
        case 2:
            hpPara.insertAdjacentHTML("beforeend", '<br>' +
                capFirstName(pokeObj.types[1].type.name) + '/' + 
                capFirstName(pokeObj.types[0].type.name));
            break;
        case 1:
            hpPara.insertAdjacentHTML("beforeend", '<br>' +
                capFirstName(pokeObj.types[0].type.name));
            break;
        default:
            break;
    }
    shinyButton.insertAdjacentHTML("beforeend", '<button class="btn" onclick="searchShiny()">Shiny</button>');
}
function searchShiny() {
    pokeName = searchPoke.value; 
    if(pokeName.trim() == "") {
        alert("Enter a pokemon!"); 
    } else {
    url = baseURL + pokeName.toLowerCase();
    fetch(url)
    .then(response => {
        return response.json()
    }).then(data => {
        fillShiny(data);
    })
    }
}
function fillShiny(pokeObj) {
    while (hpPara.firstChild) {
        hpPara.removeChild(hpPara.firstChild);
    }
    while (namePara.firstChild) {
        namePara.removeChild(namePara.firstChild);
    }
    while (weightPara.firstChild) {
        weightPara.removeChild(weightPara.firstChild);
    }
    while (spritePara.firstChild) {
        spritePara.removeChild(spritePara.firstChild);
    }
    while (mainStatsPara.firstChild) {
        mainStatsPara.removeChild(mainStatsPara.firstChild);
    }
    while (shinyButton.firstChild) {
        shinyButton.removeChild(shinyButton.firstChild);
    }
    
    spritePara.insertAdjacentHTML("beforeend", `<img src=${pokeObj.sprites.front_shiny} />`);
    hpPara.insertAdjacentHTML("beforeend", pokeObj.stats[5].base_stat + '/' + pokeObj.stats[5].base_stat);
    mainStatsPara.insertAdjacentHTML("beforeend", "<u>ID#:</u> " + pokeObj.id + '<br>'+
    "<u>Speed:</u> " + capFirstName(pokeObj.stats[0].base_stat)  + '<br>' +
    "<u>Attack:</u> " + capFirstName(pokeObj.stats[4].base_stat) + '<br>' + 
    "<u>Defense:</u> " + capFirstName(pokeObj.stats[3].base_stat) + '<br>' +
    "<u>HP:</u> " + capFirstName(pokeObj.stats[5].base_stat) + '<br>' + 
    "<u>Special Attack:</u> " + capFirstName(pokeObj.stats[2].base_stat) + '<br>' + 
    "<u>Special Defense:</u> " + capFirstName(pokeObj.stats[1].base_stat));
    namePara.insertAdjacentHTML("beforeend", 'Pokemon: ' + '<b>' + capFirstName(pokeObj.name) + '</b>' );
    weightPara.insertAdjacentHTML("beforeend", pokeObj.height + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" +pokeObj.weight);
    switch (pokeObj.types.length) {
        case 2:
            hpPara.insertAdjacentHTML("beforeend", '<br>' +
                capFirstName(pokeObj.types[1].type.name) + '/' + 
                capFirstName(pokeObj.types[0].type.name));
            break;
        case 1:
            hpPara.insertAdjacentHTML("beforeend", '<br>' +
                capFirstName(pokeObj.types[0].type.name));
            break;
        default:
            break;
    }
    shinyButton.insertAdjacentHTML("beforeend", '<button class="btn" onclick= "searchPokemon()">Normal</button>');
}
function fillDefault(pokeObj) {
    while (spritePara.firstChild) {
        spritePara.removeChild(spritePara.firstChild);
    }
    spritePara.insertAdjacentHTML("beforeend", `<img src=${pokeObj.sprites.front_default} />`);
    shinyButton.value = "Shiny";
}

function capFirstName(x) {
    for (let j in x) {
        if (j == 0) {
            x = x.replace(x[j], x[j].toUpperCase());
        }
        if (x[j-1] == "-") {
            x = x.replace(x[j], x[j].toUpperCase());
            x = x.replace(x[j-1], " ");
        }
    }
    return x;
}
