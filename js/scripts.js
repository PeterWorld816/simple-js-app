
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




//1.5 Part 2

var pokemonRepository = (function () {
    // Private array to store Pokemon
    var pokemonList = [
      { name: 'Venusaur', type: ['grass'], height: 0.5 },
      { name: 'Charizard', type: ['fire', 'grass'], height: 1 },
      { name: 'Blastoise', type: ['water'], height: 0.2 }
    ];
  
    var publickAPI = {
      getAll: getAll,
      add: add
    };

    //Return the public object
    return publickAPI;

    //Public function to get all Pokemon
    function getAll(){
      return pokemonList;
    }

    //Public function to add a single Pokemon
    function add(pokemon){
      pokemonList.push(pokemon);
    }
})();

  
  // Example usage:
  var newPokemon = { name: 'Squirtle', type: ['water'], height: 0.3 };
  pokemonRepository.add(newPokemon);
  
  var newPokemon = { name: 'Squirtle2', type: ['water'], height: 0.3 };
  pokemonRepository.add(newPokemon);

  // Example usage to retrieve the pokemonList
  var allPokemon = pokemonRepository.getAll();
  console.log(allPokemon);

  //1.5 Part1 


allPokemon.forEach(function(pokemon)
{
    if(pokemon.height>0.9){
        document.write(pokemon.name+'(height:' + pokemon.height +')Wow, that"s big! <br>');
    }
    else{
        document.write(pokemon.name+'(height:' + pokemon.height+')<br>');
    }
});