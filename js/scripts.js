let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';





    
    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon

        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }
    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);

        //add event listner to the button
        button.addEventListener("click", function () {
            showDetails(pokemon);
        })

    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
     pokemonRepository.loadDetails(pokemon).then(function() {
        showModal(pokemon);
     });
        
    }
 
    function showModal(pokemon) {
        // Assuming you have a modal element in your HTML with the id 'pokemonModal'
        let modal = document.getElementById('pokemonModal');
      
        // Set modal content
        let modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = `
          <h2>${pokemon.name}</h2>
          <p>Height: ${pokemon.height}</p>
          <img src="${pokemon.imageUrl}" alt="${pokemon.name}" />
        `;
      
        // Show modal
        modal.style.display = 'block';
      
        // Close modal on overlay click
        modal.addEventListener('click', function (e) {
          if (e.target === modal) {
            modal.style.display = 'none';
          }
        });
      
        // Close modal on ESC key press
        window.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
          }
        });
      }



    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails:showDetails
    };
})();


pokemonRepository.loadList().then(function () {

    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });

});
