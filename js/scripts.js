//pokemonList array defined

let pokemonList =[

    {name: 'balbasure', type: "grass", height: 0.5},
    {name:'charmander', type: 'fire', height: 0.6},
    {name:'squirtle', type: 'water', height: 0.5} 

];

    //for loop to iterate over each item in pokemonList
for (let i = 0; i <pokemonList.length; i++)
{
   let currentPokemon=pokemonList[i];

   //Using document.write() to write to the DOM
   document.write(currentPokemon.name+'height:' +currentPokemon.height);

}