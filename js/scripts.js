//pokemonList array defined

let pokemonList = [
    { name: 'balbasure', type: ['grass'], height: 0.5 },
    { name: 'charmander', type: ['fire', 'grass'], height: 1 },
    { name: 'squirtle', type: ['water'], height: 0.2 }
];

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 1 && pokemonList[i].height > 0.4) {
        console.log(pokemonList[i].name + '');
    } else if (pokemonList[i].height < 0.3) {
        console.log(pokemonList[i].name + '');
    } else {
        console.log(pokemonList[i].name + ' is large pokemon');
    }

}



