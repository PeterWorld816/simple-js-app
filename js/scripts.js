//pokemonList array defined
let pokemonList = [
    { name: 'Venusaur', type: ['grass'], height: 0.5 },
    { name: 'Charizard', type: ['fire', 'grass'], height: 1 },
    { name: 'Blastoise', type: ['water'], height: 0.2 }
];

//for loop to iterate over each object within the array


for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 0.9) {
        document.write(pokemonList[i].name+ '(height:' + pokemonList[i].height+ ') Wow, that’s big! <br>');
   } else{
        document.write(pokemonList[i].name + '<br>');
   }
}
