
//pokemonList array defined
/*
let pokemonList = [
    { name: 'Venusaur', type: ['grass'], height: 0.5 },
    { name: 'Charizard', type: ['fire', 'grass'], height: 1 },
    { name: 'Blastoise', type: ['water'], height: 0.2 }
];
*/
//for loop to iterate over each object within the array

/*
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 0.9) {
        document.write(pokemonList[i].name+ '(height:' + pokemonList[i].height+ ') Wow, that’s big! <br>');
   } else{
        document.write(pokemonList[i].name +  '(height:' + pokemonList[i].height +') <br>');
   }
}

*/

//1.5 Part1 





//1.5 Part 2

var pokemonRepository = (function () {
    // Private pokemonList variable
    var pokemonList = [
      { name: 'Venusaur', type: ['grass'], height: 0.5 },
      { name: 'Charizard', type: ['fire', 'grass'], height: 1 },
      { name: 'Blastoise', type: ['water'], height: 0.2 }
    ];
  
    return {
      // Public function to add a single item to pokemonList
      add: function (item) {
        // Ensure that the item is an object and has a name property
        if (typeof item === 'object' && 'name' in item) {
          pokemonList.push(item);
          console.log(item.name + ' added to pokemonList');
        } else {
          console.error('Invalid Pokémon format. Please provide an object with a "name" property.');
        }
      },
  
      // Other public functions related to pokemonList go here
      pokemonList.forEach(function(pokemon)
{
    if(pokemon.height>0.9){
        document.write(pokemon.name+'(height:' + pokemon.height +')Wow, that"s big! <br>');
    }
    else{
        document.write(pokemon.name+'(height:' + pokemon.height+')<br>');
    }
});
  
      // Public function to retrieve the pokemonList
      getAll: function () {
        return pokemonList;
      }
    };
  })();
  
  // Example usage:
  var newPokemon = { name: 'Squirtle', type: ['water'], height: 0.3 };
  pokemonRepository.add(newPokemon);
  
  // Example usage to retrieve the pokemonList
  var allPokemon = pokemonRepository.getAll();
  console.log(allPokemon);