
const detailContainer = document.querySelector(".details-container");
const pageTitle = document.querySelector("title")

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://rickandmortyapi.com/api/character/" + id;

console.log(id);

async function fetchCharacter() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        pageTitle.innerHTML = `${json.name} | Rick & Morty`;

        detailContainer.innerHTML = `<div class="characterContainer">
                                        <div class="img-container">
                                            <h2>${json.name}</h2>
                                            <img src=${json.image}>
                                        </div>
                                        <div class="text-container">
                                            <h3>Status: ${json.status}</h3>
                                            <p>Species: ${json.species}</p>
                                            <p>Location: ${json.location.name}</p>
                                            <p>Origin: ${json.origin.name}</p>
                                            <p>Appears in ${json.episode.length} episode(s)</p>
                                        </div>
                                    </div>`

    }

    catch (error) {
        resultsContainer.innerHTML = displayError("An error occured while trying to fetch data");
    }
}

fetchCharacter();