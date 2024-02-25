// Your JavaScript code goes here
let pokemonRepository = (function () {
    let modalContainer = document.getElementById('modal-container');
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let pokemonList = [];

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon &&
            "detailsUrl" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.error("Invalid Pokemon data");
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
        button.classList.add("btn", "btn-primary", "button-class");
        button.setAttribute("data-toggle", "modal");
        button.setAttribute("data-target", "#modal-container");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);

        button.addEventListener("click", function () {
            showDetails(pokemon);
            $('#exampleModal').modal('show'); 
        });
    }

   

    function loadList() {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                json.results.forEach(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url
                    };
                    add(pokemon);
                });
            })
            .catch(function (e) {
                console.error(e);
            });
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (details) {
                item.imageUrl = details.sprites.front_default;
                item.height = details.height;
                item.types = details.types;
            })
            .catch(function (e) {
                console.error(e);
            });
    }


    function showModal(pokemon) {
        let modalBody = document.querySelector('.modal-body');
        let modalHeader = document.querySelector('.modal-header');
        modalBody.innerHTML = '';
    
        let modalTitle = document.querySelector('.modal-title');
        var capitalizedName = pokemon.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        modalTitle.innerHTML = capitalizedName;
    
        let closeButtonElement = document.querySelector('.close');
    
        let imageFront = document.createElement('img');
        imageFront.classList.add('modal-img');
        imageFront.src = pokemon.imageUrl;
        imageFront.alt = 'Front image of ' + pokemon.name;

    
        let typesElement = document.createElement('p');
        let types = [pokemon.types[0].type.name];
        for (let i = 1; i < pokemon.types.length; i++) {
          types.push(', ' + pokemon.types[i].type.name);
        }
        typesElement.innerHTML = 'Types: ' + types.join('');
    
        let heightElement = document.createElement('p');
        heightElement.classList.add('modal-body');
        heightElement.innerText = `Height: ${pokemon.height}`;

        let imgElement = document.createElement('img');
        imgElement.src = pokemon.imageUrl;
        imgElement.alt = pokemon.name;
        imgElement.classList.add('modal-image', 'img-fluid');

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(heightElement);
        modal.appendChild(imgElement);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
    }

    function hideModal() {
        modalContainer.classList.remove('is-visible');
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    modalContainer.addEventListener('click', function (e) {
        if (e.target === modalContainer) {
            hideModal();
        }
    });

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };

})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });

});


