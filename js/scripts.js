//pokemonList array defined

let pokemonList =[

    {name: 'balbasure', type: "grass", height: 0.5},
    {name:'charmander', type: 'fire', height: 1},
    {name:'squirtle', type: 'water', height: 0.2} 

];

    //for loop to iterate over each item in pokemonList
    for (let i = 0; i <pokemonList.length; i++)
    {
       let currentPokemon=pokemonList[i];
    
       //Using document.write() to write to the DOM
       document.write(currentPokemon.name+' height:' +currentPokemon.height+'<br>');
    
    }

for (let i=0; i<pokemonList.length; i++) {
    if(pokemonList[i].height < 1 && pokemonList[i].height > 0.4){
        console.log(currentPokemon.name + 'mid-size pokemon');
    }else if(pokemonList[i]>0.9){
        console.log(currentPokemon.name+'big Pokemon');
    }else{
        console.log(currentPokemon.name + 'small pokemon');
    }
        
    }


    
